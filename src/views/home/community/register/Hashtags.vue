<template>
	<v-card flat color="transparent">
		<v-card-text>
			<v-card dark>
				<v-card-actions>
					<v-icon x-large>mdi-pound-box</v-icon>
					<v-card-title>
						Give identity for your community using tags
					</v-card-title>
				</v-card-actions>
			</v-card>
		</v-card-text>
		<v-card-text>
			<div class="d-flex align-center">
				<tag-field v-model="payload.tags"
					:errors="formErrors"
					:color="community.theme.color"
				/>
				<v-fab-transition>
					<v-btn icon large class="ml-2"
						v-if="payload.tags.length > 0"
						:color="`${community.theme.color} lighten-2`"
						@click="addHahstags"
					><v-icon>mdi-send</v-icon></v-btn>
				</v-fab-transition>
			</div>
		</v-card-text>
		<v-card-actions>
			<v-avatar color="grey" tile class="rounded">
				<v-icon dark>mdi-help</v-icon>
			</v-avatar>
			<div class="px-4 px13">
				Set your hashtags which precisely describes your community. Hashtags will represent your publication preference. It will be used for user recommendations too.
			</div>
		</v-card-actions>
		<div class="pt-4 pb-2">
			<v-divider />
		</div>
		<v-card-actions>
			<v-btn color="grey darken-3" dark outlined
				:to="{name: 'Community Rules'}"
			>
				rules
			</v-btn>
			<v-spacer />
			<v-btn color="grey lighten-1" dark depressed @click="skip">skip</v-btn>
			<v-btn :color="community.theme.color" dark
				@click="next"
			>
				Next
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";

export default {
	name: "Hashtags",
	mixins: [PostMixin],
	data: () => ({
		payload: {
			tags: []
		}
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
		state() {
			return this.community.create_progress
				.find(item => item.state === "3")
		},
	},
	created() {
		this.populateSavedTags()
	},
	methods: {
		populateSavedTags() {
			console.log(this.community)
			if (this.community.hashtags.length)
				this.community.hashtags.forEach(tag => {
					this.payload.tags.push({id: tag.tag, tag: tag.name})
				})
		},
		addHahstags() {
			this.post(
				this.$util.format(
					this.$urls.community.addHashtag,
					this.community.id
				),
				{ tags: this.payload.tags}
			).then(() => {
				if (Object.keys(this.postInstance).length > 0) {
					this.$helper.setCommunityInProgress(this.postInstance)
					this.$store.dispatch("community/setInProgress", this.postInstance)
				}
			})
		},
		skip() {
			if (!this.state.is_skipped) {
				this.post(
					this.$util.format(
						this.$urls.community.skipProgress,
						this.state.id
					)
				).then(() => {
					this.$helper.setCommunityInProgress(this.postInstance)
				})
			}
			this.$router.push({name: "Community Authorization"})
		},
		next() {
			let messages = []
			if (this.community.hashtags < 3) messages.push("You must add at least three tags to process into the next step.")
			if (messages.length >= 1) {
				this.openSnack(messages.join("\n"), {multiline: true})
			} else {
				this.post(
					this.$util.format(
						this.$urls.community.completeProgress,
						this.state.id
					)
				)
					.then(() => {
						this.$helper.setCommunityInProgress(this.postInstance)
						this.$store.dispatch("community/setInProgress", this.postInstance)
						this.$router.push({name: "Community Authorization"})
					})
			}
		}
	}
}
</script>

<style scoped>

</style>

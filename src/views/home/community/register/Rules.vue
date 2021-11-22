<template>
	<v-card flat color="transparent">
		<v-card-text>
			<v-card dark
				:img="require('@/assets/rules-and-regulations.jpg')"
				height="100"
				class="d-flex align-start"
			>
				<v-card-title class="pt-1">
					This is Rules
				</v-card-title>
			</v-card>
			<v-card-subtitle class="pb-1">
				Set rules for your subscribers to create publication on behalf of your community.
			</v-card-subtitle>
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text v-if="community.rules && community.rules.length">
			<v-list>
				<v-subheader class="px-4 weight-500">Rules</v-subheader>
				<v-divider/>
				<v-list-item
					v-for="(rule, index) in community.rules"
					:key="index"
				>
					<v-list-item-avatar color="grey lighten-2 weight-300 px22">
						{{index + 1}}
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>{{rule.title}}</v-list-item-title>
						<v-list-item-subtitle>{{rule.description}}</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action>
						<v-btn x-small color="error" @click="removeRule(rule.id, index)">Remove rule</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card-text>
		<v-card-text>
			<text-field
				v-model="rule.title"
				icon="mdi-format-title"
				label="Rule Title"
				name="title"
				:errors="formErrors"
			/>
			<div class="py-4" />
			<text-area
				v-model="rule.description"
				icon="mdi-subtitles"
				label="Rule Description"
				name="description"
				counter="512"
				:errors="formErrors"
			/>
		</v-card-text>
		<v-card-actions class="flex-wrap pa-3">
			<v-btn class="ma-1" outlined color="grey darken-3"
				:to="{name: 'Community Display'}"
			>
				Display
			</v-btn>
			<v-btn depressed color="grey lighten-1"
				@click="skip"
				class="ma-1" dark
			>
				Skip
			</v-btn>
			<v-spacer />
			<v-btn class="ma-1" outlined color="primary" @click="saveAndAddAnotherRule">
				Save Add Another
			</v-btn>
			<v-btn
				@click="next"
				color="primary" class="ma-1 weight-600 px15"
			>
				Next
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Snack from "@/mixin/Snack.js";
import RuleMixin from "@/mixin/RuleMixin.js";

export default {
	name: "Rules",
	mixins: [Snack, RuleMixin],
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
		state() {
			return this.community.create_progress
				.find(item => item.state === "2")
		},
	},
	methods: {
		...mapMutations("community", ["SET_IN_PROGRESS"]),

		saveAndAddAnotherRule() {
			this.saveRule()
				.then(() => {
					if (Object.keys(this.postInstance).length) {
						this.$helper.setCommunityInProgress(this.postInstance)
						this.SET_IN_PROGRESS(this.postInstance)
						this.rule = {title: null, description: null}
					}
				})
		},
		removeRule(id) {
			this.deleteRule(id).then(() => {
				this.$helper.setCommunityInProgress(this.deleteResponse)
				this.SET_IN_PROGRESS(this.deleteResponse)
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
			this.$router.push({name: "Community Hashtags"})
		},
		next() {
			let messages = []
			if (this.community.rules.length < 3) messages.push("You must add three rule to process into the next step.")
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
						this.SET_IN_PROGRESS(this.postInstance)
						this.$router.push({name: "Community Hashtags"})
					})
			}
		}
	}
}
</script>

<style scoped>

</style>

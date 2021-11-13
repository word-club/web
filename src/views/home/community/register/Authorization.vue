<template>
	<v-card class="transparent" flat>
		<v-card-text>
			<v-card dark color="success">
				<v-card-actions>
					<v-avatar>
						<v-icon large>mdi-check-circle</v-icon>
					</v-avatar>
					<v-card-title class="px-2">
						Authorize your Community
					</v-card-title>
				</v-card-actions>
			</v-card>
		</v-card-text>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col v-if="authorized" cols="12">
					<v-card outlined>
						<v-card-text>
							Cheers! Community email is now authorized.
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" class="d-flex align-center">
					<text-field
						v-model="email"
						name="email"
						label="Email Address"
						icon="mdi-at"
						type="email"
						:readonly="community.is_authorized"
						:color="community.theme.color"
					/>
					<v-fab-transition>
						<v-btn
							v-if="!authorized && email"
							class="ml-2" icon
							:color="`${community.theme.color} lighten-2`"
							@click="requestAuthorization"
						>
							<v-icon>mdi-send</v-icon>
						</v-btn>
					</v-fab-transition>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-5">
			<v-divider />
			<div class="py-1" />
			<v-card-actions>
				<v-btn color="grey darken-3"
					dark outlined
					:to="{'name': 'Community Hashtags'}"
				>
					Hashtags
				</v-btn>
				<v-spacer />
				<v-btn color="grey lighten-1"
					dark depressed
					@click="skip"
				>
					Skip
				</v-btn>
				<v-btn :color="community.theme.color"
					@click="next" dark
				>
					Next
				</v-btn>
			</v-card-actions>
		</div>
		<v-dialog max-width="300" :value="confirmCode"
			persistent
		>
			<v-card>
				<v-card-title class="d-flex justify-center">
					Confirm Email Verification
				</v-card-title>
				<v-divider />
				<v-card-actions class="justify-center align-center py-6">
					<v-btn :color="community.theme.color" dark
						@click="authorize"
					>
						Authorize
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-card>
</template>

<script>
import TextField from "@/components/form/TextField.vue";
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "Authorization",
	mixins: [Snack, PostMixin, PatchMixin],
	components: {TextField},
	data: () => ({
		email: null,
		confirmCode: null,
		authorized: false,
	}),
	computed: {
		...mapGetters("community", ["inProgress"]),
		state() {
			return this.community.create_progress
				.find(item => item.state === "4")
		},
	},
	created() {
		this.email = this.community.email
		this.confirmCode = this.$route.params.code
		this.authorized = this.community.is_authorized
	},
	methods: {
		authorize() {
			if (!this.confirmCode) return
			const url = this.$util.format(this.$urls.community.confirmAuthorization, this.confirmCode)
			this.post(url)
				.then(() => {
					if (Object.keys(this.postInstance).length) {
						this.openSnack("Email verified successfully.", {color: "success", timeout: 6000})
						this.$helper.setCommunityInProgress(this.postInstance)
						this.$store.dispatch("community/setInProgress", this.postInstance)
						this.authorized = true
						this.confirmCode = null
						this.$router.push({name: "Community Authorization"})
					}
					else this.openSnack("Email verification failed.")
				})
		},
		requestAuthorization() {
			const url = this.$util.format(this.$urls.community.requestAuthorization, this.community.id)
			this.post(url).then(() => {
				console.log(this.formErrors)
				console.log(Object.keys(this.formErrors).length)
				if (Object.keys(this.formErrors).length === 0) {
					this.openSnack(
						"Check you email address for verification link.",
						{color: "success", timeout: 10000}
					)
				}
			})
		},
		next() {
			let messages = []
			if (!this.community.is_authorized) messages.push("You must verify your email address to proceed to the next step.")
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
						this.$router.push({name: "Community Administration"})
					})
			}
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
			this.$router.push({name: "Community Administration"})
		},
	}
}
</script>

<style scoped>

</style>

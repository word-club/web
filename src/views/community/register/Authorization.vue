<template>
	<v-card class="transparent" flat>
		<v-card-text>
			<v-card dark :color="isAuthorized ? 'success' : 'grey'">
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
				<v-col v-if="isAuthorized" cols="12">
					<v-card outlined>
						<v-card-text>
							<b>Cheers!</b> Your community email is <b>AUTHORIZED</b>.
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12">
					<text-field
						v-model="email"
						name="email"
						label="Email Address"
						icon="mdi-at"
						type="email"
						:errors="patchErrors"
						:readonly="isAuthorized"
						:color="community.theme.color"
					/>
					<v-fab-transition>
						<v-btn
							v-if="!isAuthorized && !this.community.email && email"
							class="ma-2" :color="`${community.theme.color} lighten-2`"
							@click="setEmail"
						>
							Set Email
						</v-btn>
					</v-fab-transition>
					<v-fab-transition>
						<v-btn
							v-if="!isAuthorized && email"
							class="ma-2"
							:color="`${community.theme.color} lighten-2`"
							@click="requestAuthorization"
						>
							Request Authorization
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
import {mapGetters} from "vuex";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";
import CommunityProgress from "@/mixin/CommunityProgress.js";

export default {
	name: "Authorization",
	mixins: [Snack, CommunityProgress, PatchMixin],
	data: () => ({
		email: null,
		confirmCode: null,
		authorized: false,
		stateCode: "4",
		nextRoute: "Community Administration",
		requiredFields: [],
		invalidMessage: "You must verify your email address to proceed to the next step."
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
		isValid() {
			return this.community.is_authorized
		},
		isAuthorized() {
			return this.community.is_authorized
		}
	},
	created() {
		this.email = this.community.email
		this.confirmCode = this.$route.params.code
	},
	methods: {
		setEmail() {
			const url = this.$util.format(this.$urls.community.detail, this.community.id)
			this.patch(url, {email: this.email})
				.then(() => {
					if (this.patchSuccess) {
						this.$helper.setCommunityInProgress(this.patchInstance)
						this.$store.dispatch("community/setInProgress", this.patchInstance)
						this.openSuccessSnack("Added email successfully.")
					}
				})
		},
		authorize() {
			if (!this.confirmCode) return
			const url = this.$util.format(this.$urls.community.confirmAuthorization, this.confirmCode)
			this.post(url)
				.then(() => {
					if (this.success) {
						this.openSnack("Email verified successfully.", {color: "success", timeout: 6000})
						this.$helper.setCommunityInProgress(this.postInstance)
						this.$store.dispatch("community/setInProgress", this.postInstance)
						this.confirmCode = null
						this.$router.push({name: "Community Authorization"})
					}
					else this.openSnack("Email verification failed.")
				})
		},
		requestAuthorization() {
			const url = this.$util.format(this.$urls.community.requestAuthorization, this.community.id)
			this.post(url).then(() => {
				if (this.success) {
					this.openSnack(
						"Check you email address for verification link.",
						{color: "success", timeout: 10000}
					)
				} else {
					this.openSnack(this.formErrors.detail)
				}
			})
		},
	}
}
</script>

<style scoped>

</style>

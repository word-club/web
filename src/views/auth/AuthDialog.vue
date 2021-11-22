<template>
	<v-dialog
		persistent scrollable
		:value="authMode.state"
		max-width="600"
	>
		<v-card class="rounded-tl-0 rounded-bl rounded-br mx-auto">
			<v-row no-gutters>
				<v-col cols="2">
					<v-img :src="require('@/assets/auth.jpg')"
						height="100%" width="100%"
						class="rounded-bl rounded-br-0"
					/>
				</v-col>
				<v-col cols="10" class="px-6">
					<div class="py-6 d-flex justify-end">
						<v-btn icon @click="closeAuthDialog"><v-icon>mdi-close-circle</v-icon></v-btn>
					</div>
					<v-card-title class="px24 px-6 grey--text text--darken-2">
						{{authHeading}}
					</v-card-title>
					<v-divider v-if="isSignUpMode" class="mx-4" />
					<div class="pa-4 form-content">
						<v-card outlined class="my-4"
							v-if="errors.length"
						>
							<v-list-item v-for="(error, index) in errors"
								:key="index"
							>
								<v-list-item-content>
									<v-list-item-title class="error--text">{{error.detail}}</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn icon color="error" @click="errors.splice(index)"><v-icon>mdi-close</v-icon></v-btn>
								</v-list-item-action>
							</v-list-item>
						</v-card>
						<div class="py-4"
							v-if="isSignUpMode"
						>
							<text-field
								v-model="payload.first_name"
								icon="mdi-form-textbox"
								name="first_name"
								label="First Name"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4"
							v-if="isSignUpMode"
						>
							<text-field
								v-model="payload.last_name"
								icon="mdi-form-textbox"
								name="last_name"
								label="Last Name"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4">
							<text-field
								v-model="payload.username"
								icon="mdi-account"
								name="username"
								label="Username"
								@keyup="submitIfEnterPressed"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4"
							v-if="isSignUpMode"
						>
							<date-picker
								v-model="payload.profile.birth_date"
								icon="mdi-calendar"
								name="birth_date"
								label="Birth Date"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4">
							<text-field
								v-model="payload.password"
								type="password"
								icon="mdi-lock"
								name="password"
								label="Password"
								@keyup="submitIfEnterPressed"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4 d-flex"
							v-if="isSignUpMode"
						>
							<text-field
								v-model="payload.confirm_password"
								type="password"
								icon="mdi-lock-check"
								name="confirm_password"
								label="Confirm Password"
								:errors="formErrors"
							/>
							<v-fab-transition>
								<v-icon v-if="payload.confirm_password"
									class="ml-2" :color="isValidPassword ? 'success' : 'error'"
								>
									mdi-check-bold
								</v-icon>
							</v-fab-transition>
						</div>
					</div>
					<v-card-actions class="justify-space-between">
						<v-btn v-if="!isResetMode" text x-small class="auth-text-btn" rounded>Forget Password?</v-btn>
						<v-btn v-if="!isSignUpMode" text x-small class="auth-text-btn" rounded>Register</v-btn>
						<v-btn v-if="!isLoginMode" text x-small class="auth-text-btn" rounded>Login</v-btn>
					</v-card-actions>
					<div class="py-4"></div>
					<v-card-actions>
						<v-btn
							v-if="isLoginMode"
							block color="primary"
							depressed rounded
							height="45" class="px18 font-bold"
							@click="login" :loading="posting"
						>
							Login
						</v-btn>
						<v-btn
							v-if="isSignUpMode"
							block color="primary"
							depressed rounded
							height="45" class="px18 font-bold"
							@click="signUp" :loading="posting"
						>
							Sign Up
						</v-btn>
						<v-btn
							v-if="isResetMode"
							block color="primary"
							depressed rounded
							height="45" class="px18 font-bold"
							@click="requestReset" :loading="posting"
						>
							Request For Reset Code
						</v-btn>
					</v-card-actions>
					<div class="py-1"></div>
				</v-col>
			</v-row>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixin/Snack.js";
import PostMixin from "@/mixin/PostMixin.js";
import CheckRequiredMixin from "@/mixin/CheckRequiredMixin.js";

export default {
	name: "AuthDialog",
	mixins: [Snack, PostMixin, CheckRequiredMixin],
	data: () => ({
		payload: {
			username: null,
			password: null,
			first_name: null,
			last_name: null,
			profile: {birth_date: null},
			confirm_password: null,
		},
		errors: []
	}),
	computed: {
		...mapGetters(["authMode"]),
		isLoginMode() { return this.authMode.mode === "login"},
		isSignUpMode() { return this.authMode.mode === "signup"},
		isResetMode() { return this.authMode.mode === "reset"},
		authHeading() {
			if (this.isLoginMode) return "Login to WordClub"
			else if (this.isSignUpMode) return "Begin your journey with WordClub"
			else if (this.isResetMode) return "Reset your password"
			else return "Invalid Mode"
		},
		isValidPassword() {
			if (!this.payload.password) return false
			else return this.payload.password === this.payload.confirm_password
		}
	},
	methods: {
		getGreetName(user) {
			if (user.first_name && user.first_name !== "") return user.first_name
			return user.username
		},
		submitIfEnterPressed: function (e) {
			if (this.isLoginMode && e.keyCode === 13) {
				this.login()
			}
		},
		closeAuthDialog() {
			this.$store.dispatch("setAuthMode", {state: false, mode: null})
			this.formErrors = {}
		},
		login() {
			if (this.checkRequired(["username", "password"])) return
			this.post(this.$urls.user.login, {
				username: this.payload.username,
				password: this.payload.password
			}).then(() => {
				if (this.success) {
					this.openSuccessSnack(`Welcome ${this.getGreetName(this.postInstance.data)}!`)
					this.$helper.setAccessToken(this.postInstance.token)
					this.$helper.setCurrentUser(this.postInstance.data)
					this.$store.dispatch("user/setCurrentUser", this.postInstance.data)
					this.closeAuthDialog()
					this.$router.push({name: "Home"})
				} else {
					if (this.statusCode < 500 && this.statusCode >= 400) {
						const nonFieldErrors = this.formErrors["non_field_errors"]
						const detail =  this.formErrors["detail"]
						if (nonFieldErrors) {
							this.errors = nonFieldErrors
							this.openSnack(nonFieldErrors[0], {timeout: 6000})
						}
						else if (detail) {
							this.errors = [this.formErrors]
							this.openSnack(detail, {timeout: 6000})
						}
						else this.openSnack("Login failed. Please try again.")
					}
				}
			})
		},
		signUp() {
			const required = Object.keys(this.payload)
			if (this.checkRequired(required)) return
			if (!this.isValidPassword) return
			this.post(this.$urls.user.register, this.payload).then(() => {
				if(this.success) {
					this.openSuccessSnack(
						"Cheers! Your account is successfully added to our system.\n" +
							"You can now log in and subscribe our communities and create publications.",
						{multiline: true}
					)
					this.$store.dispatch("setAuthMode", {state: true, mode: "login"})
				} else {
					this.openSnack("Sorry! System failed to register your data.\n" +
						"Please check your form and try again.", {multiline: true})
				}
			})
		},
		requestReset() {},
	}
}
</script>

<style scoped lang="scss">
.auth-text-btn {
	color: darkgrey !important;
	height: 30px !important;
	::v-deep.v-btn__content {
		padding: 4px;
		font-size: 14px;
	}
}
.auth-text-btn:hover {
	color: dimgrey !important;
}
.form-content {
	max-height: 500px; overflow-y: auto;
}
</style>

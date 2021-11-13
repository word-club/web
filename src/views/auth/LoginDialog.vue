<template>
	<v-dialog
		persistent
		:value="loginState"
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
						<v-btn icon @click="closeLogin"><v-icon>mdi-close-circle</v-icon></v-btn>
					</div>
					<v-card-title class="px24 px-6">Login to WordClub</v-card-title>
					<v-card-text>
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
						<div class="py-4">
							<text-field
								v-model="auth.username"
								icon="mdi-account"
								name="username"
								label="Username"
								@keyup="submitIfEnterPressed"
								:errors="formErrors"
							/>
						</div>
						<div class="py-4">
							<text-field
								v-model="auth.password"
								type="password"
								icon="mdi-lock"
								name="password"
								label="Password"
								@keyup="submitIfEnterPressed"
								:errors="formErrors"
							/>
						</div>
						<div class=" pt-4 d-flex justify-space-between flex-wrap">
							<v-btn disabled text x-small class="auth-text-btn" rounded>Forget Password?</v-btn>
							<v-btn disabled text x-small class="auth-text-btn" rounded>Register</v-btn>
						</div>
					</v-card-text>
					<div class="py-4"></div>
					<v-card-text>
						<v-btn block color="primary"
							depressed rounded
							height="45" class="px18 font-bold"
							@click="login" :loading="posting"
						>
							Login
						</v-btn>
					</v-card-text>
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

export default {
	name: "LoginDialog",
	components: {TextField: () => import("@/components/form/TextField.vue")},
	mixins: [Snack, PostMixin],
	data: () => ({
		auth: {
			username: null,
			password: null
		},
		errors: []
	}),
	computed: {
		...mapGetters(["loginState"])
	},
	methods: {
		submitIfEnterPressed: function (e) {
			if (e.keyCode === 13) {
				this.login()
			}
		},
		closeLogin() {
			this.$store.dispatch("setLoginState", false)
		},
		login() {
			if (!this.auth.username || !this.auth.password) return
			this.post(this.$urls.user.login, this.auth)
				.then(() => {
					if (this.postInstance) {
						this.openSnack("Logged in successfully", {color: "success"})
						this.$helper.setAccessToken(this.postInstance.token)
						this.$helper.setCurrentUser(this.postInstance.data)
						this.$store.dispatch("user/setCurrentUser", this.postInstance.data)
						this.closeLogin()
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
							console.log(this.errors)
						}
					}
				})
		}
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
</style>

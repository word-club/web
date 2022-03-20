<template>
	<v-card color="transparent" flat max-width="820" class="overflow-hidden">
		<v-card-title>Account Settings</v-card-title>
		<v-card-text>
			<div class="overline pb-2">
				<div>account preferences</div>
				<v-divider />
			</div>
			<div class="account-email form-box">
				<div class="form-content">
					<div class="form-header">
						Email Address
					</div>
					<div class="form-description">
						{{ user.email }}
						<v-scale-transition>
							<div class="form-input" v-if="editEmail">
								<text-field
									type="email"
									label="Email Address"
									v-model="emailToUpdate"
									:errors="patchErrors"
									icon="mdi-email"
									name="email"
									@change="patchAccount({email: emailToUpdate})"
								/>
							</div>
						</v-scale-transition>
					</div>
					<div class="form-alert">
						<v-chip
							class="alert-chip"
							label
							v-if="!user.email"
							color="warning"
							dark
						>
							<v-icon left>mdi-alert</v-icon>
							Your profile does not have an email address connected.
							It is recommended to connect an email address to your profile.
						</v-chip>
					</div>
				</div>
				<div class="form-actions">
					<v-scale-transition>
						<v-btn v-if="editEmail" rounded color="primary" outlined @click="editEmail = false">done with update</v-btn>
						<v-btn v-else-if="user.email" rounded outlined color="primary" @click="changeEmail()">Change</v-btn>
						<v-btn v-else outlined color="primary" rounded @click="addEmail()">Add Email Address</v-btn>
					</v-scale-transition>
				</div>
			</div>
			<div class="account-gender form-box">
				<div>
					<div class="form-header">Gender</div>
					<div class="form-description">
						WordClub will never share this information and only uses it to improve what content you see.
					</div>
				</div>
				<div class="form-actions">
					<v-menu offset-y>
						<template	#activator="{attrs, on}">
							<v-btn text color="primary" rounded
								v-bind="attrs" v-on="on"
							>
								{{ getGenderString(gender.type) || 'Select' }}
								<v-icon right>mdi-chevron-down</v-icon>
							</v-btn>
						</template>
						<v-list dense>
							<v-list-item v-for="(choice, index) in $constants.GENDER_OPTIONS"
								:key="index"
								@click="submitGenderUpdate(choice.value)"
							>
								{{choice.text}}
							</v-list-item>
						</v-list>
					</v-menu>
					<text-field
						v-if="gender.type === 'C'"
						name="custom"
						label="Gender"
						placeholder="Please specify your gender in a clear and common word"
						v-model="gender.custom"
						counter="16"
						:errors="patchErrors"
						@change="submitGenderUpdate(gender.type)"
					/>
				</div>
			</div>
			<div class="account-country">
				<div class="form-header">Country</div>
				<div class="form-description">
					This is your primary location.
				</div>
				<select-field
					v-model="payload.country"
					:items="countries"
					name="country"
					:errors="patchErrors"
					icon="mdi-earth"
					label="Country"
					item-text="name"
					item-id="code"
					return-object
					@change="patchAccount({profile: {country: payload.country}})"
				/>
			</div>
			<div class="overline pb-2">
				<div>connected accounts</div>
				<v-divider />
			</div>
			<div class="connect-to-twitter">
				<div class="form-header">Connect with Twitter</div>
				<div class="form-description">
					Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.
				</div>
				<div class="d-flex justify-end">
					<v-btn rounded color="primary lighten-1" depressed>
						<v-icon left>mdi-twitter</v-icon>
						Connect with Twitter
					</v-btn>
				</div>
			</div>
			<div class="connect-to-google">
				<div class="form-header">Connect with Google</div>
				<div class="form-description">
					Connect account to log in to WordClub with Google
				</div>
				<div class="d-flex justify-end">
					<v-btn rounded depressed dark color="orange lighten-1">
						<v-icon left>mdi-google</v-icon>
						Connect with Google
					</v-btn>
				</div>
			</div>
			<div class="overline pb-2">
				<div>deactivate account</div>
				<v-divider />
			</div>
			<div class="deactivate-account py-4">
				<div class="d-flex justify-end">
					<v-btn v-if="!user.profile.is_deactivated" color="pink" text rounded large @click="deactivate.mode = !deactivate.mode">
						<v-icon>mdi-delete-outline</v-icon>
						<span class="px-1 px16">deactivate account</span>
					</v-btn>
					<div  v-else>
						<v-btn rounded large color="success" @click="reActivateMe()">Re: activate</v-btn>
					</div>
				</div>
				<v-scale-transition>
					<div v-if="deactivate.mode">
						<div class="py-2">
							<div>
								We are sorry that you've decided to deactivate your account.
								After a successful deactivation, you will not be able to reactivate your account until 3 days.
								For this deactivation periods, you will be completely hidden from search and public interactions.
							</div>
							<br>
							<div>
								Please help us improve by providing your deactivation reason.
								We'll certainly try to make things better.
							</div>
						</div>
						<text-area
							counter="255"
							label="Deactivation Reason"
							placeholder="Please specify your reason for deactivation."
							v-model="deactivate.reason"
							name="deactivation_reason"
							icon="mdi-comment"
							:errors="confirmErrors"
						/>
						<br>
						<v-btn block @click="deactivateMyAccountConfirm()" dark color="grey darken-3">Submit Deactivation</v-btn>
					</div>
				</v-scale-transition>
				<div v-if="user.profile.is_deactivated">
					<b>Deactivated at:</b> {{ $moment(user.profile.deactivated_at).fromNow() }}
					<br>
					<b>Deactivation reason:</b> {{user.profile.deactivation_reason}}
					<br>
					<b>Reactivation availability:</b>
					<v-chip label small>
						<v-icon :color="'error'" left small>mdi-alert</v-icon> NOT AVAILABLE (3 days remaining)
					</v-chip>
				</div>
			</div>
		</v-card-text>
		<v-card-text class="py-16" />
		<confirm-dialog @refresh="refreshMe()" />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import GenderUpdate from "@/views/settings/mixins/GenderUpdate.js";
import AccountUpdate from "@/views/settings/mixins/AccountUpdate.js";

export default {
	name: "Account",
	mixins: [AccountUpdate, GenderUpdate],
	computed: {
		...mapGetters({
			user: "user/current"
		})
	},
	created() {
		this.fetchCountries()
		this.populate()
	},
	methods: {
		populate() {
			this.payload.country = this.user.profile.country
			this.emailToUpdate = this.user.email
			this.gender.type = this.user.gender.type
			this.gender.custom = this.user.gender.custom
		},
		fetchCountries() {
			this.$axios.get(this.$urls.administration.countries)
				.then(res => {
					this.countries = res.results
				})
		},
	}
}
</script>

<style lang="scss" scoped>
.form-box {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	@media only screen and (max-width: 1000px) {
		flex-wrap: wrap;
	}
	.form-content {
		padding-right: 8px;
		.form-header {
			display: flex;
			align-items: center;
		}
		.form-description {
			.form-input {
				padding: 10px 4px;
			}
		}
		.form-alert {
			.alert-chip {
				white-space: normal !important;
				height: auto !important;
			}
		}
	}
	.form-actions {
	}
}
</style>

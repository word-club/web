<template>
	<v-card color="transparent" flat>
		<v-card-title>Account Settings</v-card-title>
		<v-card-text>
			<div class="overline pb-2">
				<div>account preferences</div>
				<v-divider />
			</div>
			<div class="account-email">
				<div class="d-flex justify-space-between align-center">
					<div>
						<div class="form-header">Email Address</div>
						<div class="form-description">
							{{ user.email }}
						</div>
					</div>
					<div>
						<v-btn rounded outlined color="primary">Change</v-btn>
					</div>
				</div>
			</div>
			<div class="account-gender">
				<div class="d-flex justify-space-between align-center">
					<div>
						<div class="form-header">Gender</div>
						<div class="form-description">
							WordClub will never share this information and only uses it to improve what content you see.
						</div>
					</div>
					<div>
						<v-menu offset-y>
							<template	#activator="{attrs, on}">
								<v-btn text color="primary" rounded
									v-bind="attrs" v-on="on"
								>
									Select
									<v-icon right>mdi-chevron-down</v-icon>
								</v-btn>
							</template>
							<v-list dense>
								<v-list-item>Male</v-list-item>
								<v-list-item>Female</v-list-item>
								<v-list-item>Non-Binary</v-list-item>
								<v-list-item>I Refer To Myself As...</v-list-item>
								<v-list-item>I Prefer Not To Say</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</div>
			</div>
			<div class="account-country">
				<div class="form-header">Country</div>
				<div class="form-description">
					This is your primary location.
				</div>
				<select-field
					:items="countries"
					name="country"
					:errors="patchErrors"
					icon="mdi-earth"
					label="Country"
					item-text="name"
					item-id="id"
					v-model="payload.country"
				/>
			</div>
			<div class="overline pb-2">
				<div>connected accounts</div>
				<v-divider />
			</div>
			<div class="connect-to-twitter">
				<div class="form-header">Connect to Twitter</div>
				<div class="form-description">
					Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.
				</div>
				<div class="d-flex justify-end">
					<v-btn rounded color="primary lighten-1" depressed>
						<v-icon left>mdi-twitter</v-icon>
						Connect to Twitter
					</v-btn>
				</div>
			</div>
			<div class="connect-to-google">
				<div class="form-header">Connect to Google</div>
				<div class="form-description">
					Connect account to log in to WordClub with Google
				</div>
				<div class="d-flex justify-end">
					<v-btn rounded depressed dark color="orange lighten-1">
						<v-icon left>mdi-google</v-icon>
						Connect to Google
					</v-btn>
				</div>
			</div>
			<div class="overline pb-2">
				<div>deactivate account</div>
				<v-divider />
			</div>
			<div class="deactivate-account py-6 d-flex justify-end">
				<v-btn color="pink" text rounded large>
					<v-icon>mdi-delete-outline</v-icon>
					<span class="px-1 px16">deactivate account</span>
				</v-btn>
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import PatchMixin from "@/mixin/PatchMixin.js";

export default {
	name: "Account",
	mixins: [PatchMixin],
	data: () => ({
		countries: [{name: "Nepal", id: 11}, {name: "India", id: 12}, {name: "Russia", id: 13}],
		payload: {
			country: null
		}
	}),
	computed: {
		...mapGetters({
			user: "user/current"
		})
	},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

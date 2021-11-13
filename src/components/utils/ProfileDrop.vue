<template>
	<v-menu offset-y>
		<template #activator="{on, attrs}">
			<v-avatar color="primary"
				size="35"
				v-bind="attrs"
				class="elevation-4"
				v-on="on"
			>
				<v-img v-if="currentUser.avatar"
					:src="currentUser.avatar.image"
				/>
				<span v-else class="px22 white--text text-uppercase mb-1">{{currentUser.username[0]}}</span>
			</v-avatar>
		</template>
		<v-list width="200"
			dense
		>
			<v-list-item-group>
				<v-subheader class="text-uppercase">
					Online Status
				</v-subheader>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>On</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action>
						<v-switch
							v-model="onlineStatus"
							color="primary"
							inset dense
							hide-details
						/>
					</v-list-item-action>
				</v-list-item>
			</v-list-item-group>
			<v-list-item-group>
				<v-subheader class="text-uppercase">
					My Stuff
				</v-subheader>
				<v-list-item :to="{name: 'Profile Overview'}">
					<v-list-item-icon><v-icon>mdi-account-circle-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Profile</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-icon><v-icon>mdi-cog-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>User Settings</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
			<v-list-item-group>
				<v-subheader class="text-uppercase">
					More Stuff
				</v-subheader>
				<v-list-item :to="{name: 'Community Mainframe'}">
					<v-list-item-icon><v-icon>mdi-account-group-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Create a Community</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-icon><v-icon>mdi-apple-keyboard-command</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Premium</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-icon><v-icon>mdi-help-circle-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Help Center</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item @click="logout">
					<v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Logout</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-menu>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "ProfileDrop",
	mixins: [PostMixin, Snack],
	data: () => ({
		onlineStatus: true
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	},
	methods: {
		logout() {
			const url = this.$urls.user.logout
			this.post(url).then(() => {
				// no content success response is empty string
				if (this.postInstance === "") {
					this.$helper.clearAccessToken()
					this.$helper.clearCurrentUser()
					this.$store.dispatch("user/setCurrentUser", null)
					this.openSnack("User logged out successfully.", {color: "success"})
				} else {
					// logout errors are traced inside detail key
					this.openSnack(this.formErrors.detail)
				}
			})
		}
	}
}
</script>

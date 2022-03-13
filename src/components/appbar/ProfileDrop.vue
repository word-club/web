<template>
	<v-menu offset-y>
		<template #activator="{on, attrs}">
			<v-avatar
				:color="(currentUser.profile.avatar) ? '' : 'primary'"
				size="35"
				v-bind="attrs"
				class="elevation-4 profile-avatar"
				v-on="on"
				v-ripple
			>
				<v-img v-if="currentUser.profile.avatar"
					:src="$link(currentUser.profile.avatar.image)"
				/>
				<span v-else class="px22 white--text text-uppercase mb-1 profile-avatar__username">{{currentUser.username[0]}}</span>
			</v-avatar>
		</template>
		<v-list width="220"
			dense class="profile-drop-list"
		>
			<v-list-item-group>
				<v-subheader class="text-uppercase">
					Online Status
				</v-subheader>
				<v-list-item class="online-status">
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
				<v-list-item :to="{name: 'Profile Overview'}"
					class="to-profile"
				>
					<v-list-item-icon><v-icon>mdi-account-circle-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Profile</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item to="/settings/account"
					class="to-settings"
				>
					<v-list-item-icon><v-icon>mdi-cog-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>User Settings</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item to="/notifications"
					class="to-notifications"
				>
					<v-list-item-icon><v-icon>mdi-bell-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Notifications</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					v-if="$helper.isUserSuperAdmin()"
					to="/site-administration"
					class="to-site-administration"
				>
					<v-list-item-icon><v-icon>mdi-sitemap</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Site Administration</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
			<v-list-item-group>
				<v-subheader class="text-uppercase">
					More Stuff
				</v-subheader>
				<v-list-item :to="{name: 'Community Mainframe'}"
					class="create-community"
				>
					<v-list-item-icon><v-icon>mdi-account-group-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Create a Community</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item color="orange"
					class="to-premium"
				>
					<v-list-item-icon><v-icon color="orange">mdi-apple-keyboard-command</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title class="orange--text">Premium</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item class="help-center">
					<v-list-item-icon><v-icon>mdi-help-circle-outline</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Help Center</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item @click="logout" class="logout">
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
import AfterAuth from "@/mixin/AfterAuth.js";

export default {
	name: "ProfileDrop",
	mixins: [PostMixin, Snack, AfterAuth],
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
				this.$helper.clearSession()
				this.$store.dispatch("user/setCurrentUser", null)
				this.afterAuth()
				this.openSuccessSnack("Logged out successfully.")
			})
		}
	}
}
</script>

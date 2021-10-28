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
				<v-list-item to="/profile">
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
				<v-list-item to="/register-community">
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
				<v-list-item>
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

export default {
	name: "ProfileDrop",
	props: {},
	data: () => ({
		onlineStatus: true
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

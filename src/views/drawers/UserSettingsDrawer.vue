<template>
	<div class="user-settings-drawer">
		<h2 class="grey--text pl-3 pt-2">
			<span><v-icon color="grey">mdi-cog</v-icon></span>
			User Settings
		</h2>
		<v-list rounded>
			<v-list-item v-for="(item, index) in items"
				:key="index"
				:to="{name: item.to}"
				color="primary"
			>
				<v-icon>{{ item.icon }}</v-icon>
				<v-list-item-title class="drawer-item"
					:class="{
						'px16': !$vuetify.breakpoint.md,
						'px14': $vuetify.breakpoint.md,
					}"
				>
					{{ item.title }}
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
export default {
	name: "UserSettingsDrawer",
	computed: {
		items() {
			return [
				{icon: "mdi-account", title: "Account", to: "User Settings Account"},
				{icon: "mdi-account-circle", title: "Profile", to: "User Settings Profile"},
				{icon: "mdi-alpha-s-circle", title: "Subscriptions", to: "User Settings Subscriptions"},
				{icon: "mdi-alpha-c-circle", title: "Communities", to: "User Settings Communities"},
				{icon: "mdi-bell", title: "Notifications", to: "User Settings Notifications"},
				{icon: "mdi-message", title: "Messaging", to: "User Settings Messaging"},
			]
		}
	}

}
</script>

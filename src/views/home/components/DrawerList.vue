<template>
	<v-list rounded>
		<v-list-item v-for="(item, index) in drawerItems"
			:key="index"
			:to="item.to"
		>
			<v-icon>{{ item.icon }}</v-icon>
			<v-list-item-title class="drawer-item">
				{{ item.title }}
			</v-list-item-title>
		</v-list-item>
	</v-list>
</template>

<script>
export default {
	name: "DrawerList",
	computed: {
		drawerItems() {
			return [
				{icon: "mdi-view-dashboard", title: "Overview", to: "/"},
				{icon: "mdi-clock-time-four-outline", title: "Fresh"},
				{icon: "mdi-thermostat", title: "Popular"},
				{icon: "mdi-plus", title: "Create Post", to: "/submit"},
				{icon: "mdi-format-list-numbered", title: "Top Communities"},
				{icon: "mdi-bell-outline", title: "Notifications", to: "/notifications"},
				{icon: "mdi-apple-keyboard-command", title: "Premium"},
			]
		}
	},
}
</script>

<style scoped>
.drawer-item {
	font-size: 16px;
	padding-left: 10px;
}
</style>

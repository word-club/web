<template>
	<v-list rounded>
		<v-list-item
			v-for="(item, index) in drawerItems"
			:key="index"
			:to="item.to"
			exact-path
		>
			<v-icon>{{ item.icon }}</v-icon>
			<v-list-item-title class="drawer-item px14">
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
				{icon: "mdi-view-dashboard", title: "Overview", to: {name: "Home", params: {sortBy: undefined}}},
				{icon: "mdi-chart-donut", title: "Fresh", to: {name: "Home", params: {sortBy: "fresh"}}},
				{icon: "mdi-finance", title: "Popular", to: {name: "Home", params: {sortBy: "popular"}}},
				{icon: "mdi-plus", title: "Create Post", to: {name: "Submit"}},
				{icon: "mdi-format-list-numbered", title: "Top Communities"},
				{icon: "mdi-bell-outline", title: "Notifications", to: "/notifications"},
				{icon: "mdi-apple-keyboard-command", title: "Premium"},
			]
		}
	},
}
</script>

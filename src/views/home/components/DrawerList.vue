<template>
	<v-list rounded>
		<v-list-item
			v-for="(item, index) in drawerItems"
			:key="index"
			:to="item.to"
			:exact-path="item.exact"
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
				{
					icon: "mdi-view-dashboard",
					title: "Overview",
					to: {name: "Home", params: {sortBy: undefined}},
					exact: true
				},
				{
					icon: "mdi-chart-donut",
					title: "Fresh",
					to: {name: "Home", params: {sortBy: "fresh"}},
					exact: true
				},
				{
					icon: "mdi-finance",
					title: "Popular",
					to: {name: "Home", params: {sortBy: "popular"}},
					exact: true
				},
				{
					icon: "mdi-plus",
					title: "Post",
					to: { name: "Submit", params: { type: "editor" } },
					exact: true
				},
				{
					icon: "mdi-format-list-numbered",
					title: "Top",
					to: {name: "Top Communities"},
					exact: false
				},
				{
					icon: "mdi-bell-outline",
					title: "Notifications",
					to: "/notifications",
					exact: true
				},
				{
					icon: "mdi-apple-keyboard-command",
					title: "Premium",
					exact: true
				},
			]
		}
	},
}
</script>

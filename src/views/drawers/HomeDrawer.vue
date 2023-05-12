<template>
	<div class="home-drawer">
		<div v-if="!mdAndUp" class="site-title">
			<v-avatar size="34">
				<v-img src="@/assets/w_art.jpg" />
			</v-avatar>
			<h2>WordClub</h2>
		</div>

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
	</div>
</template>

<script>
export default {
	name: "HomeDrawer",
	computed: {
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
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

<style scoped lang="scss">
.site-title {
	padding-left: 1rem;
	padding-bottom: 1rem;
	display: flex; gap: .5rem;
	align-items: center;
	.v-avatar {
		border: 4px solid goldenrod;
	}
}
</style>

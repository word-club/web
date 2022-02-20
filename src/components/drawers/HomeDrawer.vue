<template>
	<v-slide-x-transition>
		<v-navigation-drawer
			v-if="!drawerFreeRoute"
			v-model="mainDrawer"
			app clipped
			color="grey lighten-3"
			class="home-sidebar"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
			:width="$vuetify.breakpoint.md ? 180 : 200"
		>
			<div v-if="!mdAndUp" class="site-title">
				<v-img :src="require('@/assets/site-title.png')" />
			</div>

			<drawer-list />
		</v-navigation-drawer>
	</v-slide-x-transition>
</template>

<script>
import MainDrawer from "@/mixin/MainDrawer.js";

export default {
	name: "HomeDrawer",
	components: {
		DrawerList: () => import("@/views/home/components/DrawerList"),
	},
	mixins: [MainDrawer],
	computed: {
		drawerFreeRoute() {
			return this.$route.matched.some(route => route.meta["drawer_free"])
		},
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
	},
}
</script>

<style scoped lang="scss">
@import "styles/sidebar";
.site-title {
	padding: 10px;
	background-color: whitesmoke;
}
</style>

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
			<sidebar-top-padding />
			<drawer-list />
		</v-navigation-drawer>
	</v-slide-x-transition>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "HomeDrawer",
	components: {
		SidebarTopPadding: () => import("@/components/utils/SidebarTopPadding"),
		DrawerList: () => import("@/views/home/components/DrawerList"),
	},
	data: () => ({}),
	computed: {
		mainDrawer: {
			get() {
				return this.$store.getters.mainDrawerState
			},
			set(v) {
				this.SET_DRAWER_STATE(v)
			}
		},
		drawerFreeRoute() {
			return this.$route.matched.some(route => route.meta["drawer_free"])
		},
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
	},
	created() {
	},
	methods: {
		...mapMutations(["SET_DRAWER_STATE"]),
	}
}
</script>

<style scoped lang="scss">

</style>

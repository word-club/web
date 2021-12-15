<template>
	<v-slide-x-reverse-transition>
		<v-navigation-drawer
			v-if="userSettingRoute"
			v-model="profileSettingsDrawer"
			app clipped permanent
			color="grey lighten-3"
			class="home-sidebar"
			:width="$vuetify.breakpoint.md ? 250 : 300"
		>
			<sidebar-top-padding />
			<user-cog-drawer />
		</v-navigation-drawer>
	</v-slide-x-reverse-transition>
</template>

<script>
export default {
	name: "UserSettingsDrawer",
	components: {
		SidebarTopPadding: () => import("@/components/utils/SidebarTopPadding"),
		UserCogDrawer: () => import("@/views/home/components/UserCogDrawer"),
	},
	data: () => ({
		profileSettingsDrawer: null,
	}),
	computed: {
		userSettingRoute() {
			return this.$route.matched.some(route => route.meta["user_settings"])
		},
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
	},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

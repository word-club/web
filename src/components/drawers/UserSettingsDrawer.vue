<template>
	<v-slide-x-reverse-transition>
		<v-navigation-drawer
			v-if="userSettingRoute"
			v-model="profileSettingsDrawer"
			app clipped permanent
			color="grey lighten-3"
			class="home-sidebar"
			:width="md ? 250 : 300"
		>
			<sidebar-top-padding />
			<user-cog-drawer />
		</v-navigation-drawer>
	</v-slide-x-reverse-transition>
</template>

<script>
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";

export default {
	name: "UserSettingsDrawer",
	components: {
		SidebarTopPadding: () => import("@/components/drawers/SidebarTopPadding"),
		UserCogDrawer: () => import("@/views/home/components/UserCogDrawer"),
	},
	mixins: [ScreenSizeMixin],
	data: () => ({
		profileSettingsDrawer: null,
	}),
	computed: {
		userSettingRoute() {
			return this.$route.matched.some(route => route.meta["user_settings"])
		}
	}
}
</script>

<style scoped lang="scss">

</style>

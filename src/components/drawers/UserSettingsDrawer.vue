<template>
	<v-slide-x-reverse-transition>
		<v-navigation-drawer
			v-if="userSettingRoute"
			v-model="drawer"
			app clipped
			color="grey lighten-3"
			class="home-sidebar"
			:width="md ? 250 : 300"
			:permanent="mdAndUp"
			:temporary="smAndDown"
		>
			<br>
			<h2 class="pl-6 grey--text">
				<span><v-icon color="grey">mdi-cog</v-icon></span>
				User Settings
			</h2>
			<br>
			<user-cog-drawer />
		</v-navigation-drawer>
	</v-slide-x-reverse-transition>
</template>

<script>
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";
import MainDrawer from "@/mixin/MainDrawer.js";

export default {
	name: "UserSettingsDrawer",
	components: {
		UserCogDrawer: () => import("@/views/home/components/UserCogDrawer"),
	},
	mixins: [ScreenSizeMixin, MainDrawer],
	computed: {
		userSettingRoute() {
			return this.$route.matched.some(route => route.meta["user_settings"])
		}
	}
}
</script>

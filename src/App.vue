<template>
	<v-app>
		<div class="sticky">
			<the-app-bar />
		</div>
		<home-drawer />
		<user-settings-drawer />
		<community-mod-cog-drawer />
		<root-sidebar />
		<v-main>
			<v-card
				v-if="$route.name"
				flat tile :color="appColor"
				class="app-card fill-height"
				:class="{
					'app-padding': ! $route.name.includes('Community') &&
						!$route.name.includes('User') &&
						!$route.name.includes('Profile') &&
						!$route.name.includes('Top'),
					'px-0': $route.name.includes('Community'),
					'px-0': $route.name.includes('User'),
					'px-0': $route.name.includes('Profile')
				}"
			>

				<the-snackbar />
				<transition name="view">
					<router-view />
				</transition>
				<scroll-to-top />
				<report-dialog />
				<share-dialog />
			</v-card>
		</v-main>
	</v-app>
</template>

<script>
import LoginCheck from "@/mixin/LoginCheck.js";
import SocketMixin from "@/mixin/SocketMixin.js";

export default {
	name: "App",
	components: {
		UserSettingsDrawer: () => import("@/components/drawers/UserSettingsDrawer"),
		CommunityModCogDrawer: () => import("@/components/drawers/CommunityMODCogDrawer"),
		HomeDrawer: () => import("@/components/drawers/HomeDrawer"),
		RootSidebar: () => import("@/components/drawers/RootSidebar"),
		TheAppBar: () => import("@/components/appbar/TheAppBar"),
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		ScrollToTop: () => import("@/components/utils/ScrollToTop"),
		ReportDialog: () => import("@/components/dialogs/AddReportDialog"),
		ShareDialog: () => import("@/components/dialogs/ShareDialog"),
	},
	mixins: [LoginCheck, SocketMixin],
	computed: {
		appColor() {
			return this.$route.name === "Submit" ? "grey lighten-2": "grey lighten-4"
		}
	},
	async created() {
		await this.checkForLoggedInUser()
		this.socketLogin()
		this.joinNotificationChannel()
	}
}
</script>

<style lang="scss">
@import "styles/home";
</style>

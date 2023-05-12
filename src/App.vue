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
				class="app-card"
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

	computed: {
		appColor() {
			return this.$route.name === "Submit" ? "grey lighten-2": "grey lighten-4"
		}
	},
	created() {
		this.checkForLoggedInUser()
	},
	methods: {
		checkForLoggedInUser() {
			const token = this.$helper.getAccessToken()
			const currentUser = this.$helper.getCurrentUser()
			if (token && currentUser) this.$store.dispatch("user/setCurrentUser", currentUser)
			else this.$store.dispatch("user/setCurrentUser", null)
		}
	}
}
</script>

<style lang="scss">
@import "styles/home";
</style>

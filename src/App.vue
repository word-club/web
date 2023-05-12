<template>
	<v-app>
		<the-app-bar />
		<root-drawer v-if="withDrawer" />
		<root-sidebar v-if="withSidebar" />
		<v-main>
			<div class="main"
				:style="{paddingTop: mainTopPadding}"
			>
				<the-snackbar />
				<transition name="view">
					<router-view />
				</transition>
				<scroll-to-top />
				<report-dialog />
				<share-dialog />
			</div>
		</v-main>
	</v-app>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin";

export default {
	name: "App",
	mixins: [RouteMixin],
	components: {
		RootDrawer: () => import("@/views/drawers/RootDrawer.vue"),
		RootSidebar: () => import("@/views/drawers/RootSidebar"),
		TheAppBar: () => import("@/components/appbar/TheAppBar"),
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		ScrollToTop: () => import("@/components/utils/ScrollToTop"),
		ReportDialog: () => import("@/components/dialogs/AddReportDialog"),
		ShareDialog: () => import("@/components/dialogs/ShareDialog"),
	},
	created() {
		this.adjustTopPadding()
		this.checkForLoggedInUser()
		window.addEventListener("scroll", this.adjustTopPadding)
	},
	data: () => ({
		mainTopPadding: "0",
	}),
	computed: {
		withSidebar() {
			return !this.currentRouteParent?.meta?.noSidebar
		},
		withDrawer() {
			return !this.currentRouteParent?.meta?.noDrawer
		},
	},
	methods: {
		adjustTopPadding() {
			const appBar = document.querySelector(".the-app-bar")
			if (!appBar?.offsetHeight) {
				setTimeout(() => this.adjustTopPadding(), 500)
			} else {
				this.mainTopPadding = `${appBar.offsetHeight}px`
			}
		},
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

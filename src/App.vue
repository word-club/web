<template>
	<v-app>
		<div class="sticky">
			<the-app-bar />
		</div>
		<home-drawer />
		<user-settings-drawer />
		<root-sidebar />
		<v-main>
			<v-card
				v-if="$route.name"
				flat tile :color="appColor"
				class="app-card"
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
			</v-card>
		</v-main>
	</v-app>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "App",
	components: {
		UserSettingsDrawer: () => import("@/components/utils/UserSettingsDrawer"),
		HomeDrawer: () => import("@/components/utils/HomeDrawer"),
		RootSidebar: () => import("@/components/utils/RootSidebar"),
		TheAppBar: () => import("@/components/TheAppBar"),
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		ScrollToTop: () => import("@/components/utils/ScrollToTop"),
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
			else {
				this.$helper.clearAccessToken()
				this.$helper.clearCurrentUser()
				this.$store.dispatch("user/setCurrentUser", null)
			}
		}
	}
}
</script>

<style lang="scss">
* {
	font-family: 'Barlow Semi Condensed', sans-serif;
	box-sizing: border-box;
}
:root {
	--primary: #1975d1;
	--orange: #FF9800;
	--indigo: #3F51B5;
	--teal: #009688;
	--red: #F44336;
	--pink: #E91E63;
	--green: #4CAF50;
	--grey: #607D8B;
	--deep-purple: #673AB7;
	--amber: #FFC107;
}

.primary--text {color: var(--primary) !important;}
.orange--text {color: var(--orange) !important;}
.indigo--text {color: var(--indigo) !important;}
.teal--text {color: var(--teal) !important;}
.red--text {color: var(--red) !important;}
.pink--text {color: var(--pink) !important;}
.green--text {color: var(--green) !important;}
.grey--text {color: var(--grey) !important;}
.deep-purple--text {color: var(--deep-purple) !important;}
.amber--text {color: var(--amber) !important;}

.primary-border {
	border: 2px solid var(--primary)!important;
	background-color: whitesmoke;
}
.orange-border {
	border: 2px solid var(--orange)!important;
	background-color: whitesmoke;
}
.indigo-border {
	border: 2px solid var(--indigo)!important;
	background-color: whitesmoke;
}
.teal-border {
	border: 2px solid var(--teal) !important;
	background-color: whitesmoke;
}
.red-border {
	border: 2px solid var(--red) !important;
	background-color: whitesmoke;
}
.pink-border {
	border: 2px solid var(--pink) !important;
	background-color: whitesmoke;
}
.green-border {
	border: 2px solid var(--green) !important;
	background-color: whitesmoke;
}
.grey-border {
	border: 2px solid var(--grey) !important;
	background-color: whitesmoke;
}
.deep-purple-border {
	border: 2px solid var(--deep-purple) !important;
	background-color: whitesmoke;
}
.amber-border {
	border: 2px solid var(--amber) !important;
	background-color: whitesmoke;
}
.app-padding {
	padding: 0 10px 0 10px
}
.v-label {
	font-size: 14px !important;
	font-weight: 500;
}
.v-input {
	font-size: 14px !important;
}
.sidebar-card-title {
	font-size: 16px !important;
}
.footer-items {
	div {
		font-size: 14px;
		cursor: pointer;
	}
	div:hover {
		color: black
	}
}
.cursor {
	cursor: pointer;
}
.px10 {
	font-size: 10px !important;
}
.px11 {
	font-size: 11px !important;
}
.px12 {
	font-size: 12px !important;
}
.px13 {
	font-size: 13px !important;
}
.px14 {
	font-size: 14px !important;
}
.px15 {
	font-size: 15px !important;
}
.px16 {
	font-size: 16px !important;
}
.px18 {
	font-size: 18px !important;
}
.px22 {
	font-size: 22px !important;
}
.px26 {
	font-size: 26px !important;
}
.weight-300 {
	font-weight: 300 !important;
}
.weight-400 {
	font-weight: 400 !important;
}
.weight-500 {
	font-weight: 500 !important;
}
.weight-600 {
	font-weight: 600 !important;
}
.weight-700 {
	font-weight: 700 !important;
}
.hover-underline:hover {
	text-decoration: underline;
}
.full-width {
	width: 100%
}
.normal-whitespace {
	white-space: normal !important;
}
.transparent-bg {
	background-color: transparent!important;
}
.empty-content {
	color: #5d5d5d
}
.drawer-item {
	padding-left: 10px;
	font-weight: 500;
	color: #5d5d5d;
}
.form-header {
	font-size: 18px;
	padding-top: 20px;
	font-weight: 500;
	color: #4a4a4a;
}
.form-description {
	color: #8e8e8e;
	font-size: 13px;
	padding-bottom: 10px;
}
.overline {
	font-weight: 700;
	letter-spacing: 1px !important;
}
</style>
<style lang="scss">
/* width */
::-webkit-scrollbar {
	width: 6px; // for vertical scrollbars
	height: 6px; // for horizontal scrollbars
}

/* Track */
::-webkit-scrollbar-track {
	background: #d7d7d7;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #727272;
}
.sticky {
	position: -webkit-sticky;
	position: sticky;
	top: 0; z-index: 5;
}
</style>

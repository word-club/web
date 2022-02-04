<template>
	<v-app-bar
		flat color="white"
		height="auto"
		clipped-right
		clipped-left
		class="the-app-bar"
	>
		<div class="d-flex align-center px-2">
			<v-btn
				class="toggle-drawer"
				icon v-if="$vuetify.breakpoint.smAndDown"
				@click="toggleDrawer"
			>
				<v-icon v-if="$store.getters.mainDrawerState">mdi-menu-close</v-icon>
				<v-icon v-else>mdi-menu-open</v-icon>
			</v-btn>
			<div class="px-2"/>
			<div class="site-title cursor" @click="toHome">WordClub</div>
		</div>
		<community-search v-if="$vuetify.breakpoint.smAndUp" />
		<publication-search v-if="criticalWidth" />
		<v-spacer/>

		<tooltip-icon-btn
			id="popular"
			size="40"
			v-if="currentUser && viewportWidth> 440"
			icon="mdi-finance"
			tooltip="Popular"
			:to="{ name: 'Home', params: {sortBy: 'popular'} }"
		/>

		<tooltip-icon-btn
			id="top-discussed"
			size="40"
			v-if="currentUser  && viewportWidth> 440"
			icon="mdi-chart-gantt"
			tooltip="Top Discussed"
			:to="{ name: 'Home', params: {sortBy: 'discussed'} }"
		/>
		<tooltip-icon-btn
			id="create-publication"
			size="40"
			v-if="currentUser  && viewportWidth> 440"
			icon="mdi-plus"
			tooltip="Create Publication"
			:to="{ name: 'Submit' }"
		/>

		<notification-menu v-if="currentUser  && viewportWidth> 310"/>

		<div class="px-4"/>
		<profile-drop v-if="currentUser"/>
		<v-btn
			v-if="!currentUser"
			outlined
			color="primary"
			rounded
			class="mx-1 signup-btn"
			@click="signUp"
		>
			Sign Up
		</v-btn>
		<v-btn
			v-if="!currentUser"
			color="primary"
			dark
			rounded
			class="mx-1 login-btn"
			@click="login"
		>
			Login
		</v-btn>
		<auth-dialog/>
		<template
			v-if="!criticalWidth"
			#extension
		>
			<publication-search />
		</template>
	</v-app-bar>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";

export default {
	name: "TheAppBar",
	mixins: [RouteMixin, ScreenSizeMixin],
	components: {
		TooltipIconBtn: () => import("@/components/utils/TooltipIconBtn"),
		AuthDialog: () => import("@/views/auth/AuthDialog"),
		ProfileDrop: () => import("@/components/appbar/ProfileDrop"),
		CommunitySearch: () => import("@/components/appbar/CommunitySearch"),
		PublicationSearch: () => import("@/components/appbar/PublicationSearch"),
		NotificationMenu: () =>
			import("@/views/notification/NotificationMenu"),
	},
	data: () => ({
		searchCommunities: "",
		searchPublications: "",
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
		}),
		criticalWidth() {
			return this.$vuetify.breakpoint.width >= 850
		}
	},
	methods: {
		...mapMutations(["SET_DRAWER_STATE"]),
		toggleDrawer() {
			this.SET_DRAWER_STATE(!this.$store.getters.mainDrawerState)
		},
		login() {
			this.$store.dispatch("setAuthMode", {state: true, mode: "login"});
		},
		signUp() {
			this.$store.dispatch("setAuthMode", {state: true, mode: "signup"});
		},
	},
};
</script>
<style scoped lang="scss">
.the-app-bar {
	border-bottom: 1px solid #d2d2d2 !important;
	.site-title {
		font-size: 1.2rem;
		font-weight: 500;
	}
}
</style>

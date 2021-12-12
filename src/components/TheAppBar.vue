<template>
	<v-app-bar
		app flat
		color="white"
		height="auto"
		clipped-right
		class="the-app-bar"
	>
		<div class="d-flex align-center px-2">
			<v-btn
				icon v-if="$vuetify.breakpoint.smAndDown"
				@click="toggleDrawer"
			>
				<v-icon v-if="$store.getters.mainDrawerState">mdi-menu-close</v-icon>
				<v-icon v-else>mdi-menu-open</v-icon>
			</v-btn>
			<div class="px-2"/>
			<h3 class="cursor" @click="toHome">WordClub</h3>
		</div>
		<community-search v-if="$vuetify.breakpoint.smAndUp" />
		<publication-search v-if="criticalWidth" />
		<v-spacer/>

		<tooltip-icon-btn
			size="40"
			v-if="currentUser"
			icon="mdi-finance"
			tooltip="Popular"
			:to="{ name: 'Home', params: {sortBy: 'popular'} }"
		/>

		<tooltip-icon-btn
			size="40"
			v-if="currentUser"
			icon="mdi-chart-gantt"
			tooltip="Top Discussed"
			:to="{ name: 'Home', params: {sortBy: 'discussed'} }"
		/>
		<tooltip-icon-btn
			size="40"
			v-if="currentUser"
			icon="mdi-plus"
			tooltip="Create Publication"
			:to="{ name: 'Submit' }"
		/>

		<notification-menu v-if="currentUser"/>

		<div class="px-4"/>
		<profile-drop v-if="currentUser"/>
		<v-btn
			v-if="!currentUser"
			outlined
			color="primary"
			rounded
			class="mx-1"
			@click="signUp"
		>
			Sign Up
		</v-btn>
		<v-btn
			v-if="!currentUser"
			color="primary"
			dark
			rounded
			class="mx-1"
			@click="login"
		>
			Login
		</v-btn>
		<auth-dialog/>
		<template
			v-if="!criticalWidth"
			#extension
		>
			<community-search v-if="$vuetify.breakpoint.xs" />
			<publication-search />
		</template>
	</v-app-bar>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import AppTopStyle from "@/mixin/AppTopStyle.js";

export default {
	name: "TheAppBar",
	mixins: [RouteMixin, AppTopStyle],
	components: {
		TooltipIconBtn: () => import("@/components/TooltipIconBtn.vue"),
		AuthDialog: () => import("@/views/auth/AuthDialog.vue"),
		ProfileDrop: () => import("@/components/appbar/ProfileDrop.vue"),
		CommunitySearch: () => import("@/components/appbar/CommunitySearch"),
		PublicationSearch: () => import("@/components/appbar/PublicationSearch"),
		NotificationMenu: () =>
			import("@/views/notification/NotificationMenu"),
	},
	data: () => ({
		searchCommunities: "",
		searchPublications: "",
	}),
	mounted() {
		this.setAppBarTopStyle()
	},
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
<style scoped>
.the-app-bar {
	border-bottom: 1px solid #d2d2d2 !important;
}
</style>

<template>
	<v-app-bar
		app
		flat
		color="white"
		height="55"
		clipped-left
		clipped-right
		class="the-app-bar"
	>
		<div class="d-flex align-center px-2">
			<v-avatar size="40" color="white">
				<v-img :src="require('@/assets/w_art.jpg')"/>
			</v-avatar>
			<div class="px-2"/>
			<h3 class="cursor" @click="toHome">WordClub</h3>
		</div>
		<v-responsive
			v-if="$route.name"
			max-width="200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchCommunities"
				dense outlined hide-details
				clearable aria-autocomplete="search_communities"
				:placeholder="placeHolder"
				color="primary"
			>
				<template #prepend-inner>
					<v-icon v-if="routeNameIs('Home')" size="22"> mdi-home</v-icon>
					<v-avatar
						v-if="routeNameStartsWith('User')"
						size="30"
						:color="(userInView && userInView.avatar) ? 'white': 'primary'"
						class="mt-0 mb-2"
					>
						<v-img
							v-if="userInView.avatar"
							:src="userInView.avatar.image"
						/>
						<div v-else class="full-width white--text text-center weight-500">
							{{userInView.username[0].toUpperCase()}}
						</div>
					</v-avatar>
					<v-avatar
						v-if="communityInView"
						size="30"
						:color="(communityInView && communityInView.avatar)
							? 'white': communityInView.theme.color"
						class="mt-0 mb-2"
					>
						<v-img
							v-if="communityInView.avatar"
							:src="$link(communityInView.avatar.image)"
						/>
						<div v-else class="full-width white--text text-center weight-500">
							{{communityInView.name[0].toUpperCase()}}
						</div>
					</v-avatar>
				</template>
			</v-text-field>
		</v-responsive>
		<v-responsive
			max-width="1200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchPublications"
				dense outlined clearable
				hide-details aria-autocomplete="search_publication"
				placeholder="Search WordClub"
			>
				<template #prepend-inner>
					<v-icon size="22">mdi-magnify</v-icon>
				</template>
			</v-text-field>
		</v-responsive>
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
	</v-app-bar>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
import TooltipIconBtn from "@/components/TooltipIconBtn.vue";

export default {
	name: "TheAppBar",
	components: {
		TooltipIconBtn,
		AuthDialog: () => import("@/views/auth/AuthDialog.vue"),
		ProfileDrop: () => import("@/components/utils/ProfileDrop"),
		NotificationMenu: () =>
			import("@/views/home/notification/NotificationMenu"),
	},
	mixins: [RouteMixin],
	data: () => ({
		searchCommunities: "",
		searchPublications: "",
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
			userInView: "user/inView",
			communityInView: "community/inView",
		}),
		placeHolder() {
			if (this.userInView) {
				return "u/" + this.userInView.username;
			} else if (this.communityInView) {
				return "c/" + this.communityInView.unique_id;
			} else {
				return this.$route.name;
			}
		},
	},
	methods: {
		routeNameIs(name) {
			if (this.$route && this.$route.name) {
				return this.$route.name === name;
			}
			return false;
		},
		routeNameStartsWith(text) {
			if (this.$route && this.$route.name) {
				return this.$route.name.startsWith(text);
			}
			return false;
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

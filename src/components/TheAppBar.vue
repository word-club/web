<template>
	<v-app-bar
		app flat
		color="white"
		height="55"
		clipped-left
		clipped-right
		class="the-app-bar"
	>
		<div class="d-flex align-center px-2">
			<v-avatar
				size="40"
				color="grey"
			/>
			<div class="px-2" />
			<h3 class="cursor"
				@click="toHome"
			>
				WordClub
			</h3>
		</div>
		<v-responsive
			v-if="$route.name"
			max-width="200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchCommunities"
				dense outlined
				hide-details
				:placeholder="placeHolder"
				color="primary"
			>
				<template
					#prepend-inner
				>
					<v-icon
						v-if="routeNameIs('Home')"
						size="22"
					>
						mdi-home
					</v-icon>
					<v-avatar
						v-if="routeNameStartsWith('User')"
						size="30"
						color="primary"
						class="mt-0 mb-2"
					>
						<v-img v-if="userInView && userInView.avatar" :src="userInView.avatar.image" />
					</v-avatar>
					<v-avatar
						v-if="communityInView"
						size="30"
						:color="communityInView.theme.color"
						class="mt-0 mb-2"
					>
						<v-img v-if="communityInView && communityInView.avatar" :src="communityInView.avatar.image" />
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
				dense outlined
				hide-details
				placeholder="Search WordClub"
			>
				<template #prepend-inner>
					<v-icon size="22">
						mdi-magnify
					</v-icon>
				</template>
			</v-text-field>
		</v-responsive>
		<v-spacer />

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-thermostat
			</v-icon>
		</v-btn>

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-ballot-recount
			</v-icon>
		</v-btn>

		<v-btn icon
			class="mx-2"
			small
			:to="{name: 'Submit'}"
		>
			<v-icon size="26">
				mdi-plus
			</v-icon>
		</v-btn>

		<notification-menu />

		<div class="px-4" />
		<profile-drop />
	</v-app-bar>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "TheAppBar",
	components: {
		NotificationMenu: () => import("@/views/home/notification/NotificationMenu.vue"),
		ProfileDrop: () => import("@/components/utils/ProfileDrop.vue")
	},
	mixins: [RouteMixin],
	data: () => ({
		searchCommunities: "",
		searchPublications: ""
	}),
	computed: {
		...mapGetters({
			userInView: "user/inView",
			communityInView: "community/inView"
		}),
		placeHolder() {
			if (this.userInView) {
				return "u/" + this.userInView.username
			} else if (this.communityInView) {
				return "c/" + this.communityInView.unique_id
			} else { return this.$route.name }
		}
	},
	methods: {
		routeNameIs(name) {
			if (this.$route && this.$route.name) {
				return this.$route.name === name
			} return false
		},
		routeNameStartsWith(text) {
			if (this.$route && this.$route.name) {
				return this.$route.name.startsWith(text)
			} return false
		}
	}
}
</script>
<style scoped>
.the-app-bar {
	border-bottom: 1px solid #d2d2d2 !important;
}
</style>

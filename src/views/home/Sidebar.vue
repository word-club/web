<template>
	<div class="pa-2">
		<trending-communities />
		<div class="py-2" />
		<try-word-club-premium />
		<div class="py-2" />
		<begin-with-word-club />
		<div class="py-2" />
		<recently-viewed-posts v-if="currentUser" />
		<div class="py-2" v-if="currentUser" />
		<home-footer />
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Sidebar",
	components: {
		TrendingCommunities: () => import("@/views/home/components/TrendingCommunities"),
		TryWordClubPremium: () => import("@/views/home/components/TryWordClubPremium"),
		BeginWithWordClub: () => import("@/views/home/components/BeginWithWordClub"),
		RecentlyViewedPosts: () => import("@/views/home/components/RecentlyViewedPosts"),
		HomeFooter: () => import("@/components/footer/HomeFooter"),
	},
	computed: {
		...mapGetters({
			currentUser: "user/current",
		})
	}
}
</script>

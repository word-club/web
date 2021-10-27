<template>
	<div class="pa-2">
		<trending-communities />
		<div class="py-2" />
		<try-word-club-premium />
		<div class="py-2" />
		<begin-with-word-club />
		<div class="py-2" />
		<recently-viewed-posts />
		<div class="py-2" />
		<home-footer />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	components: {
		HomeFooter: () => import("@/components/footer/HomeFooter.vue"),
		TrendingCommunities: () => import("@/views/home/components/TrendingCommunities.vue"),
		TryWordClubPremium: () => import("@/views/home/components/TryWordClubPremium.vue"),
		BeginWithWordClub: () => import("@/views/home/components/BeginWithWordClub.vue"),
		RecentlyViewedPosts: () => import("@/views/home/components/RecentlyViewedPosts.vue"),
	},
}
</script>

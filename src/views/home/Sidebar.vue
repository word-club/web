<template>
	<div class="pa-2">
		<trending-communities />
		<div class="py-2" />
		<try-word-club-premium />
		<div class="py-2" />
		<begin-with-word-club />
		<div class="py-2" />
		<recently-viewed-posts v-if="$helper.isUserLoggedIn()" />
		<div class="py-2" />
		<home-footer />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	components: {
		TrendingCommunities: () => import("@/views/home/components/TrendingCommunities"),
		TryWordClubPremium: () => import("@/views/home/components/TryWordClubPremium"),
		BeginWithWordClub: () => import("@/views/home/components/BeginWithWordClub"),
		RecentlyViewedPosts: () => import("@/views/home/components/RecentlyViewedPosts"),
		HomeFooter: () => import("@/components/footer/HomeFooter"),
	},
}
</script>

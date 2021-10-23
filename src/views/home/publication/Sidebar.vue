<template>
	<div class="pa-2">
		<community-peek />
		<div class="py-4" />
		<posting-to-word-club />
		<div class="py-4" />
		<home-small-footer />
	</div>
</template>

<script>
export default {
	name: "DetailSidebar",
	components: {
		CommunityPeek: () => import("@/views/home/community/CommunityPeek"),
		PostingToWordClub: () => import("@/components/utils/PostingToWordClub"),
		HomeSmallFooter: () => import("@/components/footer/HomeSmallFooter.vue")
	},
}
</script>

<style scoped>

</style>

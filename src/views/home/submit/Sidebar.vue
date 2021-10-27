<template>
	<div class="pa-2">
		<posting-to-word-club />
		<div class="py-4 px-2 sidebar-info">
			Please be mindful of <a href="">wordclub's content policy</a> and practice good blogging.
		</div>
		<home-small-footer />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	components: {
		PostingToWordClub: () => import("@/components/utils/PostingToWordClub")
	}
}
</script>

<style scoped>
.sidebar-info {
	font-size: 14px;
	color: #999999
}
</style>

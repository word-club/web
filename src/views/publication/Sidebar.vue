<template>
	<div v-if="publication" class="pa-2">
		<community-peek
			v-if="publication.community"
			:community="publication.community"
		/>

		<div class="py-4" />
		<posting-to-word-club />
		<div class="py-4" />
		<home-small-footer />
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "DetailSidebar",
	components: {
		CommunityPeek: () => import("@/views/community/CommunityPeek"),
		PostingToWordClub: () => import("@/components/utils/PostingToWordClub"),
	},
	computed: {
		...mapGetters({
			publication: "publication/inView"
		})
	}
}
</script>

<style scoped>

</style>

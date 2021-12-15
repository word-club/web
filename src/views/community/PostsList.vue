<template>
	<div>
		<add-post-box :color="community.theme.color" />
		<div class="py-2" />
		<hot-bar :color="community.theme.color" />
		<div class="py-2" />
		<feed-list :payload="payload" />
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "PostsList",
	components: {
		FeedList: () => import("@/components/feeds/FeedList"),
		HotBar: () => import("@/views/home/components/HotBar"),
		AddPostBox: () => import("@/views/home/components/AddPostBox"),
	},
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		payload() {
			return {
				is_published: true,
				community: this.community.id
			}
		}
	},
}
</script>

<style scoped>

</style>

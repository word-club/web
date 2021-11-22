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
import AddPostBox from "@/views/home/components/AddPostBox.vue";
import HotBar from "@/views/home/components/HotBar.vue";
import {mapGetters} from "vuex";
import FeedList from "@/components/feeds/FeedList.vue";
export default {
	name: "PostsList",
	components: {FeedList, HotBar, AddPostBox},
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

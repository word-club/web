<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<!--		<feed-list />-->
	</div>
</template>

<script>
import HotBar from "@/views/home/user/components/HotBar.vue";
import FeedCommentItem from "@/views/home/comment/FeedCommentItem.vue";
export default {
	name: "Overview",
	// feed list for user
	components: {FeedCommentItem, HotBar},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

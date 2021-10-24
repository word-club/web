<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<feed-comment-item />
	</div>
</template>

<script>
import HotBar from "@/views/home/user/components/HotBar.vue";
import FeedCommentItem from "@/views/home/comment/FeedCommentItem.vue";
export default {
	name: "Comments",
	components: {FeedCommentItem, HotBar},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

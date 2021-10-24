<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<publication-instance />
		<div class="py-2" />
		<publication-instance />
		<div class="py-2" />
		<feed-comment-item />
		<div class="py-2" />
		<publication-instance />
	</div>
</template>

<script>
import HotBar from "@/views/home/user/components/HotBar.vue";
import FeedCommentItem from "@/views/home/comment/FeedCommentItem.vue";
import PublicationInstance from "@/views/home/publication/Instance.vue";
export default {
	name: "Overview",
	components: {PublicationInstance, FeedCommentItem, HotBar},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-list three-line>
		<comment-item />
		<comment-item />
	</v-list>
</template>

<script>
import CommentItem from "@/views/home/publication/CommentItem.vue";
export default {
	name: "CommentList",
	components: {CommentItem},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

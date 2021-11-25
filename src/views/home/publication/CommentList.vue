<template>
	<v-list three-line>
		<comment-item
			v-for="(n, index) in 3"
			:key="n"
			:index="index"
		/>
	</v-list>
</template>

<script>
export default {
	name: "CommentList",
	components: {
		CommentItem: () => import("@/views/home/publication/CommentItem.vue")
	},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

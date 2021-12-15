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
		CommentItem: () => import("@/views/publication/CommentItem")
	},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

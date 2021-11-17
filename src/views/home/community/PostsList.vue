<template>
	<div>
		<add-post-box :color="community.theme.color" />
		<div class="py-2" />
		<hot-bar :color="community.theme.color" />
		<div class="py-2" />
		<!--		<feed-list />-->
	</div>
</template>

<script>
import AddPostBox from "@/views/home/components/AddPostBox.vue";
import HotBar from "@/views/home/components/HotBar.vue";
import {mapGetters} from "vuex";
export default {
	name: "PostsList",
	// feed list for community
	components: {HotBar, AddPostBox},
	props: {},
	data: () => ({}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

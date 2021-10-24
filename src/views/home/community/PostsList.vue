<template>
	<div>
		<add-post-box :color="community.theme.color" />
		<div class="py-2" />
		<hot-bar :color="community.theme.color" />
		<div class="py-2" />
		<publication-instance />
	</div>
</template>

<script>
import PublicationInstance from "@/views/home/publication/Instance.vue";
import AddPostBox from "@/views/home/components/AddPostBox.vue";
import HotBar from "@/views/home/components/HotBar.vue";
import {mapGetters} from "vuex";
export default {
	name: "PostsList",
	components: {HotBar, AddPostBox, PublicationInstance},
	props: {},
	data: () => ({}),
	computed: {
		...mapGetters({
			community: "community/detail"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

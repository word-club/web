<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<publication-instance />
		<div class="py-2" />
		<publication-instance />
		<div class="py-2" />
		<publication-instance />
	</div>
</template>

<script>
import PublicationInstance from "@/views/home/publication/Instance.vue";
import HotBar from "@/views/home/user/components/HotBar.vue";
export default {
	name: "Posts",
	components: {HotBar, PublicationInstance},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

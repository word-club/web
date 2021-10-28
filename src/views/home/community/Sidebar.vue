<template>
	<div class="pa-2">
		<about-community />
		<div class="py-2" />
		<community-rules />
		<div class="py-2" />
		<message-moderators />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	components: {
		AboutCommunity: () =>  import("@/views/home/community/AboutCommunity.vue"),
		CommunityRules: () =>  import("@/views/home/community/CommunityRules.vue"),
		MessageModerators: () =>  import("@/views/home/community/MessageModerators.vue"),
	},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<div class="pa-2 pb-16" v-if="community">
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
import {mapGetters} from "vuex";

export default {
	name: "Sidebar",
	components: {
		AboutCommunity: () =>  import("@/views/community/sidebar/AboutCommunity.vue"),
		CommunityRules: () =>  import("@/views/community/sidebar/CommunityRules.vue"),
		MessageModerators: () =>  import("@/views/community/sidebar/MessageModerators.vue"),
	},
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
}
</script>

<style scoped>

</style>

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
		AboutCommunity: () =>  import("@/views/community/AboutCommunity"),
		CommunityRules: () =>  import("@/views/community/CommunityRules"),
		MessageModerators: () =>  import("@/views/community/MessageModerators"),
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

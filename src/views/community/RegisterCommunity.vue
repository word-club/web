<template>
	<div class="px-2">
		<v-card class="pa-6 mx-auto"
			color="transparent" flat
			max-width="800"
		>
			<transition name="view">
				<router-view />
			</transition>
			<create-pending-dialog />
		</v-card>
	</div>
</template>

<script>
import CheckPendingCommunities from "@/mixin/CheckPendingCommunities.js";

export default {
	name: "RegisterCommunity",
	mixins: [CheckPendingCommunities],
	components: {
		CreatePendingDialog: () => import("@/views/community/register/components/CreatePendingDialog.vue")
	},
	created() {
		const itemInProgress = this.$helper.getCommunityInProgress()
		if (itemInProgress) {
			this.$store.dispatch("community/setInProgress", itemInProgress)
		} else {
			this.$store.dispatch("community/setInProgress", null)
			this.checkForPendingCommunities()
		}
	}
}
</script>



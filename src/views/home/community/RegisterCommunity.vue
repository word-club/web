<template>
	<div class="px-2">
		<v-card class="pa-6 mx-auto"
			color="transparent" flat
			max-width="800"
		>
			<div class="py-4" />
			<transition name="view">
				<router-view />
			</transition>
		</v-card>
	</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "RegisterCommunity",
	created() {
		const itemInProgress = localStorage.getItem("CommunityCreateInProgress")
		if (itemInProgress) {
			this.SET_COMMUNITY_IN_PROGRESS(JSON.parse(itemInProgress))
		}
	},
	methods: {
		...mapMutations("community", ["SET_COMMUNITY_IN_PROGRESS"])
	}
}
</script>



<template>
	<v-card flat max-width="800" class="mx-auto mt-4">
		<v-card-text class="pa-0">
			<transition name="view">
				<router-view />
			</transition>
		</v-card-text>
	</v-card>
</template>

<script>
import FetchMixin from "@/mixin/FetchMixin";
import {mapMutations} from "vuex";

export default {
	name: "ModSettings",
	mixins: [FetchMixin],
	data: () => ({
		mode: "community"
	}),
	created() {
		this.refreshCommunity();
	},
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
		refreshCommunity() {
			this.setToView = true
			this.fetchDetail("community")
		}
	}
}
</script>

<style scoped lang="scss">

</style>

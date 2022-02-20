<template>
	<v-card-text class="pa-0"
		v-if="community"
	>
		<v-card
			:height="coverHeight"
			:color="community.theme.color"
			tile flat
		>
			<v-img
				v-if="community.cover"
				:src="$link(community.cover.image)"
				:height="coverHeight"
			/>
		</v-card>
	</v-card-text>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CommunityCover",
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		coverHeight() {
			if (this.$route.name.includes("Community MOD Settings")) return 100
			if (!this.community?.cover) return 100
			return 300
		},
	}
}
</script>

<style scoped lang="scss">

</style>

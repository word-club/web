<template>
	<div>
		<v-card v-if="!items.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't shared anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in items"
			:key="item.id"
			class="pb-4"
		>
			<publication-instance
				v-if="Array.isArray(item.comments)"
				:publication="item"
				@init="handler"
			/>
			<comment-instance v-else :comment="item" />
		</div>
	</div>
</template>

<script>
import FeedMixin from "@/mixin/FeedMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "Shares",
	mixins: [FeedMixin],
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		publications() {
			if (!this.user && !this.user.shared_publications) return []
			return this.user.shared_publications
		},
		comments() {
			if (!this.user && !this.user.shared_comments) return []
			return this.user.shared_comments
		}
	},
	created() {
		this.sortItems()
	}
}
</script>

<style scoped lang="scss">

</style>

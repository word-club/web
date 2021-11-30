<template>
	<div>
		<v-card v-if="!items.length" flat min-height="86vh">
			<v-card-title class="empty-content">
				hmm... looks like you haven't saved anything yet
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
import {mapGetters} from "vuex";
import FeedMixin from "@/mixin/FeedMixin.js";

export default {
	name: "Saved",
	mixins: [FeedMixin],
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		publications() {
			if (!this.user && !this.user.saved_publications) return []
			return this.user.saved_publications
		},
		comments() {
			if (!this.user && !this.user.saved_comments) return []
			return this.user.saved_comments
		}
	},
	created() {
		this.sortItems()
	}
}
</script>

<style scoped>

</style>

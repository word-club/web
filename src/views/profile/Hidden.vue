<template>
	<div>
		<v-card v-if="!items.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't hidden anything yet
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
	name: "Hidden",
	mixins: [FeedMixin],
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		publications() {
			if (!this.user) return []
			if (!this.user.hidden_publications) return []
			return this.user.hidden_publications
		},
		comments() {
			if (!this.user) return []
			if (!this.user.hidden_comments) return []
			return this.user.hidden_comments
		}
	},
	created() {
		this.sortItems()
	}
}
</script>

<style scoped>

</style>

<template>
	<div>
		<v-card v-if="!hides.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't hidden anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in hides"
			:key="item.id"
			class="pb-4"
		>
			<publication-instance
				v-if="item.publication"
				:publication="item.publication"
				@init="handler"
			/>
			<comment-instance v-else :comment="item.comment" />
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
		hides() {
			if (!this.user) return []
			if (!this.user.my_hides) return []
			return this.user.my_hides
		},
	}
}
</script>

<style scoped>

</style>

<template>
	<div>
		<v-card v-if="!upVotes.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't upvoted anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in upVotes"
			:key="item.id"
			class="pb-4"
		>
			<publication-instance
				v-if="item.publication"
				:publication="item.publication"
			/>
			<comment-instance v-else :comment="item.comment" />
		</div>
	</div>
</template>

<script>
import FeedMixin from "@/mixin/FeedMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "UpVoted",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		upVotes() {
			if (!this.user) return []
			if (!this.user.my_votes) return []
			return this.user.my_votes.filter(vote => vote.up === true)
		},
	}
}
</script>

<style scoped>

</style>

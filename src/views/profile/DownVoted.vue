<template>
	<div>
		<v-card v-if="!downVotes.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't downvoted anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in downVotes"
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
import {mapGetters} from "vuex";

export default {
	name: "DownVoted",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		downVotes() {
			if (!this.user) return []
			if (!this.user.my_votes) return []
			return this.user.my_votes.filter(vote => !vote.up)
		},
	}
}
</script>

<style scoped>

</style>

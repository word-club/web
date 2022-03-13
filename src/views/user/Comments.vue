<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<v-card v-if="!comments.length" flat min-height="79vh">
			<v-card-title class="empty-content">
				{{ emptyText }}
			</v-card-title>
		</v-card>
		<div v-for="item in comments"
			:key="item.id"
			class="pb-4"
		>
			<comment-instance :comment="item" />
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
	name: "Comments",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		comments() {
			if (!this.user) return []
			if (this.user["my_comments"]) return this.user["my_comments"]
			else return []
		},
		emptyText() {
			const currentRoute = this.$route.name
			const pronoun = currentRoute.includes("Profile") ? "you" : "the user"
			return `hmm... looks like ${pronoun} haven't posted anything yet`
		}
	}
}
</script>

<style scoped>

</style>

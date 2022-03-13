<template>
	<div>
		<v-card v-if="!bookmarks.length" flat min-height="86vh">
			<v-card-title class="empty-content">
				hmm... looks like you haven't saved anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in bookmarks"
			:key="item.id"
			class="pb-4"
		>
			<comment-instance v-if="item.publication" :comment="item" />
			<publication-instance
				v-else
				:publication="item"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Saved",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		bookmarks() {
			if (!this.user && !this.user["my_bookmarks"]) return []
			return this.user.my_bookmarks
		},
	}
}
</script>

<style scoped>

</style>

<template>
	<div>
		<v-card v-if="!bookmarks.length" flat min-height="86vh">
			<v-card-title class="empty-content">
				hmm... looks like you haven't saved anything yet
			</v-card-title>
		</v-card>
		<v-card v-for="item in bookmarks"
			:key="item.id" flat
		>
			<publication-instance
				v-if="item.publication"
				:publication="item.publication"
				@init="refreshProfile()"
			/>
			<comment-instance v-else :comment="item.comment" />
		</v-card>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import ProfileMixin from "@/views/profile/ProfileMixin";

export default {
	name: "Saved",
	mixins: [ProfileMixin],
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

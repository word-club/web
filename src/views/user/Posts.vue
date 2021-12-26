<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<v-card v-if="!publications.length" flat min-height="79vh">
			<v-card-title class="empty-content">
				{{emptyText}}
			</v-card-title>
		</v-card>
		<div v-for="item in publications"
			:key="item.id"
			class="pb-4"
		>
			<publication-instance
				v-if="Array.isArray(item.comments)"
				:publication="item"
				@init="refreshMe()"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
export default {
	name: "Posts",
	mixins: [RefreshMeMixin],
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		publications() {
			if (this.user && this.user.published_publications) return this.user.published_publications
			return []
		},
		drafts() {
			if (!this.user && !this.user.drafts) return []
			return this.user.drafts
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

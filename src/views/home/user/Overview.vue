<template>
	<div v-if="user">
		<hot-bar />
		<div class="py-2" />
		<v-card color="transparent" flat>
			<v-card v-if="!items.length" flat min-height="79vh">
				<v-card-title class="empty-content">
					hmm... looks like you haven't done anything yet
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
		</v-card>
		<div class="py-2" />
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
import FeedMixin from "@/mixin/FeedMixin.js";
export default {
	name: "Overview",
	mixins: [RefreshMeMixin, FeedMixin],
	components: {
		HotBar: () => import("@/views/home/user/components/HotBar"),
		CommentInstance: () => import("@/views/home/components/CommentInstance"),
		PublicationInstance: () => import("@/views/home/components/PublicationInstance"),
	},
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		comments() {
			if (!this.user) return []
			return this.user.comments
		},
		publications() {
			if (!this.user) return []
			return this.user.published_publications
		},
	},
	created() {
		this.sortItems()
	}
}
</script>

<style scoped>

</style>

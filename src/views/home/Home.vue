<template>
	<v-card class="mx-auto transparent"
		max-width="800"
		flat
	>
		<div class="py-4">
			<add-post-box v-if="currentUser" />
		</div>
		<div class="py-4">
			<hot-bar />
		</div>
		<feed-list />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "HomeView",
	components: {
		FeedList: () => import("@/components/feeds/FeedList"),
		HotBar: () => import("@/views/home/components/HotBar"),
		AddPostBox: () => import("@/views/home/components/AddPostBox"),
	},
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	},
	created() {
		this.$store.dispatch("community/setToView", null)
		this.$store.dispatch("publication/setInView", null)
		this.$store.dispatch("user/setInView", null)
	}
}
</script>

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
	name: "Home",
	components: {
		FeedList: () => import("@/components/feeds/FeedList"),
		HotBar: () => import("@/views/home/components/HotBar"),
		AddPostBox: () => import("@/views/home/components/AddPostBox"),
	},
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	}
}
</script>

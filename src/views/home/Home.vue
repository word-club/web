<template>
	<v-card class="mx-auto transparent"
		max-width="800"
		flat
	>
		<add-post-box v-if="currentUser" class="my-4" />
		<hot-bar class="my-4" />
		<feed-list />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import FeedList from "@/components/feeds/FeedList.vue";

export default {
	name: "Home",
	components: {
		FeedList,
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

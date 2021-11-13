<template>
	<v-card class="mx-auto transparent"
		max-width="800"
		flat
	>
		<add-post-box v-if="currentUser" class="my-4" />
		<hot-bar class="my-4" />
		<publication-instance v-for="n in 5"
			:key="n" class="mb-4"
		/>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Home",
	components: {
		HotBar: () => import("@/views/home/components/HotBar"),
		AddPostBox: () => import("@/views/home/components/AddPostBox"),
		PublicationInstance: () => import("@/views/home/publication/Instance")
	},
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	}
}
</script>

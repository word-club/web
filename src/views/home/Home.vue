<template>
	<v-card class="mx-auto transparent"
		max-width="800"
		flat
	>
		<add-post-box class="my-4" />
		<hot-bar class="my-4" />
	</v-card>
</template>

<script>
export default {
	name: "Home",
	components: {
		HotBar: () => import("@/views/home/components/HotBar.vue"),
		AddPostBox: () => import("@/views/home/components/AddPostBox.vue")
	}
}
</script>

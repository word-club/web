<template>
	<v-card class="mx-auto transparent"
		max-width="800"
		flat
	>
		<add-post-box class="my-4" />
		<hot-bar class="my-4" />
		<publication-instance v-for="n in 5"
			:key="n" class="mb-4"
		/>
	</v-card>
</template>

<script>
export default {
	name: "Home",
	components: {
		PublicationInstance: () => import("@/views/home/components/PublicationInstance.vue"),
		HotBar: () => import("@/views/home/components/HotBar.vue"),
		AddPostBox: () => import("@/views/home/components/AddPostBox.vue")
	}
}
</script>

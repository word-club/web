<template>
	<div class="px-2">
		<user-peek />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>

export default {
	name: "Sidebar",
	components: {
		UserPeek: () => import("@/views/home/user/components/UserPeek.vue")
	},
}
</script>

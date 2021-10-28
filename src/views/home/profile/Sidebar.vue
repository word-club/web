<template>
	<div class="px-2">
		<profile-peek />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	components: {
		ProfilePeek: () => import("@/views/home/profile/components/ProfilePeek"),
	},
	props: {},
	methods: {}
}
</script>

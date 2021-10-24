<template>
	<div class="px-2">
		<profile-peek />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>
import ProfilePeek from "@/views/home/profile/components/ProfilePeek.vue";
import HomeSmallFooter from "@/components/footer/HomeSmallFooter.vue";

export default {
	name: "Sidebar",
	components: {HomeSmallFooter, ProfilePeek},
	props: {},
	methods: {}
}
</script>

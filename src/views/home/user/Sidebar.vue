<template>
	<div class="px-2">
		<user-peek />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>
import HomeSmallFooter from "@/components/footer/HomeSmallFooter.vue";
import UserPeek from "@/views/home/user/components/UserPeek.vue";

export default {
	name: "Sidebar",
	components: {UserPeek, HomeSmallFooter},
	props: {},
	methods: {}
}
</script>

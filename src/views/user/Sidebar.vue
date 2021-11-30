<template>
	<div class="px-2">
		<user-peek :user="userInView" />
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
	name: "Sidebar",
	components: {
		UserPeek: () => import("@/views/user/components/UserPeek.vue")
	},
	computed: {
		...mapGetters({
			userInView: "user/inView"
		})
	},
}
</script>

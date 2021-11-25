<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<div v-for="item in comments"
			:key="item.id"
			class="pb-4"
		>
			<comment-instance :comment="item" />
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
	name: "Comments",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		comments() {
			if (!this.user && !this.user.comments) return []
			return this.user.comments
		},
	}
}
</script>

<style scoped>

</style>

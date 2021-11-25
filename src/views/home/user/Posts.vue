<template>
	<div>
		<hot-bar />
		<div class="py-2" />
		<div v-for="item in publications"
			:key="item.id"
			class="pb-4"
		>
			<publication-instance
				v-if="Array.isArray(item.comments)"
				:publication="item"
				@init="refreshMe()"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
export default {
	name: "Posts",
	mixins: [RefreshMeMixin],
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		publications() {
			if (!this.user && !this.user.published_publications) return []
			return this.user.published_publications
		},
		drafts() {
			if (!this.user && !this.user.drafts) return []
			return this.user.drafts
		}
	}
}
</script>

<style scoped>

</style>

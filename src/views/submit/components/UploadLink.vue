<template>
	<text-field
		v-model="linkUrl"
		label="Link Url"
		icon="mdi-link"
		name="link" :dense="false"
		:errors="formErrors"
		:color="theme.color"
		:disabled="!payload.title"
		@change="createLink"
	/>
</template>

<script>
import PostMixin from "@/mixin/PostMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "UploadLink",
	props: {
		theme: {type: Object, required: true},
		payload: {type: Object, required: true}
	},
	data: () => ({
		linkUrl: null
	}),
	mixins: [PostMixin, PatchMixin],
	computed: {
		...mapGetters("publication", ["inProgress"])
	},
	methods: {
		createLink() {
			if (!this.linkUrl) {
				this.formErrors = {}
				return
			}
			if (this.inProgress && this.inProgress.link) {
				const url = this.$util.format(this.$urls.link.detail, this.inProgress.link.id)
				this.patch(url, {link: this.linkUrl})
					.then(() => {
						if(this.patchSuccess) {
							this.linkUrl = null
							this.$emit("refresh")
						}
					})
			} else {
				const url = this.$util.format(this.$urls.link.publication, this.inProgress.id)
				this.post(url, {link: this.linkUrl})
					.then(() => {
						if(this.success) {
							this.linkUrl = null
							this.$emit("refresh")
						}
					})
			}
		},

	}
}
</script>

<style scoped lang="scss">

</style>

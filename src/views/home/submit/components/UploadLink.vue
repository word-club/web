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
	methods: {
		createLink() {
			if (!this.payload.linkUrl) return
			if (this.inProgress && this.inProgress.link) {
				const url = this.$util.format(this.$urls.publication.linkDetail, this.inProgress.link.id)
				this.patch(url, {link: this.linkUrl})
					.then(() => {
						if(this.patchInstance) {
							this.$emit("refresh")
						}
					})
			} else {
				const url = this.$util.format(this.$urls.publication.addLink, this.inProgress.id)
				this.post(url, {link: this.payload.linkUrl})
					.then(() => {
						if(this.postInstance) {
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

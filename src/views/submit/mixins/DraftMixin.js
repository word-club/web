import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

const DraftMixin = {
	mixins: [ConfirmDialogMixin],
	data: () => ({
		payload: {
			type: null,
			community: null,
			title: null,
			linkUrl: null,
			content: null,
			hash_tags: []
		},
	}),
	computed: {
		myDrafts() {
			if (!this.currentUser) return [];
			return this.currentUser["my_publications"].filter(p => !p.is_published);
		},
	},
	methods: {
		initDraft() {
			this.initSubmit()
			this.draftMode = true
		},
		async preparePayload() {
			const payload = {}


			payload["title"] = this.payload.title
			payload["type"] = this.$route.params.type

			// prepare tags for payload
			// payload["tags"] = this.getSelectedTagsString()

			// prepare editor content
			if (this.inProgress.type === "editor") {
				const content = await this.editor.save()
				payload["content"] = JSON.stringify(content)
			}
			// prepare community for payload
			if (this.payload.community) {
				payload["community"] = this.payload.community.id
			}
			// prepare hashtags for payload
			if (this.payload.hash_tags) {
				payload["hash_tags"] = []
				this.payload.hash_tags.forEach(tag => {
					payload.hash_tags.push(tag.tag)
				})
			}
			return payload
		},
		async saveAsDraft(isDraft = true, refreshMe=true) {
			if(!this.checkRequired(["title"])) {
				const url = this.$util.format(this.$urls.publication.detail, this.inProgress.id)
				const payload = await this.preparePayload()
				// send publication patch request
				await this.patch(url, payload)
				if (!this.patchSuccess) {
					this.formErrors = {...this.patchErrors}
				} else {
					this.openSuccessSnack(`${isDraft ? "Draft" : "Publication"} saved successfully.`)
					await this.startNew()
					if (refreshMe) await this.refreshMe()
				}
			}
		},
		publishPublication() {
			this.saveAsDraft(this.inProgress.is_published, false)
				.then(async () => {
					const url = this.$util.format(this.$urls.publication.publish, this.inProgress.id)
					await this.openConfirmDialog(
						"Are you sure you want to publish this publication?",
						"POST",
						url,
						["refreshMe"],
						"Publication  published successfully.",
						"Sorry, something went wrong."
					)
				})
		},
		postPublication() {
			if(!this.inProgress) {
				if(!this.checkRequired(["title"])) {
					const url = this.$urls.publication.add
					this.post(url, {
						title: this.payload.title,
						type: this.payload.type,
						community: (this.payload.community) ? this.payload.community.id : null
					}).then(async () => {
						if (this.postInstance) {
							await this.$store.dispatch("publication/setInProgress", this.postInstance)
							await this.refreshMe()
							if (this.payload.type === "editor") this.initEditor(this.postInstance)
						}
					})
				}
			}
		},
	}
}

export default DraftMixin

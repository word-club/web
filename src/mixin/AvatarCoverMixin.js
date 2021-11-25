import FilesMixin from "@/mixin/FilesMixin.js";

const AvatarCoverMixin = {
	mixins: [FilesMixin],
	data: () => ({
		uploadMode: null
	}),
	computed: {
		avatarMode() {
			return this.uploadMode === "avatar"
		},
		coverMode() {
			return this.uploadMode === "cover"
		},
		avatarUrl() {
			if (this.avatarMode && this.fileUrls.length) return this.fileUrls[0]
			else if (this.user && this.user.profile.avatar) return this.$link(this.user.profile.avatar.image)
			else return false
		},
		coverUrl() {
			if (this.coverMode && this.fileUrls.length) return this.fileUrls[0]
			else if (this.user && this.user.profile.cover) return this.$link(this.user.profile.cover.image)
			else return false
		},
	},
	methods: {
		avatarInputChanged(e) {
			this.fileInputChanged(e)
			this.uploadMode = "avatar"
		},
		coverInputChanged(e) {
			this.fileInputChanged(e)
			this.uploadMode = "cover"
		},
		successCleanup() {
			this.clearFiles()
			this.uploadMode = null
			this.$store.dispatch("user/setCurrentUser", this.postInstance).then(() => {})
			this.$helper.setCurrentUser(this.postInstance)
		},
		save() {
			if (this.uploadMode === "avatar") this.addAvatar()
			else if (this.uploadMode === "cover") this.addCover()
		},
		addAvatar() {
			const fd = this.$helper.createFormData({image: this.files[0]})
			this.post(this.$urls.user.addAvatar, fd)
				.then(() => {
					if(this.success) {
						this.openSuccessSnack("Avatar added successfully.")
						this.successCleanup()
					}
					else this.openSnack("Sorry, something went wrong.")
				})
		},
		addCover() {
			const fd = this.$helper.createFormData({image: this.files[0]})
			this.post(this.$urls.user.addCover, fd)
				.then(() => {
					if(this.success) {
						this.openSuccessSnack("Cover added successfully.")
						this.successCleanup()
					}
					else this.openSnack("Sorry, something went wrong.")
				})
		}
	}
}

export default AvatarCoverMixin

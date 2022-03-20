import FilesMixin from "@/mixin/FilesMixin.js";
import PostMixin from "@/mixin/PostMixin.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

const AvatarCoverMixin = {
	mixins: [FilesMixin, PostMixin, RefreshMeMixin],
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
			else if (this.user && this.user.profile.avatars) {
				const activeAvatar = this.user.profile.avatars.find(avatar => avatar.is_active)
				if (activeAvatar) return this.$link(activeAvatar.image)
				else return false
			}
			else return false
		},
		coverUrl() {
			if (this.coverMode && this.fileUrls.length) return this.fileUrls[0]
			else if (this.user && this.user.profile.covers) {
				const activeCover = this.user.profile.covers.find(cover => cover.is_active)
				if (activeCover) return this.$link(activeCover.image)
				else return false
			}
			else return false
		},
	},
	methods: {
		avatarInputChanged(e) {
			this.fileInputChanged(e)
			this.uploadMode = "avatar"
			this.addAvatar()
		},
		coverInputChanged(e) {
			this.fileInputChanged(e)
			this.uploadMode = "cover"
			this.addCover()
		},
		successCleanup() {
			this.clearFiles()
			this.uploadMode = null
			this.refreshMe().catch(console.debug)
		},
		save() {
			if (this.uploadMode === "avatar") this.addAvatar()
			else if (this.uploadMode === "cover") this.addCover()
		},
		addAvatar() {
			const fd = this.$helper.createFormData({image: this.files[0]})
			this.post(this.$urls.avatar.profile, fd, {active: true})
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
			this.post(this.$urls.cover.profile, fd, {active: true})
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

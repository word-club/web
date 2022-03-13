import Snack from "@/mixin/Snack.js";
import SendActionRequestMixin from "@/mixin/SendActionRequestMixin.js";
import ReportDialogMixin from "@/mixin/ReportDialogMixin.js";

const MODEL = "publication";

const PublicationActionsMixin = {
	mixins: [Snack, SendActionRequestMixin, ReportDialogMixin],
	data: () => ({
		clipboardContent: null,
	}),
	computed: {
		reactions() {
			return this.item["popularity"] + this.item["dislikes"]
		},
		isMyItem() {
			if (!this.currentUser) return false
			// created by is not shown for profile items as they are all my items
			if (!this.item.created_by) return true
			return this.item.created_by.id === this.currentUser.id
		},
		myUpVote() {
			if (!this.currentUser) return false
			return this.currentUser["my_votes"].find(vote => vote.up && vote[MODEL]?.id === this.item.id)
		},
		myDownVote() {
			if (!this.currentUser) return false
			return this.currentUser["my_votes"].find(vote => !vote.up && vote[MODEL]?.id === this.item.id)
		},
		myHide() {
			if (!this.currentUser) return false
			return this.currentUser["my_hides"].find(hide => hide[MODEL]?.id === this.item.id)
		},
		myBookmark() {
			if (!this.currentUser) return false
			return this.currentUser["my_bookmarks"].find(bookmark => bookmark[MODEL]?.id === this.item.id)
		},
	},
	methods: {
		getLink() {
			return "something"
		},
		copyLink() {
			navigator.clipboard.writeText(this.getLink())
				.then(() => {
					this.clipboardContent = true
					this.openSnack("Publication link copied to the clipboard", {color: "success"})
				})
		},
		bookmark() {
			this.sendActionRequest({
				action: "bookmark",
				revoke: !!(this.myBookmark),
				id: (this.myBookmark) ? this.myBookmark.id : this.item.id
			})
		},
		hide() {
			this.sendActionRequest({
				action: "hide",
				revoke: !!(this.myHide),
				id: this.myHide ? this.myHide.id : this.item.id
			})
		},
		async addReport() {
			await this.openReportDialog(MODEL, this.item)
		},
		sendUpVote() {
			const upVote = this.myUpVote
			this.sendActionRequest({
				action: upVote ? "vote" : "up-vote",
				revoke: !!(upVote),
				id: (upVote) ? upVote.id : this.item.id
			})
		},
		sendDownVote() {
			const downVote = this.myDownVote
			this.sendActionRequest({
				action: downVote ? "vote" : "down-vote",
				revoke: !!(downVote),
				id: (downVote) ? downVote.id : this.item.id
			})
		},
		async createShare() {
			const object = this.item
			await this.$store.dispatch("dialog/clearDialog")
			await this.$store.dispatch("dialog/setShareInView", {
				model: "publication",
				object
			})
		},
	}
}

export default PublicationActionsMixin;

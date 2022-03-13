import Snack from "@/mixin/Snack.js";
import {mapGetters} from "vuex";
import SendActionRequestMixin from "@/mixin/SendActionRequestMixin.js";
import ReportDialogMixin from "@/mixin/ReportDialogMixin.js";

const MODEL="comment";

const CommentActionsMixin = {
	mixins: [Snack, SendActionRequestMixin, ReportDialogMixin],
	data: () => ({
		clipboardContent: null,
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
		}),
		reactions() {
			return this.comment["popularity"] + this.comment["dislikes"]
		},
		isMyItem() {
			if (!this.currentUser) return false
			return this.comment.created_by.id === this.currentUser.id
		},
	},
	methods: {
		getLink() {
			return "something"
		},
		copyLink(item = null) {
			if (!item) item = this.comment
			navigator.clipboard.writeText(this.getLink(item))
				.then(() => {
					this.clipboardContent = true
					this.openSnack("Publication link copied to the clipboard", {color: "success"})
				})
		},
		myUpVote(item = null) {
			if (!item) item = this.comment
			if (!this.currentUser) return false
			return this.currentUser["my_votes"].find(vote => vote.up && vote[MODEL] === item.id)
		},
		myDownVote(item = null) {
			if (!item) item = this.comment
			if (!this.currentUser) return false
			return this.currentUser["my_votes"].find(vote => !vote.up && vote[MODEL] === item.id)
		},
		myHide(item = null) {
			if (!item) item = this.comment
			if (!this.currentUser) return false
			return this.currentUser["my_hides"].find(hide => hide[MODEL] === item.id)
		},
		myBookmark(item = null) {
			if (!item) item = this.comment
			if (!this.currentUser) return false
			return this.currentUser["my_bookmarks"].find(bookmark => bookmark[MODEL] === item.id)
		},
		bookmark(item = null) {
			if (!item) item = this.comment
			this.sendActionRequest({
				model: MODEL,
				action: "bookmark",
				revoke: !!(this.myBookmark(item)),
				id: (this.myBookmark(item)) ? this.myBookmark(item).id : item.id
			})
		},
		hide(item = null) {
			if (!item) item = this.comment
			this.sendActionRequest({
				model: MODEL,
				action: "hide",
				revoke: !!(this.myHide(item)),
				id: this.myHide(item) ? this.myHide(item).id : item.id
			})
		},
		async addReport(item = null) {
			if (!item) item = this.comment
			await this.openReportDialog(MODEL, item)
		},
		sendUpVote(item = null) {
			if (!item) item = this.comment
			const upVote = this.myUpVote(item)
			this.sendActionRequest({
				model: MODEL,
				action: upVote ? "vote" : "up-vote",
				revoke: !!(upVote),
				id: (upVote) ? upVote.id : item.id
			})
		},
		sendDownVote(item = null) {
			if (!item) item = this.comment
			const downVote = this.myDownVote(item)
			this.sendActionRequest({
				model: MODEL,
				action: downVote ? "vote" : "down-vote",
				revoke: !!(downVote),
				id: (downVote) ? downVote.id : item.id
			})
		},
		// eslint-disable-next-line no-unused-vars
		async createShare(item = null) {
			const object = this.comment
			await this.$store.dispatch("dialog/clearDialog")
			await this.$store.dispatch("dialog/setShareInView", {
				model: MODEL, object
			})
		},
	}
}

export default CommentActionsMixin;

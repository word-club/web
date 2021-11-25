const CommentActions = {
	data: () => ({
		addReply: false,
		reportMessage: null,
		itemForShare: null,
		share: {
			title: null
		},
	}),
	computed: {},
	methods: {
		copyLink() {
			navigator.clipboard.writeText(this.getLink)
				.then(() => {
					this.clipboardContent = true
					this.openSnack("Comment link copied to the clipboard", {color: "success"})
				})
		},
		sendActionRequest({id, payload, action, revoke = false}) {
			const url = this.$util.format(this.$urls.comment[action], id)
			if (revoke) {
				this.$axios.delete(url).then(() => {
					this.$emit("init")
				})
			} else {
				this.post(url, payload).then(() => {
					if(this.success) {
						this.$emit("init")
					}
				})
			}
		},
		upVoteComment(item = null) {
			if (!item) item = this.comment
			const upVote = item.up_vote
			this.sendActionRequest({
				action: (upVote) ? "removeUpVote" : "addUpVote",
				revoke: !!(upVote),
				id: (upVote) ? upVote.id : item.id
			})
		},
		downVoteComment(item = null) {
			if (!item) item = this.comment
			const downVote = item.down_vote
			this.sendActionRequest({
				action: (downVote) ? "removeDownVote" : "addDownVote",
				revoke: !!(downVote),
				id: (downVote) ? downVote.id : item.id
			})
		},
		createShare(item = null) {
			if (!item) item = this.comment
			this.sendActionRequest({
				id: item.id,
				action: "share",
				payload: {...this.share}
			})
		},
		saveComment(item = null) {
			if (!item) item = this.comment
			const bookmarkStatus = item.bookmark_status
			this.sendActionRequest({
				action: (bookmarkStatus) ? "bookmarkDetail" : "addBookmark",
				revoke: !!(bookmarkStatus),
				id: (bookmarkStatus) ? bookmarkStatus.id : item.id
			})
		},
		reportComment(item = null) {
			if (!item) item = this.comment
			this.sendActionRequest({
				id: item.id,
				action: "addReport",
				payload: {title: this.reportMessage}
			})
		},
		hideComment(item = null) {
			if (!item) item = this.comment
			this.sendActionRequest({
				id: item.id,
				action: "addHiddenStatus"
			})
		},
		initCommentEdit(item = null) {
			if (!item) item = this.comment
		},
		initCommentDelete(item = null) {
			if (!item) item = this.comment
		},
		initReplyEdit(item=null) {
			if (!item) item = this.comment
		},
		initReplyDelete(item=null) {
			if (!item) item = this.comment
		},
	}
}

export default CommentActions

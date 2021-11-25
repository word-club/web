const FeedMixin = {
	data: () => ({
		items: [],
		sorting: null
	}),
	methods: {
		handler() {
			this.refreshMe()
				.then(() => {
					this.sortItems()
				})
		},
		sortItems() {
			this.sorting = true
			const items = this.comments.concat(this.publications)
			if (items.length) {
				items.sort((a, b) => {
					const t1 = this.$moment(a.timestamp).unix()
					const t2 = this.$moment(b.timestamp).unix()
					return t2 - t1 // latest first
				})
			}
			this.items = items
			this.sorting = false
		}
	}
}

export default FeedMixin

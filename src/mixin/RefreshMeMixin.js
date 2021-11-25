const RefreshMeMixin = {
	data: () => ({
		refreshing: false
	}),
	methods: {
		async refreshMe() {
			this.refreshing = true
			try {
				const res = await this.$axios.get(this.$urls.user.me)
				this.$helper.setCurrentUser(res)
				await this.$store.dispatch("user/setCurrentUser", res)
				await this.$store.dispatch("user/setInView", res)
			} finally {
				this.refreshing = false
			}
		}
	}
}

export default RefreshMeMixin

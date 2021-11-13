const CheckPendingCommunities = {
	methods: {
		checkForPendingCommunities() {
			this.$axios.getWithPayload(this.$urls.community.list, {
				completed_registration_steps: false
			}).then(res => {
				if (res.count >= 1) {
					this.$store.dispatch("community/setPendingList", res.results)
				} else {
					this.$helper.clearCommunityInProgress()
					this.$store.dispatch("community/setInProgress", null)
				}
			})
		}
	}
}

export default CheckPendingCommunities

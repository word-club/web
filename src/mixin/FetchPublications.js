const FetchPublications = {
	data: () => ({
		fetchingPubs: false
	}),
	methods: {
		async fetchPublications(
			payload = {}
		) {
			this.fetchingPubs = true
			payload = {
				is_published: true,
				depth: 3,
				asc: 0,
				...payload,
			}
			await this.$store.dispatch("publication/filter", payload)
			this.fetchingPubs = false
		}
	}
}

export default FetchPublications

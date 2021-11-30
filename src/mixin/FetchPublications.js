const FetchPublications = {
	data: () => ({
		isLoading: false
	}),
	methods: {
		async fetchPublications(
			payload = {}
		) {
			this.isLoading = true
			payload = {
				is_published: true,
				depth: 3,
				asc: 0,
				...payload,
			}
			await this.$store.dispatch("publication/filter", payload)
			this.isLoading = false
		}
	}
}

export default FetchPublications

const FetchMixin = {
	name: "FetchMixin",
	data: () => ({
		loading: true,
		notFound: null
	}),
	beforeRouteLeave(to, from, next){
		this.SET_TO_VIEW(null)
		next()
	},
	methods: {
		fetchDetail(model) {
			this.routeId = this.$route.params.id || this.$route.params.username
			this.loading = true
			const url = this.$urls[model]["retrieve"] || this.$urls[model]["detail"]
			return this.$axios
				.get(this.$util.format(url, this.routeId))
				.then(res => {
					this.SET_TO_VIEW(res)
				})
				.catch(() => {
					this.notFound = true
				})
				.finally(() => {
					this.loading = false
				})
		}
	}
}
export default FetchMixin

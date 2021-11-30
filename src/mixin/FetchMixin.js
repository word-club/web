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
			this.routeId = this.$route.params.id
			this.loading = true
			return this.$axios
				.get(this.$util.format(this.$urls[model].detail, this.routeId))
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

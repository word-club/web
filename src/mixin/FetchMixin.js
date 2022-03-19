const FetchMixin = {
	name: "FetchMixin",
	data: () => ({
		loading: true,
		fetchErr: null,
		fetchRes: null,
		setToView: true,
		clearToView: true,
	}),
	beforeRouteLeave(to, from, next){
		if (this.clearToView) this.SET_TO_VIEW(null)
		next()
	},
	methods: {
		fetchDetail(model, {pk = null} = {}) {
			this.loading = true
			const routeId = this.$route.params.id || this.$route.params.username || this.$route.params.uniqueId
			const url =
				this.$urls[model]["view"] ||
				this.$urls[model]["retrieve"] ||
				this.$urls[model]["detail"]
			return this.$axios
				.get(this.$util.format(url, pk || routeId))
				.then(res => {
					if (this.setToView) this.SET_TO_VIEW(res)
					this.fetchRes = res
				})
				.catch((err) => {
					this.fetchErr = err
				})
				.finally(() => {
					this.loading = false
				})
		}
	}
}
export default FetchMixin

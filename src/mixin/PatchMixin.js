const PatchMixin = {
	data: () => ({
		patchInstance: null,
		patchErrors: {},
		patching: false
	}),
	methods: {
		patch(url, payload) {
			this.patching = true
			return this
				.$axios.patch(url, payload)
				.then(res => {
					this.patchInstance = res
				})
				.catch(err => {
					this.patchErrors = err.response.data
				})
				.finally(() => {
					this.patching = false
				})
		}
	}
}

export default PatchMixin

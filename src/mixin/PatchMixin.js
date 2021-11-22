const PatchMixin = {
	data: () => ({
		patchInstance: null,
		patchErrors: {},
		patching: false,
		patchSuccess: false
	}),
	methods: {
		patch(url, payload) {
			this.patching = true
			return this
				.$axios.patch(url, payload)
				.then(res => {
					this.patchSuccess = true
					this.patchInstance = res
					this.patchErrors = {}
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

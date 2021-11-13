const DeleteMixin = {
	data: () => ({
		deleteErrors: {},
		deleting: false,
		deleteResponse: null
	}),
	methods: {
		delete(url) {
			this.deleting = true
			return this
				.$axios.delete(url)
				.then(res => {
					this.deleteResponse = res
				})
				.catch(err => {
					this.deleteErrors = err.response.data
				})
				.finally(() => {
					this.deleting = false
				})
		}
	}
}

export default DeleteMixin

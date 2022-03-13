const PostMixin = {
	data: () => ({
		posting: false,
		postInstance: null,
		formErrors: {},
		statusCode: null,
		success: false,
	}),
	methods: {
		post(url, payload = null) {
			this.posting = true
			return this
				.$axios.post(url, payload)
				.then(res => {
					this.success = true
					this.postInstance = res
					this.formErrors = {}
				})
				.catch(err => {
					this.success = false
					this.postInstance = null
					this.statusCode = err.response.status
					this.formErrors = err.response.data
				})
				.finally(() => {
					this.posting = false
				})
		}
	}
}

export default PostMixin

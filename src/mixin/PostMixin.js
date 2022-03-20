const PostMixin = {
	data: () => ({
		posting: false,
		postInstance: null,
		formErrors: {},
		statusCode: null,
		success: false,
	}),
	methods: {
		post(url, payload = null, params = {}) {
			this.posting = true
			return this
				.$axios.send("POST", url, payload, params)
				.then(res => {
					this.success = true
					this.postInstance = res.data
					this.formErrors = {}
				})
				.catch(err => {
					console.debug(err)
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

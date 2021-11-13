const PostMixin = {
	data: () => ({
		posting: false,
		postInstance: null,
		formErrors: {},
		statusCode: null
	}),
	methods: {
		post(url, payload = null) {
			this.posting = true
			return this
				.$axios.post(url, payload)
				.then(res => {
					console.log(res)
					this.postInstance = res
				})
				.catch(err => {
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

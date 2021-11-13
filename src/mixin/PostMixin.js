const PostMixin = {
	data: () => ({
		posting: false,
		postInstance: null,
		formErrors: {},
	}),
	methods: {
		post(url, payload = null) {
			this.posting = true
			return this
				.$axios.post(url, payload)
				.then(res => {
					this.postInstance = res
				})
				.catch(err => {
					this.formErrors = err.response.data
				})
				.finally(() => {
					this.posting = false
				})
		}
	}
}

export default PostMixin

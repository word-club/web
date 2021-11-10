const PostMixin = {
	data: () => ({
		posting: false,
		postInstance: null
	}),
	methods: {
		post(url, payload) {
			console.log(payload)
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

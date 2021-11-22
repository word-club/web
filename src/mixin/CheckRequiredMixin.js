const CheckRequiredMixin = {
	methods: {
		checkRequired(fieldList) {
			let errObj = {}
			fieldList.forEach(field => {
				if (!this.payload[field]) errObj[field] = ["This field is required."]
			})
			this.formErrors = { ...errObj }
			return Object.entries(errObj).length > 0
		},
	}
}

export default CheckRequiredMixin

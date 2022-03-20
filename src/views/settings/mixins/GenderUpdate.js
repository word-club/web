const GenderUpdate = {
	data() {
		return {
			gender: {
				type: null,
				custom: null,
			},
		}
	},
	methods: {
		submitGenderUpdate(choice) {
			this.gender.type = choice
			if (!this.gender.type) return
			if (this.gender.type === "C" && !this.gender.custom) {
				this.openSnack("Custom type gender must specify a custom value")
				return
			}
			this.patchAccount({
				gender: {
					type: this.gender.type,
					custom: this.gender.custom
				}
			})
		},
		getGenderString(type) {
			if (!type) return false
			const o = this.$constants.GENDER_OPTIONS.find(o => o.value === type)
			if (o) return o.text
			return false
		},
	}
}

export default GenderUpdate

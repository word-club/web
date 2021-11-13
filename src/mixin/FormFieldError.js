import Snack from "@/mixin/Snack.js";

const FormFieldError = {
	mixins: [Snack],
	computed: {
		getErrorMessage() {
			if (!this.errors) return null
			if (this.errors[this.name]) {
				return this.errors[this.name][0]
			}
			if (this.errors["non_field_errors"]) {
				this.openSnack(this.errors["non_field_errors"][0])
			}
			else return null
		}
	}
}

export default FormFieldError

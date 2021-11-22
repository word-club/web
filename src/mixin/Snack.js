import {mapMutations} from "vuex";

const Snack = {
	methods: {
		...mapMutations("snack", ["SET_SNACK", "SET_COLOR", "SET_TEXT", "SET_LINE", "SET_TIMEOUT"]),
		openSnack(text, {color = "error", timeout = 3000, multiline = false} = {}) {
			this.SET_SNACK(true)
			this.SET_TIMEOUT(timeout)
			this.SET_LINE(multiline)
			this.SET_TEXT(text)
			this.SET_COLOR(color)
		},
		openSuccessSnack(text, {color = "success", timeout = 3000, multiline = false} = {}) {
			this.SET_SNACK(true)
			this.SET_TIMEOUT(timeout)
			this.SET_LINE(multiline)
			this.SET_TEXT(text)
			this.SET_COLOR(color)
		}
	}
}

export default Snack

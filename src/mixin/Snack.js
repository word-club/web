import {mapMutations} from "vuex";

const Snack = {
	methods: {
		...mapMutations("snack", ["SET_SNACK", "SE_COLOR", "SE_TEXT", "SET_LINE", "SE_TIMEOUT"]),
		openSnack(text, {color = "error", timeout = 3000, multiline = false} = {}) {
			console.log(text, multiline)
			this.SET_SNACK(true)
			this.SE_TIMEOUT(timeout)
			this.SET_LINE(multiline)
			this.SE_TEXT(text)
			this.SE_COLOR(color)
		},
	}
}

export default Snack

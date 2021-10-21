const Snack = {
	methods: {
		async openSnack({text, color = "error", timeout = 3000}) {
			await this.$store.dispatch("snack/setState", true)
			await this.$store.dispatch("snack/setTimeout", timeout)
			await this.$store.dispatch("snack/setColor", color)
			await this.$store.dispatch("snack/setText", text)
		},
	}
}

export default Snack

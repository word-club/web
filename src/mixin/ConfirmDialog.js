const ConfirmDialog = {
	methods: {
		async openConfirmDialog(dialogMsg, method, url, events, successMessage, failMessage) {
			await this.$store.dispatch("confirmDialog/setDialogMessage", dialogMsg)
			await this.$store.dispatch("confirmDialog/setMethod", method)
			await this.$store.dispatch("confirmDialog/setUrl", url)
			await this.$store.dispatch("confirmDialog/setSuccessEvents", events)
			await this.$store.dispatch("confirmDialog/setSuccessMessage", successMessage)
			await this.$store.dispatch("confirmDialog/setFailureMessage", failMessage)
			await this.$store.dispatch("confirmDialog/setDialog", true)
		},
	}
}

export default ConfirmDialog

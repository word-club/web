import Snack from "@/mixin/Snack.js";
import axios from "axios";

const ConfirmDialog = {
	mixins: [Snack],
	emits: ["refreshMe", "refreshCommunity"],
	data: () => ({
		confirmSuccess: false,
		confirmErrors: false,
		confirmResponse: null,
	}),
	methods: {
		async closeConfirmDialog() {
			await this.$store.dispatch("confirmDialog/close")
		},
		proceedConfirmDialog() {
			const BACKEND_HOST = process.env.VUE_APP_BACKEND_HOST
			const opts = {
				headers: {
					"Authorization": "Token " + this.$helper.getAccessToken()
				},
				method: this.dialogMethod,
				url: `${BACKEND_HOST}/api/` + this.dialogUrl,
			}
			if (this.dialogPayload) {
				opts.data =  this.dialogPayload
			}
			if (this.dialogParams) {
				opts.params = this.dialogParams
			}
			axios(opts).then((res)  => {
				this.confirmResponse = res
				this.confirmSuccess = true
				this.openSuccessSnack(this.dialogSuccessMessage)
				this.dialogSuccessEvents.forEach(e => {
					this.$emit(e)
				})
				this.closeDialog()
			})
				.catch((err) => {
					this.confirmResponse = err.response
					this.confirmSuccess = false
					this.confirmErrors = err.response.data
					this.openSnack(this.dialogFailureMessage)
				})
		},
		async openConfirmDialog(dialogMsg, method, url, events, successMessage, failMessage, payload=null, params=null) {
			await this.$store.dispatch("confirmDialog/setDialogMessage", dialogMsg)
			await this.$store.dispatch("confirmDialog/setMethod", method)
			await this.$store.dispatch("confirmDialog/setUrl", url)
			await this.$store.dispatch("confirmDialog/setSuccessEvents", events)
			await this.$store.dispatch("confirmDialog/setSuccessMessage", successMessage)
			await this.$store.dispatch("confirmDialog/setFailureMessage", failMessage)
			if(payload) {
				await this.$store.dispatch("confirmDialog/setPayload", payload)
			}
			if(params) {
				await this.$store.dispatch("confirmDialog/setParams", params)
			}
			await this.$store.dispatch("confirmDialog/setDialog", true)
		},
	}
}

export default ConfirmDialog

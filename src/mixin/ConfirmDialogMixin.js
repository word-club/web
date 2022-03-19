import Snack from "@/mixin/Snack.js";
import {mapGetters} from "vuex";

const ConfirmDialogMixin = {
	mixins: [Snack],
	emits: ["refreshMe", "refreshCommunity", "startNew"],
	data: () => ({
		confirmSuccess: false,
		confirmErrors: false,
		confirmResponse: null,
	}),
	computed: {
		...mapGetters("confirmDialog",
			[
				"dialogState",
				"dialogMessage",
				"dialogMethod",
				"dialogUrl",
				"dialogPayload",
				"dialogParams",
				"dialogSuccessEvents",
				"dialogSuccessMessage",
				"dialogFailureMessage"
			]
		),
	},
	methods: {
		async closeConfirmDialog() {
			await this.$store.dispatch("confirmDialog/close")
		},
		proceedConfirmDialog() {
			this.$axios.send(
				this.dialogMethod,
				this.dialogUrl,
				this.dialogPayload,
				this.dialogParams,
			).then(async (res) => {
				this.confirmResponse = res
				this.confirmSuccess = true
				this.openSuccessSnack(this.dialogSuccessMessage)
				this.dialogSuccessEvents.forEach(e => {
					this.$emit(e)
				})
				await this.closeConfirmDialog()
			})
				.catch((err) => {
					console.debug(err)
					this.confirmResponse = err.response
					this.confirmSuccess = false
					this.confirmErrors = err.response?.data
					this.openSnack(this.dialogFailureMessage)
				})
		},
		async openConfirmDialog(dialogMsg, method="", url, events, successMessage, failMessage, payload=null, params=null) {
			await this.$store.dispatch("confirmDialog/setDialogMessage", dialogMsg)
			await this.$store.dispatch("confirmDialog/setMethod", method.toUpperCase())
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

export default ConfirmDialogMixin

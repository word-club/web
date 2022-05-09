import Snack from "@/mixin/Snack.js";

const DEFAULT_FAIL_MESSAGE = "This is weird. We're looking into it."

const ConfirmDialogMixin = {
	mixins: [Snack],
	emits: ["refreshMe", "refreshCommunity", "startNew"],
	data: () => ({
		confirmSuccess: false,
		confirmErrors: {},
		confirmResponse: null,
	}),
	methods: {
		async closeConfirmDialog() {
			await this.$store.dispatch("confirmDialog/close")
		},
		/**
		 * @param {string} title
		 * @param {string} method
		 * @param {string} url
		 * @param {array} events
		 * @param {string|null} successMessage
		 * @param {string|null} failMessage
		 * @param {Object|null} payload
		 * @param {Object|null} params
		 *
		 * @returns {Promise<void>}
		 */
		async openConfirmDialog(
			title,
			method,
			url,
			events,
			successMessage=null,
			failMessage = DEFAULT_FAIL_MESSAGE,
			payload=null,
			params=null
		) {
			await this.$store.dispatch("confirmDialog/setDialogMessage", title)
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

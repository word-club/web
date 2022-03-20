import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

const AccountUpdate = {
	data: () => ({
		countries: [],
		payload: {
			country: null
		},
		editEmail: false,
		emailToUpdate: null,
		deactivate: {
			mode: false,
			reason: null
		}
	}),
	mixins: [ConfirmDialogMixin, PatchMixin, Snack, RefreshMeMixin, ],
	methods: {
		addEmail() {
			this.editEmail = !this.editEmail
			this.emailToUpdate = null
		},
		changeEmail() {
			this.editEmail = true
			this.emailToUpdate = this.user.email
		},
		patchAccount(payload = {}) {
			this.patch(this.$urls.user.updateMe, payload).then(() => {
				if (this.patchSuccess) {
					this.refreshMe()
					this.openSuccessSnack("Account information updated successfully.")
				}
				else this.openSnack("Something went wrong, please try again.")
			})
		},
		deactivateMyAccountConfirm() {
			const url = this.$urls.user.deactivateMe
			this.openConfirmDialog(
				"Are you sure you want to deactivate your account?",
				"POST",
				url,
				["refresh"],
				"Account deactivated.",
				"Sorry, something went wrong.",
				{deactivation_reason: this.deactivate.reason}
			)
		},
		reActivateMe() {
			const url = this.$urls.user.activateMe
			this.openConfirmDialog(
				"Are you sure you want to activate your account?",
				"POST",
				url,
				["refresh"],
				"Account activated.",
				"Sorry, something went wrong."
			)
		}
	}
}

export default AccountUpdate

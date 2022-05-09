<template>
	<v-dialog
		:value="dialogState"
		persistent
		max-width="600"
	>
		<v-card>
			<v-card-title>
				CONFIRMATION
				<v-spacer />
				<v-btn
					fab small
					@click="closeConfirmDialog()"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<h3 v-html="dialogMessage" />
			</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-btn color="error"
					@click="closeConfirmDialog()"
				>
					Cancel
				</v-btn>
				<v-btn color="success"
					@click="proceedConfirmDialog()"
				>
					Proceed
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin";

export default {
	name: "ConfirmDialog",
	mixins: [ConfirmDialogMixin],
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
		proceedConfirmDialog() {
			this.$axios.send(
				this.dialogMethod,
				this.dialogUrl,
				this.dialogPayload,
				this.dialogParams,
			).then(async (res) => {
				this.confirmResponse = res
				this.confirmSuccess = true
				this.confirmErrors = {}
				this.openSuccessSnack(this.dialogSuccessMessage)
				this.dialogSuccessEvents.forEach(e => {
					this.$emit(e)
				})
			})
				.catch((err) => {
					console.error(err)
					this.confirmResponse = err.response
					this.confirmSuccess = false
					this.confirmErrors = err.response?.data
					this.openSnack(this.dialogFailureMessage)
				})
				.finally(async () => {
					await this.closeConfirmDialog()
				})
		},
	}
}
</script>

<style scoped lang="scss">

</style>

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
					@click="closeDialog"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<h3 v-html="dialogMessage"  />
			</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-btn color="error"
					@click="closeDialog"
				>Cancel</v-btn>
				<v-btn color="success"
					@click="proceedDialog"
				>Proceed</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios"
import Snack from "@/mixin/Snack.js";

export default {
	name: "ConfirmDialog",
	mixins: [Snack],
	emits: ["refreshMe", "refreshCommunity"],
	computed: {
		...mapGetters("confirmDialog",
			[
				"dialogState",
				"dialogMessage",
				"dialogMethod",
				"dialogUrl",
				"dialogSuccessEvents",
				"dialogSuccessMessage",
				"dialogFailureMessage"
			]
		),
	},
	methods: {
		closeDialog() {
			this.$store.dispatch("confirmDialog/close")
		},
		proceedDialog() {
			const BACKEND_HOST = process.env.VUE_APP_BACKEND_HOST
			axios({
				headers: {
					"Authorization": "Token " + this.$helper.getAccessToken()
				},
				method: this.dialogMethod,
				url: `${BACKEND_HOST}/api/` + this.dialogUrl,
			}).then(()  => {
				this.openSuccessSnack(this.dialogSuccessMessage)
				this.dialogSuccessEvents.forEach(e => {
					this.$emit(e)
				})
				this.closeDialog()
			})
				.catch(() => {
					this.openSnack(this.dialogFailureMessage)
				})
		}
	}
}
</script>

<style scoped lang="scss">

</style>

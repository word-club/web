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
					@click="closeConfirmDialog"
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
					@click="closeConfirmDialog"
				>Cancel</v-btn>
				<v-btn color="success"
					@click="proceedConfirmDialog"
				>Proceed</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "ConfirmDialog",
	mixins: [ConfirmDialogMixin],
}
</script>

<style scoped lang="scss">

</style>

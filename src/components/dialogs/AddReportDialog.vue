<template>
	<v-dialog
		:value="report.state"
		persistent
		max-width="600"
	>
		<v-card v-if="report.obj && report.model">
			<v-card-title class="d-flex justify-space-between align-center">
				<div>
					Report {{report.model}} <code>{{ report.obj.name }}</code>
				</div>
				<v-btn icon @click="closeReportDialog"><v-icon>mdi-close</v-icon></v-btn>
			</v-card-title>
			<v-divider class="mb-6" />
			<v-card-text>
				<text-area
					v-model="reason"
					name="reason"
					:errors="formErrors"
					counter="1000"
					label="Reason for reporting"
				/>
			</v-card-text>
			<v-card-actions>
				<v-btn block color="primary" :disabled="isDisabled" @click="submitReport">Report</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import ReportDialog from "@/mixin/ReportDialog.js";

export default {
	name: "AddReportDialog",
	mixins: [ReportDialog],
	computed: {
		isDisabled() {
			return !this.reason || this.reason === ""
		}
	}
}
</script>

<style scoped lang="scss">

</style>

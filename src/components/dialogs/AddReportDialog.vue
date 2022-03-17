<template>
	<v-dialog
		:value="dialog && !mod"
		persistent
		max-width="600"
	>
		<v-card v-if="!mod && toReport && model">
			<v-card-title class="d-flex justify-space-between align-center">
				<div>
					Report {{model}} <code v-if="objectDisplayName">{{ objectDisplayName }}</code>
				</div>
				<v-btn icon @click="closeReportDialog"><v-icon>mdi-close</v-icon></v-btn>
			</v-card-title>
			<v-divider class="mb-6" />
			<v-card-text>
				<text-field
					label="Report title"
					name="title"
					:errors="formErrors"
					icon="mdi-format-title"
					v-model="reportPayload.title"
				/>
				<div class="py-2" />
				<text-area
					v-model="reportPayload.content"
					name="content"
					:errors="formErrors"
					counter="1000"
					label="Report Content"
				/>
			</v-card-text>
			<v-card-actions>
				<v-btn block color="primary" :disabled="isDisabled" @click="submitReport">Report</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import ReportDialogMixin from "@/mixin/ReportDialogMixin.js";

export default {
	name: "AddReportDialog",
	mixins: [ReportDialogMixin],
	computed: {
		isDisabled() {
			return !this.reportPayload.title || !this.reportPayload.content;
		},
		objectDisplayName() {
			if (this.model === "publication") return this.toReport.title
			else if (this.model === "community") return this.toReport.name
			else if (this.model === "user") return this.toReport.username
			else if (this.model === "comment") return this.toReport.comment
			else return false
		}
	}
}
</script>

<style scoped lang="scss">

</style>

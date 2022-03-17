<template>
	<v-dialog
		:value="isReport && mod"
		max-width="600"
		persistent
		transition="dialog-bottom-transition"
	>
		<v-card v-if="mod && isReport && report && model">
			<v-card-title class="d-flex justify-space-between align-center">
				<div>
					<v-chip class="text-uppercase"
						:color="chipColor"
					>
						{{report.status}}
					</v-chip>
					<span class="px-3">Community Report</span>
				</div>
				<v-btn icon
					@click="$store.dispatch('dialog/clearDialog')"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>

			<v-divider class="mb-2"/>

			<v-card-text>
				<v-list>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Reporter</v-list-item-title>
							<v-list-item-subtitle>
								{{ report.created_by.name }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-flag</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Reason to report</v-list-item-title>
							<v-list-item-subtitle>
								{{ report.reason }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-list-item v-if="report.resolved_by">
						<v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{report.state === 'resolved' ? "Resolved" : "Ignored"}} by</v-list-item-title>
							<v-list-item-subtitle>
								{{ report.resolved_by.username }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-list-item v-if="report.resolve_text">
						<v-list-item-icon><v-icon>mdi-comment</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Resolve Message</v-list-item-title>
							<v-list-item-subtitle>
								{{ report.resolve_text }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Timestamp</v-list-item-title>
							<v-list-item-subtitle>
								{{ $moment(report.timestamp).format("LLLL Z") }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
			<v-card-text v-if="isPendingReport">
				<div class="pa-2">
					As an community moderator, we can resolve this report.
				</div>
				<text-area
					name="resolve_text"
					v-model="resolve_text"
					label="Resolve Text"
					:errors="confirmErrors"
					counter="1000"
				/>
			</v-card-text>

			<v-divider />

			<v-card-actions>
				<v-btn
					dark
					color="error"
					@click="deleteReport"
				>
					Delete
				</v-btn>
				<v-spacer />
				<v-btn
					v-if="isPendingReport"
					color="error" @click="ignoreReport"
					:disabled="resolve_text === ''"
				>
					Ignore
				</v-btn>
				<v-btn
					v-if="isPendingReport"
					color="success"
					@click="resolveReport"
					:disabled="resolve_text === ''"
				>
					Resolve
				</v-btn>
			</v-card-actions>
		</v-card>

	</v-dialog>
</template>

<script>
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "ReportAdminDialog",
	mixins: [ConfirmDialogMixin],
	data: () => ({
		resolve_text: "",
	}),
	computed: {
		...mapGetters({
			isReport: "dialog/report",
			report: "dialog/object",
			model: "dialog/model",
			mod: "dialog/mod"
		}),
		isPendingReport() {
			return this.report?.state === "pending"
		},
		isIgnoredReport() {
			return this.report.state === "ignored"
		},
		chipColor() {
			return (this.isPendingReport)
				? "orange"
				: this.isIgnoredReport
					? "error"
					: "primary"
		}
	},
	methods: {
		resolveReport() {
			this.openConfirmDialog(
				"Are you sure you want to resolve this report?",
				"POST",
				this.$util.format(this.$urls.community.resolveReport, this.report.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Report resolved successfully!",
				"Sorry! Report couldn't be resolved!",
				{resolve_text: this.resolve_text, state: "resolved"}
			)
		},
		ignoreReport() {
			this.openConfirmDialog(
				"Are you sure you want to ignore this report?",
				"POST",
				this.$util.format(this.$urls.community.resolveReport, this.report.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Report ignored successfully!",
				"Sorry! Report couldn't be ignored!",
				{resolve_text: this.resolve_text, state: "ignored"}
			)
		},
		deleteReport() {
			this.openConfirmDialog(
				"Are you sure you want to delete this report?",
				"DELETE",
				this.$util.format(this.$urls.report.detail, this.report.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Report deleted successfully!",
				"Sorry! Report couldn't be deleted!",
				{resolve_text: this.resolve_text}
			)
		}
	}
}
</script>

<style scoped lang="scss">

</style>

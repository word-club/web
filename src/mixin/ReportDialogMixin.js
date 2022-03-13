import {mapGetters, mapMutations} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";

const ReportDialogMixin = {
	mixins: [PostMixin, Snack],
	data: () => ({
		reportPayload: {
			title: null,
			content: null
		},
		resolvePayload: {
			resolve_text: null
		}
	}),
	computed: {
		dialog: {
			get() {
				return this.$store.getters["dialog/report"];
			},
			set(value) {
				this.SET_REPORT(!!(value))
			}
		},
		...mapGetters({
			report: "dialog/object",
			model: "dialog/model"
		})
	},
	methods: {
		...mapMutations("dialog", ["SET_REPORT"]),
		async openReportDialog(model, object) {
			await this.$store.dispatch("dialog/setReportInView", {
				model,
				object
			})
		},
		async closeReportDialog() {
			await this.$store.dispatch("dialog/clearDialog")
		},
		submitReport() {
			const model = this.model
			const obj = this.report
			const url = `${model}/${obj.id}/report/`
			this.post(url, {
				...this.reportPayload
			})
				.then(async () => {
					if (this.success) {
						this.openSuccessSnack("Report added successfully.")
						this.reason = null
						await this.closeReportDialog()
					} else this.openSnack("Sorry, your report could not be posted.")
				})
		}
	}
}

export default ReportDialogMixin

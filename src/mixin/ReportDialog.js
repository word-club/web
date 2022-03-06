import {mapMutations} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";

const ReportDialog = {
	mixins: [PostMixin, Snack],
	data: () => ({
		reason: null,
	}),
	computed: {
		report: {
			get() {
				return this.$store.getters.reportState;
			},
			set(value) {
				this.SET_REPORT_STATE(value)
			}
		}
	},
	methods: {
		...mapMutations(["SET_REPORT_STATE"]),
		openReportDialog(model, obj) {
			this.SET_REPORT_STATE({
				model: model,
				obj: obj,
				state: true
			})
		},
		closeReportDialog() {
			this.SET_REPORT_STATE({
				model: null,
				obj: null,
				state: false
			})
		},
		submitReport() {
			const model = this.report.model
			const obj = this.report.obj
			const url = this.$util.format(this.$urls[model]["addReport"], obj.id)
			this.post(url, {
				reason: this.reason
			})
				.then(() => {
					if(this.success) {
						this.openSuccessSnack("Report added successfully.")
						this.closeReportDialog()
						this.reason = null
					}
					else this.openSnack("Sorry, your report could not be posted.")
				})
		}
	}
}

export default ReportDialog

import PostMixin from "@/mixin/PostMixin.js";
import RouteMixin from "@/mixin/RouteMixin.js";

const CommunityProgress = {
	mixins: [PostMixin, RouteMixin],
	computed: {
		state() {
			return this.community.create_progress
				.find(item => item.state === this.stateCode)
		},
	},
	methods: {
		checkRequired() {
			let messages = []
			if (!Array.isArray(this.requiredFields)) return messages
			this.requiredFields.forEach(field => {
				if (!this.community[field]) messages.push(`Community ${field} is not set.`)
			})
			if (!this.isValid) messages.push(this.invalidMessage)
			return messages
		},
		async afterRequestAction() {
			this.$helper.setCommunityInProgress(this.postInstance)
			if (this.stateCode === "5") await this.toCommunityDetail(this.community.id)
			if (this.nextRoute) await this.$router.push({name: this.nextRoute})
		},
		async skip() {
			if (!this.state.is_skipped) {
				await this.post(
					this.$util.format(
						this.$urls.community.skipProgress,
						this.state.id
					)
				)
				if (this.success) await this.afterRequestAction()
			}
		},
		async next() {
			const messages = this.checkRequired()
			if (messages.length >= 1) {
				this.openSnack(messages.join("\n"), {multiline: true})
			} else {
				await this.post(
					this.$util.format(
						this.$urls.community.completeProgress,
						this.state.id
					)
				)
				if (this.success) await this.afterRequestAction()
			}
		}
	}
}

export default CommunityProgress

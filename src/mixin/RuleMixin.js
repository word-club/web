import PostMixin from "@/mixin/PostMixin.js";
import DeleteMixin from "@/mixin/DeleteMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";

const RuleMixin = {
	data: () => ({
		rule: {
			title: null, description: null
		}
	}),
	mixins: [PostMixin, DeleteMixin, PatchMixin],
	methods: {
		deleteRule(ruleId) {
			return this.delete(
				this.$util.format(
					this.$urls.community.removeRule,
					ruleId
				)
			)
		},
		patchRule(ruleId, payload) {
			return this.patch(
				this.$util.format(
					this.$urls.community.ruleDetail,
					ruleId
				),
				payload
			)
		},
		saveRule() {
			return this.post(
				this.$util.format(
					this.$urls.community.addRule,
					this.community.id
				),
				{...this.rule})
		}
	}
}

export default RuleMixin

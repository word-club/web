import PostMixin from "@/mixin/PostMixin.js";
import DeleteMixin from "@/mixin/DeleteMixin.js";

const RuleMixin = {
	data: () => ({
		rule: {
			title: null, description: null
		}
	}),
	mixins: [PostMixin, DeleteMixin],
	methods: {
		deleteRule(ruleId) {
			return this.delete(
				this.$util.format(
					this.$urls.community.removeRule,
					ruleId
				)
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

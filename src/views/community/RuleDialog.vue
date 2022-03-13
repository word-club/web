<template>
	<v-dialog v-model="dialog" max-width="500" persistent>
		<v-card>
			<v-card-title>
				{{ ruleInEdit ? 'Edit Rule' : 'Add Rule' }}
				<v-spacer />
				<v-btn icon @click="closeDialog">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-divider />
			<div class="py-2" />
			<v-card-text>
				<text-field
					v-model="rule.title"
					icon="mdi-format-title"
					label="Rule Title"
					name="title"
					:errors="formErrors"
				/>
				<div class="py-4" />
				<text-area
					v-model="rule.description"
					icon="mdi-subtitles"
					label="Rule Description"
					name="description"
					counter="512"
					:errors="formErrors"
				/>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="closeDialog" depressed color="error">Cancel</v-btn>
				<v-spacer />
				<v-btn
					v-if="ruleInEdit"
					dark :color="community.theme.color"
					@click="updateRule"
				>
					Save
				</v-btn>
				<v-btn v-else
					dark :color="community.theme.color"
					@click="newRule"
				>
					Add
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import RuleMixin from "@/mixin/RuleMixin.js";

export default {
	name: "RuleDialog",
	mixins: [RuleMixin],
	computed: {
		...mapGetters({
			community: "community/inView",
			ruleInEdit: "ruleInEdit"
		}),
		dialog: {
			get() {
				return this.$store.getters.ruleState
			},
			set(v) {
				this.$store.dispatch("setRuleState", v)
			}
		}
	},
	watch: {
		ruleInEdit(v) {
			if (v) {
				this.dialog = true
				this.rule = {...v}
			}
		}
	},
	methods: {
		closeDialog() {
			this.rule = { title: null, description: null }
			this.$store.dispatch("setRuleState", false)
			this.$store.dispatch("setRuleInEdit", null)
		},
		updateRule() {
			this.patchRule(this.ruleInEdit.id, {
				title: this.rule.title,
				description: this.rule.description
			}).then(() => {
				if (this.patchSuccess) this.closeDialog()
				else this.openSnack("Rule update failed. Please try again.")
			})
		},
		newRule() {
			this.saveRule()
				.then(() => {
					if (this.success) {
						this.closeDialog()
					} else {
						this.openSnack("Rule create failed. Please try again.")
					}
				})
		}
	}
}
</script>

<style scoped lang="scss">

</style>

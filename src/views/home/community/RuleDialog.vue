<template>
	<v-dialog v-model="dialog" max-width="500">
		<v-card>
			<v-card-title>
				Community Rule
				<v-spacer />
				<v-btn icon @click="$store.dispatch('setRuleState', false)">
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
				<v-btn @click="$store.dispatch('setRuleState', false)" depressed color="error">Cancel</v-btn>
				<v-btn
					dark :color="community.theme.color"
					@click="newRule"
				>
					Save
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
			community: "community/inView"
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
	created() {
	},
	methods: {
		newRule() {
			this.saveRule()
				.then(() => {
					if (this.success) {
						this.rule = {title: null, description: null}
						this.$store.dispatch("setRuleState", false)
					}
				})
		}
	}
}
</script>

<style scoped lang="scss">

</style>

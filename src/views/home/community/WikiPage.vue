<template>
	<v-card flat>
		<rule-dialog />
		<v-card-actions class="grey lighten-5">
			<v-spacer />
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn icon
						v-bind="attrs" v-on="on"
					>
						<v-icon>mdi-dots-horizontal</v-icon>
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item
						@click="$store.dispatch('setRuleState', true)"
					>
						New Rule
					</v-list-item>
					<v-divider />
					<v-list-item>Copy URL</v-list-item>
				</v-list>
			</v-menu>
		</v-card-actions>
		<v-card-text>
			<v-card flat color="grey lighten-4">
				<v-card-title class="table-of-content">Table of content</v-card-title>
				<v-card-text>
					<v-card outlined flat>
						<v-card-title class="content-item px18">
							Welcome to {{community.name}}!
						</v-card-title>
						<v-card-text class="py-1 px16 weight-500">
							Rules
						</v-card-text>
						<v-list class="content-item-list" dense>
							<v-list-item class="content-item align-center pl-5"
								v-for="(rule, index) in community.rules"
								:key="rule.id"
							>
								<v-list-item-avatar size="12" tile >
									<div class="full-width text-center">{{ index + 1 }}.</div>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>{{rule.title}}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>
				</v-card-text>
				<v-card-text>
					{{ community.welcome_text }}
				</v-card-text>
				<v-card-text class="py-0">
					<v-card-title class="py-0">Rules</v-card-title>
				</v-card-text>
				<v-card-text
					v-for="(rule, index) in community.rules"
					:key="rule.id"
					class="py-0"
				>
					<v-card-title :class="{'pt-0': index !==0}">
						{{rule.title}}
						<v-spacer />
						<v-btn icon :color="community.theme.color"
							@click="$store.dispatch('setRuleInEdit', rule)"
						>
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
						<v-btn icon color="error"><v-icon>mdi-delete</v-icon></v-btn>
					</v-card-title>
					<v-card-subtitle>{{rule.description}}</v-card-subtitle>
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import RuleDialog from "@/views/home/community/RuleDialog.vue";
export default {
	name: "WikiPage",
	components: {RuleDialog},
	data: () => ({
		options: {
			lineNumbers: false
		}
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.table-of-content {
	font-size: 18px!important;
}
::v-deep.v-list-item {
	min-height: 30px !important;
}
</style>

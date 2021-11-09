<template>
	<v-card flat color="transparent">
		<v-card-text>
			<v-card dark
				img="https://www.pepls.ms.gov/sites/pepls/files/images/rules-and-regulations.jpg"
				height="100"
				class="d-flex align-start"
			>
				<v-card-title class="pt-1">
					This is Rules
				</v-card-title>
			</v-card>
			<v-card-subtitle class="pb-1">
				Set rules for your subscribers to create publication on behalf of your community.
			</v-card-subtitle>
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text v-for="(rule, index) in rules"
			:key="index"
		>
			<v-subheader class="px-1">
				<span class="text-decoration-underline">Rule {{ index+1 }}</span>
				<v-spacer></v-spacer>
				<v-fab-transition>
					<v-btn v-if="rules.length > 1" x-small color="error"
						@click="removeRule(index)"
					>Remove rule</v-btn>
				</v-fab-transition>
			</v-subheader>
			<text-field
				v-model="rule.title"
				icon="mdi-format-title"
				label="Rule Title"
				name="title"
			/>
			<div class="py-4" />
			<text-area
				v-model="rule.description"
				icon="mdi-subtitles"
				label="Rule Description"
				name="title"
				counter="512"
			/>
		</v-card-text>
		<v-card-actions class="flex-wrap pa-3">
			<v-btn class="ma-1" outlined color="grey darken-3"
				:to="{name: 'Community Display'}"
			>Display</v-btn>
			<v-btn depressed color="grey lighten-1"
				:to="{name: 'Community Hashtags'}"
				class="ma-1" dark
			>
				Skip
			</v-btn>
			<v-spacer />
			<v-btn class="ma-1" outlined color="primary" @click="addAnotherRule">Add Another</v-btn>
			<v-btn
				:to="{name: 'Community Hashtags'}"
				color="primary" class="ma-1 weight-600 px15"
			>
				Next
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import TextArea from "@/components/form/TextArea.vue";
import TextField from "@/components/form/TextField.vue";
import {mapGetters} from "vuex";

export default {
	name: "Rules",
	components: {TextArea, TextField},
	data: () => ({
		rules: [
			{title: null, description: null}
		]
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		})
	},
	methods: {
		addAnotherRule() {
			this.rules.push({title: null, description: null})
		},
		removeRule(index) {
			this.rules.splice(index, 1)
		}
	}
}
</script>

<style scoped>

</style>

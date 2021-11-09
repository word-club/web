<template>
	<v-card flat color="transparent">
		<v-card-text>
			<v-card dark>
				<v-card-actions>
					<v-icon x-large>mdi-pound-box</v-icon>
					<v-card-title>
						Give identity for your community using tags
					</v-card-title>
				</v-card-actions>
			</v-card>
		</v-card-text>
		<v-card-text>
			<tag-field />
		</v-card-text>
		<v-card-actions>
			<v-avatar color="grey" tile class="rounded">
				<v-icon dark>mdi-help</v-icon>
			</v-avatar>
			<div class="px-4 px13">
				Set your hashtags which precisely describes your community. Hashtags will represent your publication preference. It will be used for user recommendations too.
			</div>
		</v-card-actions>
		<div class="pt-4 pb-2">
			<v-divider />
		</div>
		<v-card-actions>
			<v-btn color="grey darken-3" dark outlined
				:to="{name: 'Community Rules'}"
			>rules</v-btn>
			<v-spacer />
			<v-btn color="grey lighten-1" dark depressed>skip</v-btn>
			<v-btn color="primary"
				:to="{name: 'Community Authorization'}"
			>Next</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import TagField from "@/components/form/TagField.vue";
export default {
	name: "Hashtags",
	components: {TagField},
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

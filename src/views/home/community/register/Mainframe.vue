<template>
	<div>
		<v-card-title>Register a community</v-card-title>
		<div class="px-3">
			<v-divider />
		</div>
		<v-card-text class="pa-0">
			<v-row class="ma-0 pa-0 py-6">
				<v-col cols="12">
					<text-field
						v-model="community.name"
						name="name"
						label="Name"
						icon="mdi-format-title"
						:errors="formErrors"
					/>
				</v-col>
				<v-col cols="12">
					<text-area
						v-model="community.description"
						name="description"
						label="Description"
						icon="mdi-subtitles-outline"
						:errors="formErrors"
						counter="512"
					/>
				</v-col>
				<v-col cols="12">
					<v-radio-group v-model="community.type">
						<v-radio v-for="(item, index) in radioGroup"
							:key="index" :value="item.value"
							hide-details
							color="primary"
							class="radio-item"
						>
							<template #label>
								<v-icon>{{ item.icon }}</v-icon>
								<div class="px-2 px15 weight-600">
									{{ item.title }}
								</div>
								<div class="px14">
									{{ item.desc }}
								</div>
							</template>
						</v-radio>
					</v-radio-group>
				</v-col>
				<v-col cols="12">
					<div class="px18 weight-500">
						Adult Content
					</div>
					<v-checkbox
						v-model="community.adult" color="primary"
						label="18+ year old community"
					/>
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-actions>
			<v-spacer />
			<v-btn
				:to="{name: 'Community Display'}"
				color="primary"
				class="px15"
			>
				Create
			</v-btn>
		</v-card-actions>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Mainframe",
	components: {
		TextArea: () => import("@/components/form/TextArea.vue"),
		TextField: () => import("@/components/form/TextField.vue")
	},
	data: () => ({
		community: {
			name: null,
			description: null,
			adult: null,
			type: null
		},
		radioGroup: [
			{
				icon: "mdi-account-box",
				title: "Public",
				desc: "Anyone an view, post and comment to this community",
				value: "public"
			},
			{
				icon: "mdi-eye-check-outline",
				title: "Restricted",
				desc: "Anyone can view this community but only approved users can post",
				value: "restricted"
			},
			{
				icon: "mdi-lock",
				title: "Private",
				desc: "Only approved users can view and submit to this community",
				value: "private"
			},
		]
	}),
	computed: {
		...mapGetters({
			formErrors: "community/errorList"
		})
	},
	methods: {}
}
</script>

<style scoped>
.radio-item {
	margin: 0;
	padding: 6px 0;
}
</style>

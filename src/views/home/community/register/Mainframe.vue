<template>
	<div>
		<v-card color="primary" dark class="mx-2">
			<v-card-title class="d-flex align-center flex-wrap">
				<v-icon large dark>mdi-plus</v-icon>
				<span class="px-2">New community</span>
			</v-card-title>
		</v-card>
		<div class="px-3">
			<v-divider />
		</div>
		<v-card-text class="pa-0">
			<v-row class="ma-0 pa-0 py-6">
				<v-col cols="12">
					<text-field
						v-model="payload.name"
						name="name"
						label="Name"
						icon="mdi-format-title"
						:errors="formErrors"
					/>
				</v-col>
				<v-col cols="12">
					<text-field
						v-model="payload.unique_id"
						name="unique_id"
						label="Unique ID"
						icon="mdi-fingerprint"
						:errors="formErrors"
						hint="Unique ID will be used for your community URLs."
					/>
				</v-col>
				<v-col cols="12">
					<text-field
						v-model="payload.email"
						name="email"
						label="Email"
						icon="mdi-at"
						:errors="formErrors"
					/>
				</v-col>
				<v-col cols="12">
					<text-area
						v-model="payload.description"
						name="description"
						label="Description"
						icon="mdi-subtitles-outline"
						:errors="formErrors"
						counter="256"
					/>
				</v-col>
				<v-col cols="12">
					<v-radio-group v-model="payload.type">
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
								<div class="px13 weight-600 grey--text text--darken-0">
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
						v-model="payload.contains_adult_content" color="primary"
						label="18+ year old community"
					/>
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-actions>
			<v-spacer />
			<v-btn
				color="primary"
				class="px15"
				@click="createCommunity()"
			>
				Create
			</v-btn>
		</v-card-actions>
		<register-progress-dialog />
	</div>
</template>

<script>
import PostMixin from "@/mixin/PostMixin.js";
import RouteMixin from "@/mixin/RouteMixin.js";
import Snack from "@/mixin/Snack.js";
import CheckRequiredMixin from "@/mixin/CheckRequiredMixin.js";

export default {
	name: "Mainframe",
	mixins: [PostMixin, RouteMixin, Snack, CheckRequiredMixin],
	components: {
		RegisterProgressDialog: () => import("@/views/home/community/register/components/RegisterProgressDialog")
	},
	data: () => ({
		payload: {
			name: null,
			email: null,
			description: null,
			contains_adult_content: false,
			type: "public"
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
		],
	}),
	methods: {
		createCommunity() {
			if (!this.checkRequired(["name", "description"])) {
				this.post(this.$urls.community.list, this.payload)
					.then(() => {
						if (Object.keys(this.formErrors).length === 0) {
							this.toRegisterCommunityTheme()
							this.$helper.setCommunityInProgress(this.postInstance)
							this.$store.dispatch("community/setInProgress", this.postInstance)
						}
					})
			}
		}
	}
}
</script>

<style scoped>
.radio-item {
	margin: 0;
	padding: 6px 0;
}
</style>

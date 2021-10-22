<template>
	<v-card class="mx-auto transparent"
		max-width="750"
		flat
	>
		<v-card-text />
		<v-card-title class="px-0 pb-3">
			<div>Create post</div>
			<v-spacer />
			<v-btn text small
				color="primary"
			>
				DRAFTS
			</v-btn>
		</v-card-title>
		<v-divider />
		<v-row class="ma-0 pa-0">
			<v-col cols="6"
				class="px-0"
			>
				<community-autocomplete
					v-model="post.community"
					:errors="errors"
				/>
			</v-col>
			<v-card
				elevation="0"
				color="grey lighten-4"
				width="100%"
			>
				<v-card-actions class="pa-0 justify-space-around">
					<v-btn
						v-for="(item, index) in items"
						:key="index" depressed
						tile
						height="50"
						width="23%"
					>
						<v-icon size="20">
							{{ item.icon }}
						</v-icon>
						<span class="pl-2">{{ item.title }}</span>
					</v-btn>
				</v-card-actions>

				<v-card flat
					class="rounded-t-0"
				>
					<v-row class="ma-0 pa-0">
						<v-col cols="12">
							<text-field
								v-model="post.title"
								label="Title"
								name="title"
								icon="mdi-format-title"
								:errors="errors"
							/>
						</v-col>
						<v-col cols="12">
							<editor />
						</v-col>
						<v-col cols="12">
							<v-combobox
								v-model="tags"
								:items="hashtags.results"
								label="Select hashtags or create a new one"
								prepend-inner-icon="mdi-tag-outline"
								multiple clearable
								chips small-chips
								deletable-chips
								outlined dense
								hide-details="auto"
								:error-messages="errors['tag']"
								color="grey darken-4"
							/>
						</v-col>
					</v-row>
					<v-divider class="mx-2" />
					<v-card-actions>
						<v-spacer />
						<v-btn rounded
							depressed color="grey lighten-2"
						>
							Save as Draft
						</v-btn>
						<v-btn rounded
							dark depressed
							color="primary"
						>
							Publish
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-card>
		</v-row>
		<v-card-text />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Submit",
	components: {
		Editor: () => import("@/views/home/submit/Editor.vue"),
		TextField: () => import("@/components/form/_text_field.vue"),
		CommunityAutocomplete: () => import("@/components/form/_community_autocomplete.vue")
	},
	props: {},
	data: () => ({
		tab: null,
		items: [
			{title: "Post", icon: "mdi-post"},
			{title: "Images/Videos", icon: "mdi-image-size-select-actual"},
			{title: "Link", icon: "mdi-link-variant"},
			{title: "Poll", icon: "mdi-chart-box-outline"},
		],
		post: {
			community: null,
			title: null
		},
		tags: null
	}),
	computed: {
		...mapGetters({
			errors: "community/formErrorList",
			tagFormErrors: "hashtag/formErrorList",
			hashtags: "hashtag/list"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

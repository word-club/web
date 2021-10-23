<template>
	<v-card outlined
		class="publication-instance"
	>
		<v-card-text class="d-flex align-center pa-2 flex-wrap justify-space-between">
			<v-avatar size="30"
				color="grey" tile
				class="rounded"
			/>
			<div class="px-1" />
			<div class="publication-community">
				{{ publication.community.name }}
			</div>
			<div class="px-2" />
			<div class="publication-author">
				{{ publication.created_by.username }}
			</div>
			<div class="px-2" />
			<div class="publication-timestamp">
				{{ $moment(publication.timestamp).fromNow() }}
			</div>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
		</v-card-text>
		<v-card-title class="pt-1">
			{{ publication.title }}
		</v-card-title>
		<v-card-subtitle>{{ publication.content }}</v-card-subtitle>
		<v-card-text class="pa-0">
			<v-img :src="publication.image"
				height="350"
			/>
		</v-card-text>
		<v-card-actions class="flex-wrap justify-space-between">
			<v-btn depressed>
				<v-icon left>
					mdi-comment-outline
				</v-icon>
				300 Comments
			</v-btn>
			<v-btn depressed>
				<v-icon left>
					mdi-share-variant-outline
				</v-icon>
				Share
			</v-btn>
			<v-menu absolute
				transition="scale-transition"
			>
				<template #activator="{on, attrs}">
					<v-btn icon
						v-bind="attrs"
						class="mx-1"
						v-on="on"
					>
						<v-icon>mdi-dots-horizontal</v-icon>
					</v-btn>
				</template>
				<v-list dense
					class="py-0"
				>
					<v-list-item-group v-for="(item, index) in publicationActions"
						:key="index"
						v-model="selected"
					>
						<v-list-item>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider v-if="publicationActions.length !== index + 1" />
					</v-list-item-group>
				</v-list>
			</v-menu>

			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-chevron-up</v-icon>
			</v-btn>
			<div class="px-1 green--text font-weight-bold">
				99
			</div>
			<v-btn icon>
				<v-icon>mdi-chevron-down</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "PublicationInstance",
	props: {},
	data: () => ({
		selected: null,
		publication: {
			community: {
				name: "Movies and TV Series"
			},
			created_by: {
				username: "kiranparajuli589"
			},
			timestamp: "2021-10-21T22:07:24.169676+05:45",
			title: "The first trailer for the film adaptation Uncharted",
			content: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." +
				" Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum" +
				" id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis " +
				"quis ac lectus.",
			image: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/11/Harry-Potter-wand-Harry-Potter-Movies.jpg"
		}
	}),
	computed: {
		publicationActions() {
			return [
				{icon: "mdi-bookmark-outline", title: "Save"},
				{icon: "mdi-eye-off-outline", title: "Hide"},
				{icon: "mdi-flag-outline", title: "Report"}
			]
		}
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.publication-instance:hover {
	border: 1px solid black !important;
}
.publication-community {
	font-size: 14px;
	font-weight: bold;
}
.publication-author {
	font-size: 14px;
}
.publication-timestamp {
	font-size: 12px;
}
.publication-title {
	font-size: 18px;
	font-weight: 500;
}
.publication-timestamp {

}
.v-btn {
	font-size: 12px !important;
	font-weight: 600 !important;
	color: #585858;
}
</style>

<template>
	<v-card outlined>
		<v-card-text class="pa-2 d-flex">
			<v-icon>mdi-comment</v-icon>
			<div class="px-2">
				<div class="d-flex">
					<div class="px14">
						<span class="cursor primary--text hover-underline"
							@click="toUserOverview(comment.created_by.username)"
						>u/{{ comment.created_by.username }}</span> commented on
						<span class="cursor weight-500 hover-underline"
							@click="toPublicationDetail(comment.publication.id)"
						>{{ comment.publication.title }}</span>
					</div>
					<v-icon>mdi-circle-small</v-icon>
					<div class="px14 weight-600 cursor hover-underline"
						:class="`${comment.publication.community.theme.color}--text`"
						@click="toCommunityDetail(comment.publication.community.unique_id)"
					>
						{{ comment.publication.community.unique_id }}
					</div>
				</div>
				<div class="px14 weight-400">
					Posted by <span class="cursor hover-underline weight-600"
						@click="toUserOverview(comment.publication.created_by.username)"
					>{{ comment.publication.created_by.username }}</span>
				</div>
			</div>
		</v-card-text>
		<v-divider class="mx-2 pb-1" />
		<div class="comment-item-wrapper">
			<v-card flat
				class="item-card"
				color="grey lighten-3"
			>
				<v-card-subtitle class="d-flex py-0 pt-1 px14">
					<div class="cursor hover-underline"
						@click="toUserOverview(comment.created_by.username)"
					>
						{{ comment.created_by.username }}
					</div>
					<v-icon>mdi-circle-small</v-icon>
					<div>{{ $moment(comment.timestamp).fromNow() }}</div>
				</v-card-subtitle>
				<v-card-text class="py-0 px16 black--text">
					{{ comment.text }}
				</v-card-text>
				<v-card-actions class="pa-2 pt-0">
					<div v-ripple
						class="action-btn cursor"
					>
						Reply
					</div>
					<div v-ripple
						class="action-btn cursor"
					>
						Give Award
					</div>
					<div v-ripple
						class="action-btn cursor"
					>
						Share
					</div>
					<v-menu offset-y>
						<template #activator="{attrs, on}">
							<v-btn icon
								v-bind="attrs" v-on="on"
							>
								<v-icon>mdi-dots-horizontal</v-icon>
							</v-btn>
						</template>
						<v-list dense>
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-flag-outline</v-icon>
									<v-list-item-title class="pl-2">
										Report
									</v-list-item-title>
								</v-list-item-icon>
							</v-list-item>
							<v-divider />
							<v-list-item>
								<v-list-item-icon>
									<v-icon>mdi-bookmark-outline</v-icon>
									<v-list-item-title class="pl-2">
										Save
									</v-list-item-title>
								</v-list-item-icon>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-card-actions>
			</v-card>
		</div>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "FeedCommentItem",
	mixins: [RouteMixin],
	props: {},
	data: () => ({
		comment: {
			text: "Crazy parkour skill!",
			created_by: {username: "kiranparajuli589"},
			timestamp: "2021-10-21T22:07:24.169676+05:45",
			publication: {
				id: 578,
				title: "This is quite amazing",
				community: {
					unique_id: "CrazyFuckingVideos",
					theme: {
						color: "purple"
					}
				},
				created_by: {username: "AnimeHabbits"}
			}
		}
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped lang="scss">
.comment-item-wrapper {
	margin: 6px 8px 10px 20px;
	.item-card {
		border-left: 3px dashed grey !important;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
		.action-btn {
			margin: 2px 4px;
			font-weight: 600;
			color: grey;
			padding: 2px;
			border-radius: 4px;
		}
		.action-btn:hover {
			color: black;
		}
	}
}
</style>

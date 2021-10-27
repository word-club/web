<template>
	<v-card outlined
		class="mx-auto" max-width="800"
	>
		<v-card-text class="d-flex align-center py-2 flex-wrap justify-space-between">
			<v-avatar size="30"
				color="grey" tile
				class="rounded cursor"
				@click="toCommunityDetail(publication.community.id)"
			/>
			<div class="px-1" />
			<div class="weight-500 px16 cursor hover-underline"
				@click="toCommunityDetail(publication.community.id)"
			>
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
		<v-card-title class="py-2 publication-title">
			{{ publication.title }}
		</v-card-title>
		<v-card-text class="py-2 px16">
			Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
		</v-card-text>
		<v-img src="https://www.gaonconnection.com/h-upload/2018/08/142057lsun8ytpjw37abf0qnrntgspzxa8sogd2800639.png"
			height="400"
		/>
		<v-card-text class="px16">
			Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
		</v-card-text>
		<actions />
		<v-card-actions class="pb-0 px-1">
			<comment-field :publication="publication.id" />
		</v-card-actions>
		<v-card-text>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn rounded
						depressed small
						v-bind="attrs"
						v-on="on"
					>
						<span class="px10 font-weight-bold primary--text">
							Sort By: Top (Suggested)
						</span>
						<v-icon small
							color="primary"
						>
							mdi-chevron-down
						</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item>Kiran</v-list-item>
				</v-list>
			</v-menu>
			<v-divider class="my-2" />
			<div class="d-flex">
				<v-spacer />
				<div class="px12 font-weight-bold primary--text">
					View discussions in other communities
				</div>
			</div>
		</v-card-text>
		<v-card-text class="px-0">
			<comment-list />
		</v-card-text>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "Publication",
	components: {
		Actions: () => import("@/views/home/publication/Actions.vue"),
		CommentList: () => import("@/views/home/publication/CommentList.vue"),
		CommentField: () => import("@/components/form/_comment_field.vue")
	},
	mixins: [RouteMixin],
	data: () => ({
		myComment: ""
	}),
	computed: {
		publication() {
			return {
				id: 5896,
				community: {
					id: 7890,
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
		}
	}
}
</script>

<style scoped>
.publication-title {
	font-size: 32px; line-height: 32px;
}
</style>

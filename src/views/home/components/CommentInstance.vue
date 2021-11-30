<template>
	<v-card outlined
		class="feeds-comment-item"
	>
		<v-card-text class="pa-2 d-flex">
			<v-icon>mdi-comment</v-icon>
			<div class="px-2">
				<div class="d-flex">
					<div class="px14">
						<span class="cursor primary--text hover-underline"
							@click="toUserOverview(createdBy.username)"
						>
							u/{{ createdBy.username }}
						</span>
						<span class="px-1">commented on</span>
						<span class="cursor weight-500 hover-underline"
							@click="toPublicationDetail(publication.id)"
						>
							{{ publication.title }}
						</span>
					</div>
					<v-icon v-if="community">mdi-circle-small</v-icon>
					<div
						v-if="community"
						class="px14 weight-600 cursor hover-underline"
						:class="`${community.theme.color}--text`"
						@click="toCommunityDetail(community.id)"
					>
						{{ community.unique_id }}
					</div>
				</div>
				<div class="px14 weight-400">
					Posted by
					<span class="cursor hover-underline weight-600"
						@click="toUserOverview(publication.created_by.username)"
					>
						{{ publication.created_by.username }}
					</span>
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
						@click="toUserOverview(createdBy.username)"
					>
						u/{{ createdBy.username }}
					</div>
					<v-icon>mdi-circle-small</v-icon>
					<div>{{ $moment(comment.timestamp).fromNow() }}</div>
				</v-card-subtitle>
				<v-card-text class="py-0 px16 black--text">
					{{ comment.comment }}
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
					<v-spacer />
					<v-btn small icon><v-icon>mdi-arrow-up-bold</v-icon></v-btn>
					<div>{{comment.popularity}}</div>
					<v-btn icon small><v-icon>mdi-arrow-down-bold</v-icon></v-btn>
				</v-card-actions>
			</v-card>
		</div>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "CommentInstance",
	mixins: [RouteMixin],
	props: {
		comment: {
			type: Object, default: () => ({
				publication: {
					community: null,
					created_by: null
				},
			})
		}
	},
	computed: {
		...mapGetters({
			userInView: "user/inView",
		}),
		publication() {
			return this.comment.publication
		},
		community() {
			return this.publication.community
		},
		createdBy() {
			if (this.comment.created_by) return this.comment.created_by
			else return {
				username: this.userInView.username
			}
		}
	}
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
.feeds-comment-item:hover {
	border: 1px solid #707070 !important;
}
</style>

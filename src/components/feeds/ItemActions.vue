<template>
	<v-card class="rounded-t-0" color="grey lighten-4" flat>
		<v-divider />
		<v-card-actions class="flex-wrap"
			:class="{
				'justify-space-evenly': smAndDown
			}"
		>
			<v-btn
				:small="smAndDown"
				outlined
				class="item-action-btn to-comments"
				color="grey darken-1"
				@click="routeToPublicationDetailComments"
			>
				<v-icon left>mdi-comment-outline</v-icon>
				{{ item["discussions"] }} Comments
			</v-btn>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn v-if="!smAndDown"
						outlined
						v-on="on"
						v-bind="attrs"
						color="grey darken-1"
						class="item-action-btn share-action"
					>
						<v-icon left>mdi-share-outline</v-icon>Share
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item
						v-model="clipboardContent"
						class="menu-item copy-action"
						@click="copyLink"
					>
						<v-list-item-icon class="mr-2">
							<v-icon color="grey">mdi-link</v-icon>
						</v-list-item-icon>
						Copy Link
					</v-list-item>
					<v-divider v-if="!isMyItem" />
					<v-list-item
						v-if="!isMyItem"
						class="menu-item cross-post-action"
						@click="createShare()"
					>
						<v-list-item-icon class="mr-2">
							<v-icon color="grey">mdi-source-branch</v-icon>
						</v-list-item-icon>
						Cross Post
					</v-list-item>
				</v-list>
			</v-menu>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn
						v-if="!isMyItem" class="more-actions"
						icon outlined color="grey darken-1" v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list dense>
					<v-menu>
						<template #activator="{on, attrs}">
							<v-list-item v-if="smAndDown"
								class="menu-item share-action"
								v-bind="attrs"
								v-on="on"
							>
								<v-list-item-icon class="mr-2"><v-icon>mdi-share-outline</v-icon></v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>Share</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</template>
						<v-list dense>
							<v-list-item
								class="menu-item copy-action"
								@click="copyLink()"
							>
								<v-list-item-icon class="mr-2">
									<v-icon color="grey">mdi-link</v-icon>
								</v-list-item-icon>
								Copy link
							</v-list-item>
							<v-divider />
							<v-list-item
								class="menu-item cross-post-action"
								@click="createShare()"
							>
								<v-list-item-icon class="mr-2">
									<v-icon color="grey">mdi-post</v-icon>
								</v-list-item-icon>
								CrossPost
							</v-list-item>
						</v-list>
					</v-menu>
					<v-divider v-if="smAndDown" />
					<v-list-item @click="bookmark()"
						class="menu-item bookmark-action"
						active-class="menu-item-active"
						:class="{'menu-item-active': ((myBookmark))}"
					>
						<v-list-item-icon class="mr-2">
							<v-icon v-if="myBookmark">mdi-bookmark</v-icon>
							<v-icon v-else>mdi-bookmark-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Bookmark</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="hide()"
						class="menu-item hide-action"
						active-class="menu-item-active"
						:class="{'menu-item-active': ((myHide))}"
					>
						<v-list-item-icon class="mr-2">
							<v-icon>mdi-eye-off-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Hide</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="addReport()"
						class="menu-item report-action"
					>
						<v-list-item-icon class="mr-2">
							<v-icon>mdi-flag-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Report</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer v-if="!smAndDown" />
			<v-chip color="primary"
				small v-if="reactions === 0"
				class="mx-1 add-first-reaction"
			>
				Add First Reaction
			</v-chip>
			<v-btn icon @click="sendUpVote()"
				color="primary"
				:value="myUpVote"
				class="mx-0 upvote-action"
			>
				<v-icon>
					mdi-arrow-up-bold{{ (myUpVote) ? '' : '-outline' }}
				</v-icon>
			</v-btn>
			<div v-if="reactions > 0"
				class="grey--text text--darken-3 weight-500 px-1 reactions-count"
			>
				{{reactions}}
			</div>
			<v-btn icon @click="sendDownVote()"
				color="grey darken-2"
				:value="myDownVote"
				class="mx-0 downvote-action"
			>
				<v-icon>
					mdi-arrow-down-bold{{ (myDownVote) ? '' : '-outline' }}
				</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";
import PublicationActionsMixin from "@/mixin/PublicationActionsMixin.js";

export default {
	name: "ItemActions",
	mixins: [
		RouteMixin,
		ScreenSizeMixin,
		PublicationActionsMixin
	],
	props: {
		item: {type: Object, default: () => {}},
	},
	computed: {
		...mapGetters({
			currentUser: "user/current"
		}),
	},
	methods: {
		routeToPublicationDetailComments() {
			this.toPublicationDetail(this.item.id, "comments")
		},
	}
}
</script>

<style scoped lang="scss">
.item-action-btn {
	margin-top: 2px;
	margin-right: 6px;
	margin-bottom: 2px;
	font-size: 14px;
}
.menu-item {
	color: #868686 !important;
}
.menu-item:hover {
	background-color: whitesmoke;
	color: #1d1d1d !important;
	::v-deep.v-icon {
		color: #1d1d1d !important;
	}
}
.menu-item-active {
	background-color: whitesmoke;
	color: #1d1d1d !important;
	::v-deep.v-icon {
		color: #1d1d1d !important;
	}
}
.share-scrollbar {
	::-webkit-scrollbar {
		width: 5px !important;
	}
}
</style>

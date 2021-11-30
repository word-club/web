<template>
	<v-card class="rounded-t-0" color="grey lighten-4" flat>
		<v-dialog v-model="shareMode" max-width="600" scrollable>
			<v-card color="primary" dark>
				<v-card-title>
					Share details
					<v-spacer />
					<v-icon>mdi-share</v-icon>
				</v-card-title>
				<v-divider />
				<div class="py-2"></div>
				<v-card-text>
					<v-text-field
						outlined hide-details="auto"
						v-model="share.title"
						name="title"
						prepend-inner-icon="mdi-format-title"
						label="TITLE"
						:error-messages="formErrors['title']"
					/>
				</v-card-text>
				<v-card-text style="max-height: 400px;"
					class="share-scrollbar"
				>
					<v-card outlined light>
						<item-header :item="publication" />
						<v-divider />
						<v-card-title>
							{{ publication.title }}
							<v-spacer />
							<v-chip v-if="getTypeString(publication.type)" outlined>{{ getTypeString(publication.type) }}</v-chip>
						</v-card-title>
						<item-images v-if="publication.type === 'media'" :item="publication" />
						<item-link v-if="publication.type === 'link'" :link="publication.link"/>
						<item-content v-if="publication.type ==='editor'" :content="JSON.parse(publication.content)" />
						<v-card-text class="grey lighten-4 d-flex flex-wrap align-center pa-2">
							<div class="pa-1">{{ publication.view_count }} Views</div>
							<v-icon>mdi-circle-small</v-icon>
							<div class="pa-1">{{ publication.discussions }} Comments</div>
						</v-card-text>
					</v-card>
				</v-card-text>
				<v-card-actions class="primary lighten-3">
					<v-btn block color="primary" @click="createShare">Share</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-divider />
		<v-card-actions class="flex-wrap"
			:class="{
				'justify-space-evenly': smAndDown
			}"
		>
			<v-btn
				:small="smAndDown"
				outlined
				class="item-action-btn"
				color="grey darken-1"
				@click="routeToPublicationDetailComments"
			>
				<v-icon left>mdi-comment-outline</v-icon>
				{{ publication.discussions }} Comments
			</v-btn>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn v-if="!smAndDown" outlined class="item-action-btn"
						v-bind="attrs"
						v-on="on"
						color="grey darken-1"
					>
						<v-icon left>mdi-share-outline</v-icon>Share
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item
						v-model="clipboardContent"
						class="menu-item"
						@click="copyLink"
					>
						<v-list-item-icon class="mr-2">
							<v-icon color="grey">mdi-link</v-icon>
						</v-list-item-icon>
						Copy Link
					</v-list-item>
					<v-divider v-if="!isMyPublication" />
					<v-list-item
						v-if="!isMyPublication"
						class="menu-item"
						@click="shareMode=true"
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
						v-if="!isMyPublication"
						icon outlined color="grey darken-1" v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list dense>
					<v-menu>
						<template #activator="{on, attrs}">
							<v-list-item v-if="smAndDown" class="menu-item"
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
							<v-list-item class="menu-item"
								@click="copyLink"
							>
								<v-list-item-icon class="mr-2">
									<v-icon color="grey">mdi-link</v-icon>
								</v-list-item-icon>
								Copy link
							</v-list-item>
							<v-divider />
							<v-list-item
								class="menu-item"
								@click="shareMode=true"
							>
								<v-list-item-icon class="mr-2">
									<v-icon color="grey">mdi-post</v-icon>
								</v-list-item-icon>
								CrossPost
							</v-list-item>
						</v-list>
					</v-menu>
					<v-divider v-if="smAndDown" />
					<v-list-item @click="bookmark()" class="menu-item"
						active-class="menu-item-active"
						:class="{'menu-item-active': ((bookmarkStatus))}"
					>
						<v-list-item-icon class="mr-2"><v-icon>mdi-bookmark-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Bookmark</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="hide()" class="menu-item"
						active-class="menu-item-active"
						:class="{'menu-item-active': ((hiddenStatus))}"
					>
						<v-list-item-icon class="mr-2"><v-icon>mdi-eye-off-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Hide</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="report()" class="menu-item">
						<v-list-item-icon class="mr-2"><v-icon>mdi-flag-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Report</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer v-if="!smAndDown" />
			<v-chip color="primary" small v-if="reactions === 0" class="mx-1">Add First Reaction</v-chip>
			<v-btn icon @click="sendUpVote()"
				color="primary" class="mx-0"
				:value="upVote"
			>
				<v-icon>
					mdi-arrow-up-bold{{ (upVote) ? '' : '-outline' }}
				</v-icon>
			</v-btn>
			<div v-if="reactions > 0" class="grey--text text--darken-3 weight-500 px-1">{{reactions}}</div>
			<v-btn icon @click="sendDownVote()"
				color="grey darken-2" class="mx-0"
				:value="downVote"
			>
				<v-icon>
					mdi-arrow-down-bold{{ (downVote) ? '' : '-outline' }}
				</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import PublicationType from "@/mixin/PublicationType.js";
import Snack from "@/mixin/Snack.js";
import PostMixin from "@/mixin/PostMixin.js";
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

export default {
	name: "ItemActions",
	components: {
		ItemContent: () => import("@/components/feeds/ItemContent"),
		ItemLink: () => import("@/components/feeds/ItemLink"),
		ItemImages: () => import("@/components/feeds/ItemImages"),
		ItemHeader: () => import("@/components/feeds/ItemHeader"),
	},
	mixins: [PublicationType, Snack, PostMixin, RouteMixin, RefreshMeMixin],
	props: {
		publication: {type: Object, default: () => {}},
	},
	data: () => ({
		clipboardContent: null,
		shareMode: false,
		share: {
			title: null
		},
		reportMessage: null
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current"
		}),
		getLink() {
			return "something"
		},
		smAndDown() {
			return this.$vuetify.breakpoint.width < 600
		},
		reactions() {
			return this.publication.popularity + this.publication.dislikes
		},
		isMyPublication() {
			return this.$helper.ifCurrentUserIs(this.publication.created_by)
		},
		upVote() {
			return this.publication.up_vote
		},
		downVote() {
			return this.publication.down_vote
		},
		hiddenStatus() {
			return this.publication.hidden_status
		},
		bookmarkStatus() {
			return this.publication.bookmark_status
		}
	},
	methods: {
		copyLink() {
			navigator.clipboard.writeText(this.getLink)
				.then(() => {
					this.clipboardContent = true
					this.openSnack("Publication link copied to the clipboard", {color: "success"})
				})
		},
		sendActionRequest({id, payload, action, revoke = false}) {
			const url = this.$util.format(this.$urls.publication[action], id || this.publication.id)
			if (revoke) {
				this.$axios.delete(url).then(() => {
					this.$emit("init")
					this.refreshMe()
				})
			} else {
				this.post(url, payload).then(() => {
					if(this.success) {
						this.$emit("init")
						this.refreshMe()
					}
				})
			}
		},
		bookmark() {
			this.sendActionRequest({
				action: (this.bookmarkStatus) ? "bookmarkDetail" : "addBookmark",
				revoke: !!(this.bookmarkStatus),
				id: (this.bookmarkStatus) ? this.bookmarkStatus.id : null
			})
		},
		hide() {
			this.sendActionRequest({
				action: "addHiddenStatus"
			})
		},
		report() {
			this.sendActionRequest({
				action: "addReport",
				payload: {title: this.reportMessage}
			})
		},
		sendUpVote() {
			this.sendActionRequest({
				action: (this.upVote) ? "removeUpVote" : "addUpVote",
				revoke: !!(this.upVote),
				id: (this.upVote) ? this.upVote.id : null
			})
		},
		sendDownVote() {
			this.sendActionRequest({
				action: (this.downVote) ? "removeDownVote" : "addDownVote",
				revoke: !!(this.downVote),
				id: (this.downVote) ? this.downVote.id : null
			})
		},
		createShare() {
			this.sendActionRequest({
				action: "share",
				payload: {...this.share}
			})
		},
		routeToPublicationDetailComments() {
			this.toPublicationDetail(this.publication.id, "comments")
		}
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

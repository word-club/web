<template>
	<v-card class="rounded-t-0" color="grey lighten-4">
		<v-dialog v-model="shareMode" max-width="600">
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
					/>
				</v-card-text>
				<v-card-text>
					<v-card outlined light>
						<item-header :item="item" />
						<v-card-title>
							{{item.title}}
							<v-spacer />
							<v-chip v-if="getTypeString(item.type)" outlined>{{getTypeString(item.type)}}</v-chip>
						</v-card-title>
						<item-images v-if="item.type === 'media'" :item="item" />
						<item-link v-if="item.type === 'link'" :link="item.link"/>
						<item-content v-if="item.type ==='editor'" :content="JSON.parse(item.content)" />
						<v-card-text class="grey lighten-4 d-flex flex-wrap align-center pa-2">
							<div class="pa-1">27.3K Views</div>
							<v-icon>mdi-circle-small</v-icon>
							<div class="pa-1">25K Comments</div>
						</v-card-text>
					</v-card>
				</v-card-text>
				<v-card-actions>
					<v-btn block class="grey--text text--darken-3"
						color="primary lighten-4" @click="createShare">Share</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-scale-transition>
			<v-card-text v-if="commentMode">
				<comment-field :publication="item"/>
			</v-card-text>
		</v-scale-transition>
		<v-divider />
		<v-card-actions class="flex-wrap"
			:class="{
				'justify-space-evenly': smAndDown
			}"
		>
			<v-btn
				:small="smAndDown"
				:outlined="!commentMode"
				:depressed="commentMode"
				:dark="commentMode"
				class="item-action-btn"
				:color="(commentMode) ? 'primary' : 'grey darken-3'"
				@click="commentMode = !commentMode"
			>
				<v-icon left
					:color="commentMode ? 'white' : ''"
				>mdi-comment-outline</v-icon>
				Comments
			</v-btn>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn v-if="!smAndDown" outlined class="item-action-btn"
						v-bind="attrs"
						v-on="on"
					>
						<v-icon left>mdi-share-outline</v-icon>Share
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item class="menu-item"
						@click="copyLink"
					>
						<v-list-item-icon class="mr-2">
							<v-icon color="grey">mdi-link</v-icon>
						</v-list-item-icon>
						Copy Link
					</v-list-item>
					<v-divider />
					<v-list-item
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
					<v-btn fab small outlined color="grey darken-2" v-bind="attrs" v-on="on">
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
					<v-list-item @click="bookmark" class="menu-item">
						<v-list-item-icon class="mr-2"><v-icon>mdi-bookmark-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Bookmark</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="hide" class="menu-item">
						<v-list-item-icon class="mr-2"><v-icon>mdi-eye-off-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Hide</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item @click="report" class="menu-item">
						<v-list-item-icon class="mr-2"><v-icon>mdi-flag-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Report</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer v-if="!smAndDown" />
			<v-btn icon @click="upVote">
				<v-icon>
					mdi-arrow-up-bold-outline
				</v-icon>
			</v-btn>
			<div class="grey--text text--darken-3 weight-500 mx-1">33.4K</div>
			<v-btn icon @clikc="downVote">
				<v-icon>
					mdi-arrow-down-bold-outline
				</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import CommentField from "@/components/form/CommentField.vue";
import PublicationType from "@/mixin/PublicationType.js";
import ItemHeader from "@/components/feeds/ItemHeader.vue";
import ItemImages from "@/components/feeds/ItemImages.vue";
import ItemLink from "@/components/feeds/ItemLink.vue";
import ItemContent from "@/components/feeds/ItemContent.vue";
import Snack from "@/mixin/Snack.js";
import PostMixin from "@/mixin/PostMixin.js";
export default {
	name: "ItemActions",
	components: {ItemContent, ItemLink, ItemImages, ItemHeader, CommentField},
	mixins: [PublicationType, Snack, PostMixin],
	props: {item: {type: Object, default: () => {}}},
	data: () => ({
		commentMode: false,
		shareMode: false,
		share: {
			title: null
		}
	}),
	computed: {
		smAndDown() {
			return this.$vuetify.breakpoint.width < 600
		}
	},
	methods: {
		copyLink() {},
		bookmark() {},
		hide() {},
		report() {},
		upVote() {},
		downVote() {},
		createShare() {}
	}
}
</script>

<style scoped lang="scss">
.item-action-btn {
	margin-top: 2px;
	margin-right: 6px;
	margin-bottom: 2px;
	font-size: 15px;
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
</style>

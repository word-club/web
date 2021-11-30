<template>
	<v-card outlined :loading="loading"
		class="mx-auto" max-width="800"
	>
		<div v-if="publication">
			<item-header :item="publication" />
			<v-card-title class="pa-2 publication-title">
				{{ publication.title }}
			</v-card-title>
			<item-images v-if="publication.type === 'media'" :item="publication" />
			<item-link v-if="publication.type === 'link'" :link="publication.link"/>
			<item-content v-if="publication.type ==='editor'" :content="JSON.parse(publication.content)" />
			<item-actions :publication="publication" @init="refreshPublication"/>
			<v-divider />
			<v-card-text>
				<div v-if="!publication.comments.length" class="d-flex justify-end pb-2">
					<v-chip color="primary">Be the first to comment!</v-chip>
				</div>
				<comment-field :publication="publication"
					@init="fetchDetail(model)"
				/>
			</v-card-text>
			<div id="pub-comments">
				<v-card-text>
					<v-menu offset-y>
						<template #activator="{on, attrs}">
							<v-btn
								depressed small
								v-bind="attrs"
								v-on="on"
							>
								<span class="px10 font-weight-bold primary--text">
									Sort by: {{ commentSortBy.name }}
								</span>
								<v-icon small
									color="primary"
								>
									mdi-chevron-down
								</v-icon>
							</v-btn>
						</template>
						<v-list dense>
							<v-list-item
								v-for="(item, index) in commentSort"
								:key="index" @click="toSort(item)"
								class="weight-500 px13"
							>
								{{ item.name }}
							</v-list-item>
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
				<v-card-text class="py-0">
					<comment-item v-for="(comment, index) in commentList"
						:key="index"
						:index="index"
						:comment="comment"
						:count="commentList.length"
						@init="refreshPublication"
					/>
				</v-card-text>
			</div>
		</div>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters, mapMutations} from "vuex";
import FetchMixin from "@/mixin/FetchMixin.js";

export default {
	name: "Publication",
	components: {
		CommentField: () => import("@/components/form/CommentField.vue"),
		CommentItem: () => import("@/views/publication/CommentItem.vue"),
		ItemActions: () => import("@/components/feeds/ItemActions.vue"),
		ItemLink: () => import("@/components/feeds/ItemLink.vue"),
		ItemImages: () => import("@/components/feeds/ItemImages.vue"),
		ItemContent: () => import("@/components/feeds/ItemContent.vue"),
		ItemHeader: () => import("@/components/feeds/ItemHeader.vue")
	},
	mixins: [RouteMixin, FetchMixin],
	data: () => ({
		commentSortBy: {sort: "created_at", name: "Fresh"},
		commentSort: [
			{sort: "discussions", name: "Top (Suggested)"},
			{sort: "popularity", name: "Popular"},
			{sort: "created_at", name: "Fresh"}
		],
		myComment: "",
		model: "publication"
	}),
	computed: {
		...mapGetters({
			publication: "publication/inView",
			comments: "comment/list"
		}),
		commentList() {
			if (this.comments.count) return this.comments.results
			return this.publication.comments
		}
	},
	created() {
		this.refreshPublication()
			.then(() => {
				const view = this.$route.params.view
				if (view) {
					if (view === "comments") this.$vuetify.goTo("#pub-comments")
				}
			})
	},
	methods: {
		...mapMutations("publication", ["SET_TO_VIEW"]),
		refreshPublication() {
			return this.fetchDetail(this.model)
		},
		getPublicationComments(sortCommentBy="fresh") {
			const payload = {}
			payload["sort_by"] = this.$helper.parseSortString(sortCommentBy, true)
			console.log(payload)
			payload["publication"] = this.$route.params.id
			this.$store.dispatch("comment/filter", payload)
				.then(() => {
					console.log(this.comments)
				})
		},
		async toSort(item) {
			this.commentSortBy = item
			console.log(this.commentSortBy)
			await this.$store.dispatch("comment/filter", {
				publication: this.$route.params.id,
				sort_by: this.commentSortBy.sort
			})
			console.log(this.comments)

			// this.$router.push({name: "Publication", params: {sortCommentBy: item.sort}})
		}
	}
}
</script>

<style scoped>
.publication-title {
	font-size: 32px; line-height: 32px;
}
</style>

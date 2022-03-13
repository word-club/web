<template>
	<div class="py-4">
		<v-card outlined
			class="mx-auto"
			max-width="800"
		>
			<v-scale-transition>
				<div v-if="isLoading">
					<v-progress-linear rounded indeterminate color="primary" height="6" />
					<div class="py-2">
						<v-card>
							<v-card-text>
								<v-card-title>
									We're fetching publication for you. Just a moment...
								</v-card-title>
							</v-card-text>
						</v-card>
					</div>
				</div>

				<div v-else>
					<v-fab-transition>
						<v-card v-if="publication"
							class="publication-detail"
							flat color="primary"
							:loading="loading"
						>
							<item-header :item="publication" />
							<v-card-title class="pa-2 publication-title">
								{{ publication.title }}
							</v-card-title>
							<item-images v-if="publication.type === 'media'" :item="publication" />
							<item-link v-if="publication.type === 'link'" :link="publication.link"/>
							<item-content v-if="publication.type ==='editor'" :content="editorContent" />
							<item-actions :item="publication" @init="refreshPublication"/>
							<v-divider />
							<v-card-text>
								<div v-if="!publication.comments.length" class="d-flex justify-end pb-2">
									<v-chip color="primary">Be the first to comment!</v-chip>
								</div>
								<comment-field
									:target="publication"
									@init="fetchDetail(model)"
								/>
							</v-card-text>
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
							<v-card-text class="pt-0 pb-6 comment-list">
								<comment-item v-for="(comment, index) in commentList"
									:key="index"
									:index="index"
									:comment="comment"
									:count="commentList.length"
									@init="refreshPublication"
								/>
							</v-card-text>
						</v-card>
						<div v-else>
							<v-card-text>Publication Not Found.</v-card-text>
						</div>
					</v-fab-transition>
				</div>
			</v-scale-transition>
		</v-card>
	</div>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters, mapMutations} from "vuex";
import FetchMixin from "@/mixin/FetchMixin.js";
import EditorContentMixin from "@/mixin/EditorContentMixin.js";

export default {
	name: "PublicationDetail",
	components: {
		CommentField: () => import("@/components/form/CommentField"),
		CommentItem: () => import("@/views/publication/CommentItem"),
		ItemActions: () => import("@/components/feeds/ItemActions"),
		ItemLink: () => import("@/components/feeds/ItemLink"),
		ItemImages: () => import("@/components/feeds/ItemImages"),
		ItemContent: () => import("@/components/feeds/ItemContent"),
		ItemHeader: () => import("@/components/feeds/ItemHeader")
	},
	mixins: [RouteMixin, FetchMixin, EditorContentMixin],
	data: () => ({
		isLoading: true,
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
		}),
		commentList() {
			if (!this.publication) return []
			return this.publication.comments
		}
	},
	created() {
		this.refreshPublication()
			.then(() => {
				// handle scroll to comment
				const view = this.$route.params.view
				this.isLoading = false
				if (view === "comments") {
					setTimeout(() => {
						const commentList = document.querySelector(".comment-list")
						commentList.scrollIntoView({ behavior: "smooth" })
					}, 1000)
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
			payload["publication"] = this.$route.params.id
			this.$store.dispatch("comment/filter", payload)
				.then(() => {
					// TODO: send comment filter request for a publication
				})
		},
		async toSort(item) {
			this.commentSortBy = item
			await this.$store.dispatch("comment/filter", {
				publication: this.$route.params.id,
				sort_by: this.commentSortBy.sort
			})
			// TODO: push filter route
			// this.$router.push({name: "Publication", params: {sortCommentBy: item.sort}})
		}
	}
}
</script>

<style scoped>
.publication-detail {
	background-color: transparent !important;
}
.publication-title {
	font-size: 32px; line-height: 32px;
}
</style>

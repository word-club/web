<template>
	<div class="site-admin">
		<div class="site-admin--page-title">
			<h2>Site Administration</h2>
		</div>
		<v-card flat max-width="800">
			<v-card-text class="site-admin--tags">
				<h3>Site Hashtags</h3>
				<v-progress-linear v-if="fetchingTags" color="primary" height="6" indeterminate/>
				<v-divider />
				<div class="py-2">
					<div class="site-admin--tags--available">
						<v-fade-transition>
							<div
								class="site-admin--tags--available--chips"
								v-if="hashtags.count"
							>
								<v-chip v-for="tag in hashtags.results"
									:key="tag.id"
									class="site-admin--tags--available--chips--item"
								>
									# {{ tag.tag }}
									<v-btn
										small right icon
										class="site-admin--tags--available--chips--item--remove"
										@click="deleteHashtag(tag)"
									>
										<v-icon color="error" small>
											mdi-close
										</v-icon>
									</v-btn>
								</v-chip>
							</div>
							<div v-else>
								<p>No hashtags registered yet.</p>
							</div>
						</v-fade-transition>
					</div>
					<div class="site-admin--tags--input">
						<text-field
							v-model="tag"
							label="Hashtags"
							name="tag"
							icon="mdi-pound"
							:errors="formErrors"
							@keyup="handleKeyUp"
						/>
						<v-scale-transition>
							<div class="px-2"
								v-if="tag"
							>
								<v-btn color="primary"
									@click="postHashtag()"
								>
									<v-icon>mdi-plus-circle</v-icon>
								</v-btn>
							</div>
						</v-scale-transition>
					</div>
				</div>
			</v-card-text>
			<v-card-text class="site-admin--thresholds">
				<h3>Thresholds</h3>
				<v-progress-linear v-if="loadingSiteAdmin" color="primary" height="6" indeterminate />
				<v-divider />
				<div class="site-admin--thresholds--item">
					<h4>Popularity</h4>
					<div class="context">
						For public users, only publications and comments with reactions greater than this limit will be shown.
					</div>
					<text-field
						type="number" icon="mdi-account"
						v-model="administration.popularity_threshold"
						label="Popularity Threshold"
						name="popularity_threshold"
						:errors="formErrors"
						@change="postSiteAdminData()"
					/>
				</div>
				<div class="site-admin--thresholds--item">
					<h4>Publication Update</h4>
					<div class="context">
						Number of days after which authors will not be able to edit a publication
					</div>
					<text-field
						type="number" icon="mdi-post"
						v-model="administration.publication_update_limit"
						label="Publication update limit"
						name="publication_update_limit"
						:errors="formErrors"
						@change="postSiteAdminData()"
					/>
				</div>
				<div class="site-admin--thresholds--item">
					<h4>Comment Update</h4>
					<div class="context">
						Number of days after which authors will not be able to edit a comment
					</div>
					<text-field
						type="number" icon="mdi-comment"
						v-model="administration.comment_update_limit"
						name="comment_update_limit"
						label="Comment update limit"
						:errors="formErrors"
						@change="postSiteAdminData()"
					/>
				</div>
				<div class="site-admin--thresholds--item">
					<h4>Top Count</h4>
					<div class="context">
						Number of top items to show in the homepage
					</div>
					<text-field
						type="number"
						v-model="administration.top_count"
						label="Top count"
						name="top_count"
						icon="mdi-arrow-up"
						:errors="formErrors"
						@change="postSiteAdminData()"
					/>
				</div>
			</v-card-text>
		</v-card>
		<confirm-dialog @refresh="fetchTags" />
	</div>
</template>

<script>
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "SiteAdmin",
	mixins: [Snack, PostMixin, ConfirmDialogMixin],
	data: () => ({
		tag: null,
		fetchingTags: true,
		loadingSiteAdmin: true,
		administration: {
			publication_update_limit: null,
			popularity_threshold: null,
			comment_update_limit: null,
			top_count: null,
		},
		hashtags: {
			count: 0,
			results: []
		},
		siteAdmin: null
	}),
	computed: {
		tagListUrl() {
			return this.$urls.hashtag.list
		},
		siteAdminListUrl() {
			return this.$urls.administration.list
		}
	},
	created() {
		this.fetchTags()
		this.getSiteAdminData()
	},
	methods: {
		getSiteAdminData() {
			this.loadingSiteAdmin = true
			this.$axios.get(this.siteAdminListUrl)
				.then(res => {
					this.loadingSiteAdmin = false
					this.siteAdmin = res
					this.administration = {
						...res
					}
				})
		},
		handleKeyUp(e) {
			if (e.keyCode === 13 && this.tag) this.postHashtag()
		},
		fetchTags() {
			this.fetchingTags = true
			this.$axios.get(this.tagListUrl)
				.then(response => {
					this.fetchingTags = false;
					this.hashtags = response;
				})
				.catch(() => {
					this.openSnack("Failed to fetch hashtags.")
				});
		},
		postHashtag() {
			this.post(this.tagListUrl, {
				tag: this.tag,
			}).then(() => {
				if (this.success) {
					this.tag = null
					this.fetchTags();
				}
			})
		},
		postSiteAdminData() {
			this.loadingSiteAdmin = true
			this.post(this.siteAdminListUrl, {
				...this.administration
			})
				.then(() => {
					if(this.success) this.openSnack("Site administration updated successfully.")
				})
				.finally(() => {
					this.loadingSiteAdmin = false
				})
		},
		deleteHashtag(tag) {
			const url = this.$util.format(
				this.$urls.hashtag.detail,
				tag.id
			)
			this.openConfirmDialog(
				`Are you sure you want to remove <code># ${tag.tag}</code> hastag?`,
				"DELETE",
				url,
				["refresh"],
				"Hashtag removed successfully.",
				"Sorry, something went wrong."
			)
		}
	}
}
</script>

<style scoped lang="scss">
.site-admin {
	padding: 8px;
	&--page-title {
		padding: 0 4px 4px 4px;
	}
	&--tags {
		&--available {
			padding-bottom: 8px;
			&--chips {
				display: flex;
				flex-wrap: wrap;
				&--item {
					margin: 2px;
					&--remove {
						transition: all .2s;
						opacity: 0;
						width: 0 !important;
						margin-left: 4px;
					}
					&:hover {
						.v-btn {
							opacity: 1;
							width: 28px !important;
						}
					}
				}
			}
		}
		&--input {
			display: flex;
		}
	}
	&--thresholds {
		&--item {
			padding: 10px 0;
			.context {
				padding-bottom: 8px;
			}
		}
	}
}
</style>

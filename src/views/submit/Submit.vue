<template>
	<v-card class="mx-auto transparent"
		max-width="750"
		flat
	>
		<v-card-text />
		<v-card-title class="px-0 pb-3">
			<div v-if="editMode">Edit Publication</div>
			<div v-else-if="draftMode">Edit Draft</div>
			<div v-else>Create post</div>
			<v-spacer />
			<v-btn text rounded
				v-if="inProgress"
				:color="theme.color"
				class="weight-700"
				@click="startNew"
			>
				Start new
			</v-btn>
			<v-btn
				v-if="drafts.count > 0"
				text rounded
				:color="theme.color"
				@click="$store.dispatch('setDraftState', true)"
			>
				<span class="px14">DRAFTS</span>
				<span class="ma-1 pa-1 white--text rounded"
					:class="theme.color"
				>
					{{ drafts.count }}
				</span>
			</v-btn>
			<drafts-dialog @initDraft="initDraft" @startNew="startNew" />
		</v-card-title>
		<v-divider />
		<v-row class="ma-0 pa-0">
			<v-col cols="6"
				class="px-0"
			>
				<community-select
					v-model="payload.community"
					:errors="formErrors"
					:color="theme.color"
					:loading="communityLoading"
					:items="subscribedCommunities"
					@change="onChangeCommunity"
				/>
			</v-col>
			<v-col cols="12"
				class="pa-0"
			>
				<v-card
					elevation="0"
					color="grey lighten-4"
					width="100%"
					class="pa-0"
				>
					<submit-tab
						:theme="theme"
						:payload="payload"
						@setType="setTypeBeforeSave" />
					<v-card flat
						class="rounded-t-0"
					>
						<v-row class="ma-0 pa-0 pt-1">
							<v-fab-transition>
								<v-col
									v-if="payload.community && communityHashtags.length"
									cols="12"
								>
									<v-autocomplete
										outlined :items="communityHashtags"
										:color="theme.color"
										label="Community Hashtags"
										v-model="payload.hash_tags"
										placeholder="Start typing"
										hide-details="auto"
										item-text="name"
										return-object multiple
										prepend-inner-icon="mdi-pound-box"
									>
										<template #selection="data">
											<v-chip outlined
												v-bind="data.attrs"
												:input-value="data.selected"
												@click="data.select"
												:color="theme.color"
											>
												<v-icon>mdi-pound</v-icon>
												{{data.item.name}}
											</v-chip>
										</template>
									</v-autocomplete>
								</v-col>
							</v-fab-transition>
							<v-col cols="12">
								<text-field
									v-model="payload.title"
									label="Title"
									name="title"
									counter="128" :dense="false"
									icon="mdi-format-title"
									@change="postPublication"
									:errors="formErrors"
									:color="theme.color"
								/>
							</v-col>
							<v-fade-transition>
								<v-col
									v-if="payload.type === 'editor'"
									cols="12"
									class="pa-0 px-3"
								>
									<v-card flat outlined>
										<v-card-text class="pa-0">
											<div id="editor-js" class="pa-2 editor"/>
										</v-card-text>
									</v-card>
								</v-col>
								<v-col v-else-if="payload.type === 'media'"
									cols="12" class="pt-0"
									@dragover.prevent @drop.prevent
								>
									<image-list />
									<submit-media :theme="theme" :payload="payload" @refresh="refreshInProgress()" />
								</v-col>
								<v-col
									v-else-if="payload.type === 'link'"
									cols="12"
								>

									<link-preview :theme="theme" />
									<upload-link
										:payload="payload"
										:theme="theme"
										@refresh="refreshInProgress()"
									/>
								</v-col>
								<v-col
									v-else
								>
									<v-card flat
										class="primary-border"
									>
										<v-card-title>Poll Submit Center</v-card-title>
									</v-card>
								</v-col>
							</v-fade-transition>
							<v-col cols="12">
								<v-tooltip bottom
									v-for="(tag, index) in tagItems"
									:key="index"
								>
									<template #activator="{on, attrs}">
										<v-chip class="ma-1 rounded-xl px-4"
											@click="pushTag(tag.name)"
											:color="tagArray.includes(tag.name) ? tag.color: 'grey darken-2'"
											:outlined="!tagArray.includes(tag.name)"
											v-bind="attrs"
											v-on="on" dark
											style="border: 2px solid"
										>
											<v-icon
												:color="tagArray.includes(tag.name) ? 'white': 'grey darken-1'"
												class="pr-1"
											>
												{{ tagArray.includes(tag.name) ? 'mdi-check' : 'mdi-plus' }}
											</v-icon>
											{{ tag.name }}
										</v-chip>
									</template>
									{{tag.tooltip}}
								</v-tooltip>
							</v-col>
						</v-row>
						<v-divider class="mx-2" />
						<v-card-actions class="flex-wrap">
							<v-spacer />
							<v-btn v-if="editMode"
								rounded dark depressed
								:color="theme.color"
								class="weight-600 ma-1"
								@click="saveAsDraft(false)"
							>
								Save
							</v-btn>
							<v-btn rounded v-if="!editMode"
								depressed color="grey lighten-2 ma-1"
								class="weight-600 grey--text text--darken-3"
								@click="saveAsDraft"
							>
								Save as Draft
							</v-btn>
							<v-btn rounded v-if="!editMode"
								dark depressed
								:color="theme.color"
								class="weight-600 ma-1"
								@click="publish"
							>
								Publish
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-card>
			</v-col>
		</v-row>
		<v-card-text />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";
import EditorMixin from "@/mixin/EditorMixin.js";
import CheckRequiredMixin from "@/mixin/CheckRequiredMixin.js";

export default {
	name: "Submit",
	components: {
		SubmitTab: () => import("@/views/submit/components/SubmitTab"),
		DraftsDialog: () => import("@/views/submit/components/DraftsDialog"),
		ImageList: () => import("@/views/submit/components/ImageList"),
		SubmitMedia: () => import("@/views/submit/components/SubmitMedia"),
		LinkPreview: () => import("@/views/submit/components/LinkPreview"),
		UploadLink: () => import("@/views/submit/components/UploadLink"),
	},
	mixins: [PostMixin, PatchMixin, Snack, EditorMixin, CheckRequiredMixin],
	data: () => ({
		tab: null,
		tagArray: [],
		payload: {
			type: "editor",
			community: null,
			title: null,
			linkUrl: null,
			content: null,
			hash_tags: []
		},
		tagItems: [
			{name: "OC", tooltip: "Post as your original content", color: "primary"},
			{name: "SPOILER", tooltip: "Add post as spoiler alert", color: "red"},
			{name: "WARNING", tooltip: "Add post as a warning", color: "orange"}
		],
		subscribedCommunities: [],
		communityLoading: true,
		theme: {
			color: "primary"
		},
		draftMode: false,
		editMode: false,
	}),
	created() {
		this.fetchDrafts()
		this.fetchSubscribedCommunities()
		const publicationToEdit = this.$route.params.toEdit
		if (publicationToEdit) {
			this.$store.dispatch("publication/setInProgress", {id: publicationToEdit})
			this.refreshInProgress(true)
		} else {
			this.initEditor(null)
		}
	},
	computed: {
		...mapGetters({
			currentUser: "user/current",
			drafts: "publication/draftList",
			inProgress: "publication/inProgress"
		}),
		communityHashtags() {
			if (!this.payload.community) return []
			return this.payload.community.hashtags
		}
	},
	methods: {
		initDraft() {
			this.initSubmit()
			this.draftMode = true
		},
		initSubmit() {
			this.payload.title = this.inProgress.title
			if (this.inProgress.community) {
				this.setTheme()
				this.setCommunity()
				this.setHashtags()
			}
			this.setTags()
			this.setType()
		},
		setTypeBeforeSave(type) {
			this.payload.type = type
			if(type === "editor") this.initEditor(this.payload)
		},
		setTheme() {
			this.theme = this.inProgress.community.theme
		},
		fetchSubscribedCommunities() {
			this.communityLoading = true
			this.$axios.get(this.$urls.community.subscriptionFilter)
				.then(res => {
					this.subscribedCommunities = res.results
					this.communityLoading = false
				})
		},
		refreshInProgress(editMode = this.editMode, draftMode = this.draftMode) {
			this.$axios.get(this.$util.format(this.$urls.publication.detail, this.inProgress.id))
				.then(res => {
					this.$store.dispatch("publication/setInProgress", res)
					this.initSubmit()
					this.editMode = editMode
					this.draftMode = draftMode
				})
		},
		resetSubmitForm() {
			this.$store.dispatch("publication/removeDraftItem", this.inProgress.id)
			this.startNew()
		},
		publish() {
			this.saveAsDraft()
				.then(() => {
					const url = this.$util.format(this.$urls.publication.publish, this.inProgress.id)
					this.post(url).then(() => {
						if(this.postInstance) {
							this.resetSubmitForm()
							this.openSuccessSnack("Publication published successfully.")
						} else {
							this.openSnack("Publication cannot be published.")
						}
					})
				})
		},
		fetchDrafts() {
			const url = this.$urls.publication.list
			this.$axios.getWithPayload(url, {is_published: false, created_by: this.currentUser.id})
				.then((res) => {
					this.$store.dispatch("publication/setDrafts", res)
				})
		},
		async saveAsDraft(isDraft = true) {
			if(!this.checkRequired(["title"])) {
				const payload = {}

				const url = this.$util.format(this.$urls.publication.detail, this.inProgress.id)

				payload["title"] = this.payload.title

				// prepare tags for payload
				payload["tags"] = this.getSelectedTagsString()
				if (this.inProgress.type === "editor") {
					const content = await this.editor.save()
					payload["content"] = JSON.stringify(content)
				}
				// prepare community for payload
				if (this.payload.community) {
					payload["community"] = this.payload.community.id
				}
				// prepare hashtags for payload
				if (this.payload.hash_tags) {
					payload["hash_tags"] = []
					this.payload.hash_tags.forEach(tag => {
						payload.hash_tags.push(tag.tag)
					})
				}
				// send publication patch request
				await this.patch(url, payload)
				if (!this.patchInstance) {
					this.formErrors = {...this.patchErrors}
				} else {
					await this.$store.dispatch("publication/setInProgress", this.patchInstance)
					this.openSuccessSnack(`${isDraft ? "Draft" : "Publication"} saved successfully.`)
				}
			}
		},
		postPublication() {
			if(!this.inProgress) {
				if(!this.checkRequired(["title"])) {
					const url = this.$urls.publication.add
					this.post(url, {
						title: this.payload.title,
						type: this.payload.type,
						community: (this.payload.community) ? this.payload.community.id : null
					}).then(() => {
						if (this.postInstance) {
							this.$store.dispatch("publication/setInProgress", this.postInstance)
							this.fetchDrafts()
							if (this.payload.type === "editor") this.initEditor(this.postInstance)
						}
					})
				}
			}
		},
		getSelectedTagsString() {
			if (this.tagArray.length === 0) return null
			else if (this.tagArray.length === 1) return this.tagArray[0]
			else return this.tagArray.join(",")
		},
		pushTag(tag) {
			if (this.tagArray.includes(tag)) {
				const index = this.tagArray.indexOf(tag)
				this.tagArray.splice(index, 1)
			} else {
				this.tagArray.push(tag)
			}
		},
		startNew() {
			this.$store.dispatch("publication/setInProgress", null)
			this.initEditor(null)
			this.tagArray = []
			this.payload = {title: null, type: "editor"}
		},
		onChangeCommunity(e) {
			if(e) this.theme = e.theme
			else this.theme = {color: "primary"}
		},
		setCommunity() {
			this.payload.community = this.subscribedCommunities
				.find(item => item.id === this.inProgress.community.id)
		},
		setHashtags() {
			if (this.inProgress.hashtags) {
				this.payload.hash_tags = []
				this.inProgress.hashtags.forEach(tag => {
					this.payload.hash_tags
						.push({
							id: tag.id,
							name: tag.hashtag.tag,
							tag: tag.hashtag.id
						})
				})
			}
		},
		setTags() {
			if (this.inProgress.tags) {
				if (this.inProgress.tags.includes(","))
					this.tagArray = this.payload.tags.split(",")
				else this.tagArray = [this.inProgress.tags]
			} else this.tagArray = []
		},
		setType() {
			this.payload.type = this.inProgress.type
			if (this.payload.type === "editor")
				this.initEditor(this.inProgress)
		}
	}
}
</script>

<style scoped lang="scss">
.clear-btn {
	position: absolute;
	right: 4px;
	top: 0;
	z-index: 1;
}
.post-btn {
	position: absolute;
	right: 30px;
	top: 2px;
	z-index: 1;
}
</style>
<style lang="scss">
.editor {
	.codex-editor {
		.codex-editor__redactor {
			padding-bottom: 100px !important;
			min-height: 300px;
		}
		.ce-toolbar {
			.ce-toolbar__content {
				.ce-toolbar__plus {
					left: 0
				}
				.ce-toolbox {
					left: 30px;
				}
				.ce-toolbar__actions {
					right: 0;
				}
			}
		}
	}
}
</style>

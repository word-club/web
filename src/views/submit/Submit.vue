<template>
	<v-card
		max-width="750" flat tile
		class="mx-auto transparent pa-4"
	>
		<v-card-title class="py-6 px-0">
			<h3 v-if="editMode">Edit Publication</h3>
			<h3 v-else-if="draftMode">Edit Draft</h3>
			<h3 v-else>Create a new post</h3>
			<v-spacer/>
			<v-btn text rounded
				v-if="inProgress"
				:color="theme.color"
				class="weight-700"
				@click="startNew"
			>
				Start new
			</v-btn>
			<v-btn
				v-if="myDrafts.length > 0"
				text rounded
				:color="theme.color"
				@click="$store.dispatch('setDraftState', true)"
			>
				<span class="px14">DRAFTS</span>
				<span class="ma-1 pa-1 white--text rounded"
					:class="theme.color"
				>
					{{ myDrafts.length }}
				</span>
			</v-btn>
		</v-card-title>
		<v-divider/>
		<v-row class="ma-0 pa-0">
			<community-select
				v-model="payload.community"
				:errors="formErrors"
				:color="theme.color"
				:loading="communityLoading"
				:items="subscribedCommunities"
				@change="onChangeCommunity"
			/>
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
						@setType="setTypeBeforeSave"
					/>
					<v-card flat
						class="rounded-t-0"
					>
						<v-row class="ma-0 pa-0 pt-1">
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
									v-if="payload.type === $constants.PUBLICATION_TYPE.EDITOR"
									cols="12"
									class="pa-0 px-3"
								>
									<v-card flat outlined>
										<v-card-text class="pa-0">
											<div id="editor-js" class="pa-2 editor"/>
										</v-card-text>
									</v-card>
								</v-col>
								<v-col v-else-if="payload.type === $constants.PUBLICATION_TYPE.MEDIA"
									cols="12" class="pt-0"
									@dragover.prevent @drop.prevent
								>
									<image-list @refresh="refreshInProgress()" />
									<submit-media :theme="theme" :payload="payload" @refresh="refreshInProgress()"/>
								</v-col>
								<v-col
									v-else-if="payload.type === $constants.PUBLICATION_TYPE.LINK"
									cols="12"
								>

									<link-preview @refresh="refreshInProgress()" :theme="theme"/>
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
							<v-fab-transition>
								<v-col
									v-if="communityHashtags.length"
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
												{{ data.item.name }}
											</v-chip>
										</template>
									</v-autocomplete>
								</v-col>
							</v-fab-transition>
						</v-row>
						<v-divider class="mx-3"/>
						<v-card-actions class="flex-wrap">
							<v-spacer/>
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
								@click="saveAsDraft()"
								:disabled="!payload.title"
							>
								Save as Draft
							</v-btn>
							<v-btn rounded
								v-if="!editMode"
								depressed
								:dark="!!inProgress"
								:color="theme.color"
								class="weight-600 ma-1"
								:disabled="!inProgress"
								@click="publishPublication()"
							>
								Publish
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-card>
			</v-col>
		</v-row>
		<v-card-text/>
		<drafts-dialog
			@initDraft="initDraft()"
			@startNew="startNew()"
			@refreshMe="refreshMe()"
		/>
		<init-community-state @init="clearCommunityInit()" />
		<confirm-dialog @refreshMe="refreshMe()" @startNew="startNew()" />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";
import EditorMixin from "@/mixin/EditorMixin.js";
import CheckRequiredMixin from "@/mixin/CheckRequiredMixin.js";
import FetchMixin from "@/mixin/FetchMixin.js";
import CommunitySelect from "@/views/submit/mixins/CommunitySelect.js";
import DraftMixin from "@/views/submit/mixins/DraftMixin.js";
import TagPublication from "@/views/submit/mixins/TagPublication.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

export default {
	name: "Submit",
	components: {
		InitCommunityState: () => import("@/views/submit/components/InitCommunityState"),
		SubmitTab: () => import("@/views/submit/components/SubmitTab"),
		DraftsDialog: () => import("@/views/submit/components/DraftsDialog"),
		ImageList: () => import("@/views/submit/components/ImageList"),
		SubmitMedia: () => import("@/views/submit/components/SubmitMedia"),
		LinkPreview: () => import("@/views/submit/components/LinkPreview"),
		UploadLink: () => import("@/views/submit/components/UploadLink"),
	},
	mixins: [
		PostMixin,
		PatchMixin,
		Snack,
		EditorMixin,
		CheckRequiredMixin,
		FetchMixin,
		CommunitySelect,
		DraftMixin,
		TagPublication,
		RefreshMeMixin,
	],
	data: () => ({
		tab: null,
		theme: {
			color: "primary"
		},
		draftMode: false,
		editMode: false,
	}),
	created() {
		this.validateRouteParams()
		this.processPublicationEdit() // 1st priority
		this.processInitWithCommunity() // 2nd priority
		if (!this.inProgress) {
			this.initEditor(null)
		}
	},
	computed: {
		...mapGetters({
			currentUser: "user/current",
			inProgress: "publication/inProgress"
		}),
	},
	methods: {
		validateRouteParams() {
			const type = this.$route.params.type
			if (["editor", "link", "media", "poll"].includes(type)) {
				this.payload.type = type
			} else this.$router.push({
				name: "Submit", params: {
					...this.$route.params,
					type: this.$constants.PUBLICATION_TYPE.EDITOR
				}
			})
		},
		initSubmit() {
			this.payload.title = this.inProgress.title
			if (this.inProgress.community) {
				this.setTheme()
				this.setCommunity()
			}
			this.setType()
		},
		setTypeBeforeSave(type) {
			this.payload.type = type
			if (type === this.$constants.PUBLICATION_TYPE.EDITOR)
				this.initEditor(this.payload)
		},
		setTheme() {
			this.theme = this.inProgress.community.theme
		},
		refreshInProgress(editMode = this.editMode, draftMode = this.draftMode) {
			this.$axios.get(this.$util.format(this.$urls.publication.detail, this.inProgress.id))
				.then(res => {
					this.$store.dispatch("publication/setInProgress", res)
					this.initSubmit()
					this.editMode = editMode
					this.draftMode = draftMode
					this.refreshMe()
				})
		},
		setType() {
			this.payload.type = this.inProgress.type
			if (this.$route.params.type !== this.inProgress.type)
				this.$router.push({params: {type: this.inProgress.type}})
			if (this.payload.type === this.$constants.PUBLICATION_TYPE.EDITOR)
				this.initEditor(this.inProgress)
		},
		processPublicationEdit() {
			const publicationToEdit = this.$route.params.toEdit
			if (publicationToEdit) {
				this.$store.dispatch("publication/setInProgress", {id: publicationToEdit})
				this.refreshInProgress(true)
			} else {
				this.$store.dispatch("publication/setInProgress", null)
			}
		},
		startNew() {
			this.$store.dispatch("setDraftState", false)
			this.$store.dispatch("publication/setInProgress", null)
			this.initEditor(null)
			this.payload = {title: null, type: this.$constants.PUBLICATION_TYPE.EDITOR}
		},
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

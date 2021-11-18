<template>
	<v-card class="mx-auto transparent"
		max-width="750"
		flat
	>
		<v-card-text />
		<v-card-title class="px-0 pb-3">
			<div>Create post</div>
			<v-spacer />
			<v-btn text rounded
				v-if="inProgress"
				:color="theme"
				class="weight-700"
				@click="startNew"
			>
				Start new
			</v-btn>
			<v-btn
				v-if="drafts.count > 0"
				text rounded
				color="primary"
				@click="draftDialog = true"
			>
				<span class="px14">DRAFTS</span>
				<span class="ma-1 pa-1 primary white--text rounded">{{ drafts.count }}</span>
			</v-btn>
			<v-dialog v-model="draftDialog"
				max-width="600"
			>
				<v-card>
					<v-card-title>Publication Drafts</v-card-title>
					<v-card-text>
						<v-list v-if="drafts.results">
							<v-list-item v-for="(draft, index) in drafts.results"
								:key="draft.id"
							>
								<v-list-item-avatar color="error lighten-5"
									class="d-flex align-center justify-center"
								>
									<v-btn color="error"
										@click="deleteDraft(draft.id, index)" icon>
										<v-icon>mdi-delete</v-icon>
									</v-btn>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>{{draft.title}}</v-list-item-title>
									<v-list-item-subtitle>
										<span><b>Type:</b> {{draft.type.replace(/^\w/, (c) => c.toUpperCase())}}</span>
										<v-icon>mdi-circle-small</v-icon>
										<span><b>In behalf of:</b> {{(draft.community) ? draft.community.name : 'Yourself'}}</span>
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<span><b>Last updated:</b> {{$moment(draft.timestamp).fromNow()}}</span>
									</v-list-item-subtitle>
								</v-list-item-content>
								<v-list-item-action>
									<v-btn rounded :color="theme"
										@click="startEditingDraft(draft)"
										:disabled="(inProgress && inProgress.id === draft.id)"
									>
										{{	inProgress
											? inProgress.id === draft.id
												? 'In Progress'
												:'Start Editing'
											: 'Start Editing'
										}}
									</v-btn>
								</v-list-item-action>
							</v-list-item>
						</v-list>
						<div v-else>No drafts saved yet.</div>
					</v-card-text>
				</v-card>
			</v-dialog>
		</v-card-title>
		<v-divider />
		<v-row class="ma-0 pa-0">
			<v-col cols="6"
				class="px-0"
			>
				<community-select
					v-model="payload.community"
					:errors="formErrors"
					:color="theme"
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
					<div class="submit-tab">
						<div v-for="(item, index) in tabItems"
							:key="index"
							class="submit-tab-item"
							:class="{
								'submit-tab-item-active': item.active,
								'submit-tab-item-disabled': inProgress ? !(inProgress.type === item.type): item.disabled
							}"
							@click="setActiveTab(item)"
						>
							<v-icon class="submit-tab-item-icon"
								:color="item.active ? theme: ''"
							>
								{{ item.icon }}
							</v-icon>
							<div class="submit-tab-item-title"
								v-if="$vuetify.breakpoint.width > 300"
								:class="item.active ? `${theme}--text`: ''"
							>
								{{ item.title }}
							</div>
							<v-scale-transition>
								<v-card
									flat :color="theme" v-if="item.active"
									class="submit-tab-item-active-line rounded-b-0 rounded-tl-xl rounded-tr-xl"
								/>
							</v-scale-transition>
						</div>
					</div>
					<v-card flat
						class="rounded-t-0"
					>
						<v-row class="ma-0 pa-0">
							<v-col cols="12">
								<text-field
									v-model="payload.title"
									label="Title"
									name="title"
									counter="128"
									icon="mdi-format-title"
									@change="postPublication"
									:errors="formErrors"
									:color="theme"
								/>
							</v-col>
							<v-fade-transition>
								<v-col
									v-if="activeTabItem.title === 'Post'"
									cols="12"
									class="pa-0 px-3"
								>
									<v-card flat outlined>
										<v-card-text class="pa-0">
											<div id="editor-js" class="pa-2 editor"/>
										</v-card-text>
									</v-card>
								</v-col>
								<v-col v-else-if="activeTabItem.title === 'Images/Videos'"
									cols="12"
									@dragover.prevent @drop.prevent
								>
									<v-scale-transition>
										<v-col v-if="inProgress && inProgress['images']"
											cols="12"
										>
											<v-row class="ma-0 pa-0">
												<v-col cols="4"
													v-for="img in inProgress.images"
													:key="img.id"
												>
													<card-img max-width="400" :src="img.image">
														<v-btn icon color="error"
															@click="deleteImage(img.id)"
														>
															<v-icon>mdi-delete</v-icon>
														</v-btn>
													</card-img>
												</v-col>
											</v-row>
										</v-col>
									</v-scale-transition>
									<v-scale-transition>
										<v-col v-if="files.length"
											cols="12"
										>
											<v-row
												class="ma-0 pa-0"
											>
												<v-col v-for="(item, index) in fileUrls"
													:key="index"
													cols="4"
												>
													<card-img max-width="400"
														contain
														height="150"
														:src="item"
													>
														<div class="d-flex">
															<v-btn class="clear-btn"
																icon color="error"
																@click="removeFile(item, index)"
															>
																<v-icon>mdi-close-circle</v-icon>
															</v-btn>
															<v-btn class="post-btn"
																icon color="success"
																@click="postImage(item, index)"
																:disabled="!payload.title"
															>
																<v-icon>mdi-check-circle</v-icon>
															</v-btn>
														</div>
													</card-img>
												</v-col>
											</v-row>
										</v-col>
									</v-scale-transition>
									<v-card
										:min-height="files.length ? 100 : 200" flat
										class="d-flex align-center justify-center flex-wrap"
										:class="theme+'-border'"
										@drop="dragFile"
									>
										<input
											v-show="false"
											id="file-input"
											ref="fileInput"
											class="file-input"
											type="file"
											multiple
											accept="image/*,.webm,.mp4,.mpeg,.flv,.mov,.MOV"
											@change="fileInputChanged"
										>
										<div class="weight-500 primary--text text-center">
											Drag and drop images or
										</div>
										<div class="px-2">
											<v-btn outlined
												color="primary"
												rounded class="weight-700"
												@click="$refs.fileInput.click()"
											>
												Upload
											</v-btn>
										</div>
									</v-card>
								</v-col>
								<v-col
									v-else-if="activeTabItem.title === 'Link'"
									cols="12"
								>
									<v-card v-if="inProgress && inProgress.link"
										class="mb-6"
									>
										<v-card-text>
											<v-list-item>
												<v-list-item-avatar :color="theme">
													<v-img v-if="inProgress.link.image" :src="inProgress.link.image" />
													<span v-else class="white--text px22 mb-1">{{inProgress.link.title[0].toUpperCase()}}</span>
												</v-list-item-avatar>
												<v-list-item-content>
													<v-list-item-title>
														<a :href="inProgress.link.link" target="_blank">{{inProgress.link.title}}</a>
													</v-list-item-title>
													<v-list-item-subtitle>{{inProgress.link.description}}</v-list-item-subtitle>
												</v-list-item-content>
											</v-list-item>
										</v-card-text>
									</v-card>

									<text-field
										v-model="payload.linkUrl"
										label="Link Url"
										icon="mdi-link"
										name="link" :dense="false"
										:errors="formErrors"
										:color="theme"
										:disabled="!payload.title"
										@change="createLink"
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
							<v-btn rounded
								depressed color="grey lighten-2 ma-1"
								class="weight-600 grey--text text--darken-3"
								@click="saveAsDraft"
							>
								Save as Draft
							</v-btn>
							<v-btn rounded
								dark depressed
								:color="theme"
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
import EditorJS from "@editorjs/editorjs";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import TextVariantTune from "@editorjs/text-variant-tune";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import Header from "@editorjs/header";
import Underline from "@editorjs/underline";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Paragraph from "editorjs-paragraph-with-alignment";
import ImageTool from "@editorjs/image";
import util from "util";
import urls from "@/urls.json";
import $ from "jquery";
import {getAccessToken} from "@/helper.js";
import Embed from "@editorjs/embed";
import SocialPost from "editorjs-social-post-plugin";
import Snack from "@/mixin/Snack.js";

export default {
	name: "Submit",
	mixins: [PostMixin, PatchMixin, Snack],
	data: () => ({
		draftDialog: false,
		tab: null,
		tagArray: [],
		payload: {
			type: "editor",
			community: null,
			title: null,
			linkUrl: null,
			content: null
		},
		files: [],
		fileUrls: [],
		totalSize: null,
		tagItems: [
			{name: "OC", tooltip: "Post as your original content", color: "primary"},
			{name: "SPOILER", tooltip: "Add post as spoiler alert", color: "red"},
			{name: "WARNING", tooltip: "Add post as a warning", color: "orange"}
		],
		editor: null,
	}),
	created() {
		this.initSubmit()
		this.initEditor(null)
	},
	computed: {
		...mapGetters({
			currentUser: "user/current",
			drafts: "publication/draftList",
			inProgress: "publication/inProgress"
		}),
		tabItems() {
			return [
				{
					type: "editor", title: "Post", icon: "mdi-post",
					active: this.payload.type === "editor"
				},
				{
					type: "media", title: "Images/Videos", icon: "mdi-image-size-select-actual",
					active: this.payload.type === "media"
				},
				{
					type: "link", title: "Link", icon: "mdi-link-variant",
					active: this.payload.type === "link"
				},
				{
					type: "poll", title: "Poll", icon: "mdi-chart-box-outline",
					disabled: true, active: false
				},
			]
		},
		activeTabItem() {
			return this.tabItems.find(item => item.active === true)
		},
		theme() {
			if (this.inProgress) {
				if (this.inProgress.community) {
					return this.inProgress.community.theme
				} else return "primary"
			} else return "primary"
		}
	},
	methods: {
		refreshInProgress() {
			this.$axios.get(this.$util.format(this.$urls.publication.retrieve, this.inProgress.id))
				.then(res => {
					this.$store.dispatch("publication/removeDraftItem", res.id)
					this.$store.dispatch("publication/addToDraft", res)
					this.$store.dispatch("publication/setInProgress", res)
				})
		},
		initEditor(publication) {
			if(this.editor) this.editor.destroy()
			let content = ""
			if(publication && publication.content) {
				content = JSON.parse((publication.content))
			}
			this.editor = new EditorJS({
				onReady: () => {
					const editor = this.editor
					new Undo({ editor });
					new DragDrop(editor);
				},
				autofocus: false,
				holder: "editor-js",
				tools: {
					textVariant: TextVariantTune,
					alignmentTune: AlignmentBlockTune,
					header: {
						class: Header,
						shortcut: "CMD+SHIFT+H",
						config: {
							placeholder: "Enter a header",
							levels: [1, 2],
							defaultLevel: 1
						},
						tunes: ["alignmentTune"]
					},
					underline: Underline,
					list: List,
					quote: {
						class: Quote,
						inlineToolbar: true,
						shortcut: "CMD+SHIFT+O",
						config: {
							quotePlaceholder: "Enter a quote",
							captionPlaceholder: "Quote's author",
						},
						tunes: []
					},
					Marker: {
						class: Marker,
						shortcut: "CMD+SHIFT+M",
					},
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
						tunes: ["alignmentTune"]
					},
					image: {
						class: ImageTool,
						config: {
							/**
							 * Custom uploader
							 */
							uploader: {
								/**
								 * Send URL-string to the server.
								 * Backend should load image by this URL and return an uploaded image data
								 * @param {string} url - pasted image URL
								 * @return {Promise.<{success, file: {url}}>|void}
								 */
								uploadByUrl(url) {
									console.log(publication.id)
									if (!publication) return
									var formData = new FormData();
									var uploadUrl = util.format(urls.publication.addImageUrl, publication.id)
									formData.append("image_url", url)
									return $.ajax({
										url: `${process.env.VUE_APP_BACKEND_HOST}/api/${uploadUrl}`,
										type: "post",
										headers: {
											"Authorization": "Token " + getAccessToken()
										},
										contentType: false,
										data: formData,
										processData: false,
									}).then(res => {
										return {
											success: 1,
											file: {
												url: res["image_url"],
											}
										};
									})
								},
								/**
								 * Upload file to the server and return an uploaded image data
								 * @param {File} file - file selected from the device or pasted by drag-n-drop
								 * @return {Promise.<{success, file: {url}}>|void}
								 */
								uploadByFile(file){
									if (!publication) return
									var formData = new FormData();
									var uploadUrl = util.format(urls.publication.addImage, publication.id)
									formData.append("image", file)
									return $.ajax({
										url: `${process.env.VUE_APP_BACKEND_HOST}/api/${uploadUrl}`,
										type: "post",
										headers: {
											"Authorization": "Token " + getAccessToken()
										},
										contentType: false,
										data: formData,
										processData: false,
									}).then(res => {
										return {
											success: 1,
											file: {
												url: res.image,
											}
										};
									})
								},
							}
						}
					},
					embed: Embed,
					socialPost: SocialPost,
				},
				tunes: ["textVariant"],
				data: content,
			})
		},
		resetSubmitForm() {
			this.tagArray = []
			this.$store.dispatch("publication/removeDraftItem", this.inProgress.id)
			this.$store.dispatch("publication/setInProgress", null)
			this.payload = { title: null, tags: null, type: "editor" }
			if (this.payload.type === "editor") this.initEditor(null)
		},
		publish() {
			this.saveAsDraft()
				.then(() => {
					const url = this.$util.format(this.$urls.publication.publish, this.inProgress.id)
					this.post(url).then(() => {
						if(this.postInstance) {
							this.resetSubmitForm()
							this.openSnack("Publication published successfully.", {color: "success"})
						} else {
							this.openSnack("Publication cannot be published.")
						}
					})
				})
		},
		startEditingDraft(draft) {
			// TODO: check for current content and save for edit

			// do not start in progress draft
			if (this.inProgress) {
				if(this.inProgress.id === draft.id) return
			}

			this.$store.dispatch("publication/setInProgress", draft)
			this.draftDialog = false
			this.payload = {...this.inProgress}
			if(this.payload.tags) {
				this.tagArray = this.payload.tags.split(",")
			} else this.tagArray = []
			if (this.payload.type === "editor") this.initEditor(this.inProgress)
		},
		initSubmit() {
			const url = this.$urls.publication.list
			this.$axios.getWithPayload(url, {is_published: false, created_by: this.currentUser.id})
				.then((res) => {
					this.$store.dispatch("publication/setDrafts", res)
				})
		},
		checkRequired(fieldList) {
			let errObj = {}
			fieldList.forEach(field => {
				if (!this.payload[field]) errObj[field] = ["This field is required."]
			})
			this.formErrors = { ...errObj }
			return Object.entries(errObj).length > 0
		},
		async saveAsDraft() {
			if(!this.checkRequired(["title"])) {
				const payload = {}
				const url = this.$util.format(this.$urls.publication.detail, this.inProgress.id)
				payload["tags"] = this.getSelectedTagsString()
				if (this.inProgress.type === "editor") {
					const content = await this.editor.save()
					payload["content"] = JSON.stringify(content)
				}
				// send publication patch request
				await this.patch(url, payload)
				if (!this.patchInstance) {
					this.formErrors = {...this.patchErrors}
				} else {
					await this.$store.dispatch("publication/setInProgress", this.patchInstance)
					this.openSnack("Draft saved successfully.", {color:"success"})
				}
			}
		},
		postPublication() {
			if(!this.inProgress) {
				if(!this.checkRequired(["title"])) {
					// send pub create request
					const url = this.$urls.publication.add
					this.post(url, {
						title: this.payload.title,
						type: this.activeTabItem.type
					}).then(() => {
						if (this.postInstance) {
							// set item in progress
							this.$store.dispatch("publication/setInProgress", this.postInstance)
							this.$store.dispatch("publication/addToDraft", this.postInstance)
							if (this.payload.type === "editor") this.initEditor(this.postInstance)
						}
					})
				}
			}
		},
		removeFile(item, index) {
			this.files.splice(index, 1)
			this.fileUrls.splice(index, 1)
			this.totalSize -= item.size
		},
		deleteImage(itemID) {
			const url = this.$util.format(this.$urls.publication.imageDetail, itemID)
			this.$axios.delete(url)
				.then(() => {
					this.$store.dispatch("publication/removeImageItem", this.inProgress.id, itemID)
				})
		},
		postImage(item, index) {
			const id = this.inProgress.id
			const url = this.$util.format(this.$urls.publication.addImage, id)
			const fd = new FormData()
			fd.append("image", this.files[index])
			this.post(url, fd).then(() => {
				this.removeFile(item, index)
				this.refreshInProgress()
			})
		},
		addTargetFilesToList(filesList) {
			filesList.forEach(file => {
				this.files.push(file)
				this.fileUrls.push(URL.createObjectURL(file))
				this.totalSize += file.size
			})
		},
		fileInputChanged(e) {
			const filesList = Array.from(e.target.files)
			this.addTargetFilesToList(filesList)
		},
		setActiveTab(item) {
			this.payload.type = item.type
			if(item.type === "editor") this.initEditor(null)
		},
		dragFile(e) {
			const filesList = Array.from(e.dataTransfer.files)
			this.addTargetFilesToList(filesList)
		},
		getSelectedTagsString() {
			console.log(this.tagArray)
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
		deleteDraft(ID) {
			const url = this.$util.format(this.$urls.publication.detail, ID)
			this.$axios.delete(url)
			this.$store.dispatch("publication/removeDraftItem", ID)
			this.openSnack("Draft deleted successfully.", {color:"success"})
		},
		startNew() {
			this.$store.dispatch("publication/setInProgress", null)
			if (this.payload.type === "editor") this.initEditor(null)
			this.payload = {title: null, type: "editor"}
		},
		createLink() {
			if (!this.payload.linkUrl) return
			if (this.inProgress && this.inProgress.link) {
				const url = this.$util.format(this.$urls.publication.linkDetail, this.inProgress.link.id)
				this.patch(url, {link: this.payload.linkUrl})
					.then(() => {
						if(this.patchInstance) {
							this.refreshInProgress()
						}
					})
			} else {
				const url = this.$util.format(this.$urls.publication.addLink, this.inProgress.id)
				this.post(url, {link: this.payload.linkUrl})
					.then(() => {
						if(this.postInstance) {
							this.refreshInProgress()
						}
					})
			}
		}
	}
}
</script>

<style scoped lang="scss">
.submit-tab {
	display: flex;
	.submit-tab-item:nth-child(1) {
		border-top-left-radius: 4px;
		border-left: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(2) {
		border-left: 1px solid #bbbbbb;
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(3) {
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(4) {
		border-top-right-radius: 4px;
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:hover {
		background-color: #e7e7e7;
	}
	.submit-tab-item-active {
		border-bottom: none !important;
	}
	.submit-tab-item-disabled {
		pointer-events: none;
		cursor: not-allowed !important;
	}
	.submit-tab-item {
		position: relative;
		border-top: 1px solid #bbbbbb;
		border-bottom: 1px solid #bbbbbb;
		cursor: pointer;
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 55px;
		.submit-tab-item-active-line {
			position: absolute;
			width: 100%;
			height: 4px;
			bottom: 0;
		}
		.submit-tab-item-icon {
			color: grey;
		}
		.submit-tab-item-title {
			padding: 0 6px;
			color: grey;
			font-weight: 600;
		}
	}
}
.clear-btn {
	position: absolute;
	right: 4px;
	top: 4px;
	z-index: 1;
}
.post-btn {
	position: absolute;
	right: 30px;
	top: 4px;
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

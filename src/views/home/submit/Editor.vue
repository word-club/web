<template>
	<v-card
		outlined
	>
		<v-card-text class="pa-1">
			<div
				id="editorjs"
			/>
		</v-card-text>
	</v-card>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Underline from "@editorjs/underline";
import TextVariantTune from "@editorjs/text-variant-tune";
const Quote = require("@editorjs/quote");
const Marker = require("@editorjs/marker");
const Checklist = require("@editorjs/checklist");
const Paragraph = require("editorjs-paragraph-with-alignment");
const Embed = require("@editorjs/embed");
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import Table from "@editorjs/table";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import SocialPost from "editorjs-social-post-plugin";
import * as EditorJSStyle from "editorjs-style";

const urls = require("@/urls.json")
const util = require("util")
import Snack from "@/mixin/Snack.js";
import {getAccessToken} from "@/helper.js";
import {mapGetters} from "vuex";

export default {
	name: "Editor",
	mixins: [Snack],
	props: {},
	data: () => ({
		editor: null
	}),
	computed: {
		...mapGetters({
			onGoingPost: "publication/inProgress"
		})
	},
	created() {
		this.initEditor(this.onGoingPost)
	},
	methods: {
		initEditor(publication) {
			this.editor = new EditorJS({
				onReady: () => {
					const editor = this.editor
					new Undo({ editor });
					new DragDrop(editor);
				},
				autofocus: false,
				holder: "editorjs",
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
					},
					Marker: {
						class: Marker,
						shortcut: "CMD+SHIFT+M",
					},
					checklist: {
						class: Checklist,
						inlineToolbar: true,
					},
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
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
								 * @return {Promise.<{success, file: {url}}>}
								 */
								uploadByFile(file){
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
					table: {
						class: Table,
						inlineToolbar: true,
						config: {
							rows: 2,
							cols: 3,
						},
					},
					socialPost: SocialPost,
					style: EditorJSStyle.StyleInlineTool,
				},
				tunes: ["textVariant"],
				data: (publication.content)
					? JSON.parse(publication.content)
					: {}
			})
		},
	}
}
</script>

<style scoped lang="scss">
.ce-block div .ce-block__content {
	max-width: 750px !important;
}
</style>

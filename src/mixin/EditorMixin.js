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

const EditorMixin = {
	data: () => ({
		editor: null,

	}),
	methods: {
		initEditor(publication) {
			if(this.editor) this.editor.destroy()
			let content = ""
			if(publication && publication.content) {
				content = JSON.parse((publication.content))
			}
			this.editor = new EditorJS({
				onReady: () => {
					const editor = this.editor
					if(editor) {
						new Undo({ editor });
						new DragDrop(editor);
					}
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

	}
}

export default EditorMixin

import { Node } from "@tiptap/core"

export const inputRegex = /https:\/\/www.youtube.com\/[a-z?=A-Z\-0-7&_]+/

export default Node.create({
	name: "iframe",
	group: "block",
	defaultOptions: {
		allowFullscreen: true,
		HTMLAttributes: {
			class: "iframe-wrapper"
		}
	},
	addAttributes() {
		return {
			src: {
				default: null,
			},
			frameborder: {
				default: 0,
			},
			allowfullscreen: {
				default: this.options.allowFullscreen,
				parseHTML: () => this.options.allowFullscreen,
			},
		}
	},
	parseHTML() {
		return [{
			tag: "iframe",
		}]
	},
	renderHTML({ HTMLAttributes }) {
		return ["div", this.options.HTMLAttributes, ["iframe", HTMLAttributes]]
	},
	addCommands() {
		return {
			setIframe: (options) => ({ tr, dispatch }) => {
				const { selection } = tr
				const node = this.type.create(options)

				if (dispatch) {
					tr.replaceRangeWith(selection.from, selection.to, node)
				}

				return true
			},
		}
	},
})

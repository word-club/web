const EditorContentMixin =  {
	data() {
		return {
			mini: false
		}
	},
	computed: {
		editorContent() {
			try {
				if (this.mini) {
					const content = JSON.parse(this.publication.content)
					content.blocks = content.blocks.slice(0, 2)
					return content
				} else {
					return JSON.parse(this.publication.content)
				}
			} catch(e) {
				return {
					blocks: [
						{
							type: "paragraph",
							data: {
								text: this.publication.content
							}
						}
					]
				}
			}
		}
	}
}

export default EditorContentMixin

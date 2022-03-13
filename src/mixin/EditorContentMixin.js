const EditorContentMixin =  {
	computed: {
		editorContent() {
			try {
				return JSON.parse(this.publication.content)
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

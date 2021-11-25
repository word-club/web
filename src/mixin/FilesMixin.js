const FilesMixin = {
	data: () => ({
		files: [],
		fileUrls: [],
		totalSize: null,
	}),
	methods: {
		clearFiles() {
			this.files = []
			this.fileUrls = []
			this.totalSize = null
		},
		removeFile(item, index) {
			this.files.splice(index, 1)
			this.fileUrls.splice(index, 1)
			this.totalSize -= item.size
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
		dragFile(e) {
			const filesList = Array.from(e.dataTransfer.files)
			this.addTargetFilesToList(filesList)
		},
	}
}

export default FilesMixin

const PublicationType = {
	computed: {},
	methods: {
		getTypeString(type) {
			if (type === this.$constants.PUBLICATION_TYPE.EDITOR) return null
			else if(type === this.$constants.PUBLICATION_TYPE.LINK) return "LINK"
			else if(type === this.$constants.PUBLICATION_TYPE.MEDIA) return "MEDIA"
			else if(type === this.$constants.PUBLICATION_TYPE.POLL) return "POLL"
			else return null
		}
	}
}

export default PublicationType

const PublicationType = {
	computed: {},
	methods: {
		getTypeString(type) {
			if (type === "editor") return null
			else if(type === "link") return "LINK"
			else if(type === "media") return "MEDIA"
			else if(type === "poll") return "POLL"
			else return null
		}
	}
}

export default PublicationType

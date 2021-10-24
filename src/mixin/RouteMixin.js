const RouteMixin = {
	methods: {
		async toPublicationDetail(id) {
			await this.$router.push({ name: "Publication", params: { id: id }})
		},
		async toCommunityDetail(id) {
			await this.$router.push({ name: "Community", params: {id: id}})
		},
		async toCommunityWiki(id) {
			await this.$router.push({ name: "Community Wiki", params: {id: id}})
		},
		async toCommunityModmail(id) {
			await this.$router.push({ name: "Community Modmail", params: {id: id}})
		},
		async toHome(){
			await this.$router.push("/")
		}
	},
}

export default RouteMixin

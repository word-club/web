const RouteMixin = {
	methods: {
		async toPublicationDetail(id) {
			await this.$router.push({ name: "Publication", params: { id: id }})
		},
		async toCommunityDetail(id) {
			await this.$router.push({ name: "Communitiy", params: {id: id}})
		}
	},
}

export default RouteMixin

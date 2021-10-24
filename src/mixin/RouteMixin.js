const RouteMixin = {
	methods: {
		async toPublicationDetail(id) {
			await this.$router.push({name: "Publication", params: {id: id}})
		},
		async toCommunityDetail(uniqueId) {
			await this.$router.push({name: "Community", params: {uniqueId: uniqueId}})
		},
		async toCommunityWiki(uniqueId) {
			await this.$router.push({name: "Community Wiki", params: {uniqueId: uniqueId}})
		},
		async toCommunityModmail(uniqueId) {
			await this.$router.push({name: "Community Modmail", params: {uniqueId: uniqueId}})
		},
		async toHome() {
			await this.$router.push("/")
		},
		async toUserOverview(username) {
			await this.$router.push({name: "User Overview", params: {username: username}})
		},
		async toUserPosts(username) {
			await this.$router.push({name: "User Posts", params: {username: username}})
		},
		async toUserComments(username) {
			await this.$router.push({name: "User Comments", params: {username: username}})
		},
		async toUserAwards(username) {
			await this.$router.push({name: "User Awards", params: {username: username}})
		}
	}
}

export default RouteMixin

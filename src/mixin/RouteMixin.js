const RouteMixin = {
	data: () => ({
		currentRoute: null,
		currentRouteParent: null,
	}),
	watch: {
		$route(to) {
			const currentPath = to.fullPath
			this.currentRoute = to.matched.find(route => route.regex.test(currentPath))
			this.currentRouteParent = this.currentRoute ? this.currentRoute.parent : null
		}
	},
	methods: {
		async toPublicationDetail(id, view) {
			await this.$router.push({name: "Publication", params: {id: id, view: view}})
		},
		async toCommunityDetail(uniqueId) {
			await this.$router.push({name: "Community Detail", params: {uniqueId}})
		},
		async toCommunityWiki(id) {
			await this.$router.push({name: "Community Detail Wiki", params: {id: id}})
		},
		async toCommunityModmail(id) {
			await this.$router.push({name: "Community Detail Modmail", params: {id: id}})
		},
		async toRegisterCommunity() {
			await this.$router.push({name: "Register Community"})
		},
		async toRegisterCommunityTheme() {
			await this.$router.push({name: "Community Display"})
		},
		async toHome() {
			if (this.$route.name === "Home") return
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
	}
}

export default RouteMixin

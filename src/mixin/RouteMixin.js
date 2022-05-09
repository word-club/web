const RouteMixin = {
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
			await this.$router.getRoute("Home")
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
		async toProfileOverview() {
			await this.$router.push({name: "Profile Overview"})
		},
		async toProfilePosts() {
			await this.$router.push({name: "Profile Posts"})
		},
		async toProfileComments() {
			await this.$router.push({name: "Profile Comments"})
		},
		async toProfileSaved() {
			await this.$router.push({name: "Profile Saved"})
		},
		async toProfileHidden() {
			await this.$router.push({name: "Profile Hidden"})
		},
		async toProfileUpVoted() {
			await this.$router.push({name: "Profile Upvoted"})
		},
		async toProfileDownVoted() {
			await this.$router.push({name: "Profile Downvoted"})
		},
		async toProfileShares() {
			await this.$router.push({name: "Profile Shares"})
		},
		async toCreatePost() {
			await this.$router.push({ name: "Submit", params: { type: "editor" } })
		}
	}
}

export default RouteMixin

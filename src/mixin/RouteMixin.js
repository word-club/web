const RouteMixin = {
	methods: {
		async toPublicationDetail(id) {
			await this.$router.push({name: "Publication", params: {id: id}})
		},
		async toCommunityDetail(uniqueId) {
			await this.$router.push({name: "Community Detail", params: {uniqueId: uniqueId}})
		},
		async toCommunityWiki(uniqueId) {
			await this.$router.push({name: "Community Detail Wiki", params: {uniqueId: uniqueId}})
		},
		async toCommunityModmail(uniqueId) {
			await this.$router.push({name: "Community Detail Modmail", params: {uniqueId: uniqueId}})
		},
		async toRegisterCommunity() {
			await this.$router.push({name: "Community Mainframe"})
		},
		async toRegisterCommunityTheme() {
			await this.$router.push({name: "Community Display"})
		},
		async toRegisterCommunityRules() {
			await this.$router.push({name: "Community Rules"})
		},
		async toRegisterCommunityTags() {
			await this.$router.push({name: "Community Hashtags"})
		},
		async toRegisterCommunityAuthorization() {
			await this.$router.push({name: "Community Authorization"})
		},
		async toRegisterCommunityAdmin() {
			await this.$router.push({name: "Community Administration"})
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
		async toProfileAwardsReceived() {
			await this.$router.push({name: "Profile Awards Received"})
		},
		async toProfileAwardsGiven() {
			await this.$router.push({name: "Profile Awards Given"})
		},
		async toCreatePost() {
			await this.$router.push({name: "Submit"})
		}
	}
}

export default RouteMixin

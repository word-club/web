module.exports = {
	getAccessToken() {
		return localStorage.getItem("word-club-api-access-token")
	},
	getThemeColor(community) {
		if (community.theme) return community.theme.color
		else return "primary"
	}
}

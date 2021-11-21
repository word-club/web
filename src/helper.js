module.exports = {
	registrationSteps: [
		{state: "0", title: "Community Mainframe", icon: "mdi-ballot", to: "/register-community/mainframe"},
		{state: "1", title: "Add Community Theme", icon: "mdi-camera-image", to: "/register-community/display"},
		{state: "2", title: "Set Community Rules", icon: "mdi-ruler-square-compass", to: "/register-community/rules"},
		{state: "3", title: "Community Hashtags", icon: "mdi-pound", to: "/register-community/hashtags"},
		{state: "4", title: "Authorize Your Community", icon: "mdi-check-bold", to: "/register-community/authorization"},
		{state: "5", title: "Community Administration", icon: "mdi-account-cowboy-hat", to: "/register-community/administration"},
	],
	colorsForSelect: [
		{value: "primary", name: "Primary"},
		{value: "orange", name: "Orange"},
		{value: "red", name: "Red"},
		{value: "pink", name: "Pink"},
		{value: "teal", name: "Teal"},
		{value: "green", name: "Green"},
		{value: "indigo", name: "Indigo"},
		{value: "grey", name: "Grey"},
		{value: "deep-purple", name: "Purple"},
		{value: "amber", name: "Amber"},
	],
	getProgressState(state) {
		return this.registrationSteps.find(item => item.state === state)
	},
	clearCurrentUser() {
		localStorage.removeItem("word-club-current-user")
	},
	setCurrentUser(value) {
		localStorage.setItem("word-club-current-user", JSON.stringify(value))
	},
	getCurrentUser() {
		const value = localStorage.getItem("word-club-current-user")
		if (value) return JSON.parse(value)
		return null
	},
	getAccessToken() {
		return localStorage.getItem("word-club-api-access-token")
	},
	setAccessToken(value) {
		return localStorage.setItem("word-club-api-access-token", value)
	},
	clearAccessToken() {
		return localStorage.removeItem("word-club-api-access-token")
	},
	getThemeColor(community) {
		if (community.theme) return community.theme.color
		else return "primary"
	},
	setCommunityInProgress(value) {
		localStorage.setItem("CommunityCreateInProgress", JSON.stringify(value))
	},
	clearCommunityInProgress() {
		localStorage.removeItem("CommunityCreateInProgress")
	},
	getCommunityInProgress() {
		const value = localStorage.getItem("CommunityCreateInProgress")
		if (value) return JSON.parse(value)
		return null
	},
	ifCurrentUserIs(user) {
		const currentUser = this.getCurrentUser()
		return currentUser && user.username === currentUser.username
	}
}

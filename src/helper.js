const WORD_CLUB_SESSION = "word-club-session"
const COMMUNITY_CREATE_IN_PROGRESS = "community-create-in-progress"

module.exports = {
	getProgressState(state) {
		return this.registrationSteps.find(item => item.state === state)
	},
	clearSession() {
		localStorage.removeItem(WORD_CLUB_SESSION)
		localStorage.removeItem(COMMUNITY_CREATE_IN_PROGRESS)
	},
	setCurrentUser(value) {
		localStorage.setItem(WORD_CLUB_SESSION, JSON.stringify({
			token: this.getAccessToken(),
			user: value
		}))
	},
	getCurrentUser() {
		const value = localStorage.getItem(WORD_CLUB_SESSION)
		if (value) return JSON.parse(value).user
		return null
	},
	getAccessToken() {
		const session =  localStorage.getItem(WORD_CLUB_SESSION)
		if (session) return JSON.parse(session).token
		return null
	},
	setAccessToken(value) {
		const user = this.getCurrentUser()
		localStorage.setItem(WORD_CLUB_SESSION, JSON.stringify({
			token: value,
			user: user
		}))
	},
	isUserLoggedIn() {
		return this.getAccessToken() !== null
	},
	isUserSuperAdmin() {
		const user = this.getCurrentUser()
		if (user) return user.is_superuser
		return false
	},
	setCommunityInProgress(value) {
		localStorage.setItem(COMMUNITY_CREATE_IN_PROGRESS, JSON.stringify(value))
	},
	clearCommunityInProgress() {
		localStorage.removeItem(COMMUNITY_CREATE_IN_PROGRESS)
	},
	getCommunityInProgress() {
		const value = localStorage.getItem(COMMUNITY_CREATE_IN_PROGRESS)
		if (value) return JSON.parse(value)
		return null
	},
	ifCurrentUserIs(user) {
		const currentUser = this.getCurrentUser()
		return currentUser && user.username === currentUser.username
	},
	createFormData(payload) {
		const fd = new FormData()
		if (payload) {
			Object.entries(payload).forEach(([key, value]) => {
				fd.append(key, value)
			})
		}
		return fd
	},
	parseSortString(sortString, comment = false) {
		if (sortString === "best") return "supports"
		if (sortString === "popular") return "popularity"
		if (sortString === "fresh") return (comment) ? "created_at" : "published_at"
		if(sortString === "discussed") return "discussions"
		return "support"
	}
}

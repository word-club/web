const WORD_CLUB_SESSION = "word-club-session"

module.exports = {
	clearSession() {
		localStorage.removeItem(WORD_CLUB_SESSION)
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

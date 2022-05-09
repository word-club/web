const WORD_CLUB_SESSION = "word-club-session"

const IS_INSECURE = process.env.VUE_APP_INSECURE === "true"
const BACKEND_HOST = process.env.VUE_APP_BACKEND_HOST || "localhost"
const BACKEND_PORT = process.env.VUE_APP_BACKEND_PORT || "8080"


module.exports = {
	getBackendUrl() {
		const PROTOCOL = IS_INSECURE ? "http" : "https"
		return `${PROTOCOL}://${BACKEND_HOST}:${BACKEND_PORT}`
	},
	getBackendWebsocketUrl() {
		const PROTOCOL = IS_INSECURE ? "ws" : "wss"
		return `${PROTOCOL}://${BACKEND_HOST}:${BACKEND_PORT}/`
	},
	clearSession() {
		localStorage.clear()
	},
	setSession(session) {
		localStorage.clear()
		localStorage.setItem(WORD_CLUB_SESSION, JSON.stringify(session))
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
	getAdministrationData() {
		const session =  localStorage.getItem(WORD_CLUB_SESSION)
		if (session) return JSON.parse(session).administration
		return null
	},
	setAccessToken(value) {
		localStorage.setItem(WORD_CLUB_SESSION, JSON.stringify({
			token: value,
			user: this.getCurrentUser(),
			administration: this.getAdministrationData()
		}))
	},
	setAdministrationData(value) {
		localStorage.setItem(WORD_CLUB_SESSION, JSON.stringify({
			token: this.getAccessToken(),
			user: this.getCurrentUser(),
			administration: value
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

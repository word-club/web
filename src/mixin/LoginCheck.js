const LoginCheck = {
	methods: {
		async checkForLoggedInUser() {
			const token = this.$helper.getAccessToken()
			const currentUser = this.$helper.getCurrentUser()
			if (token && currentUser) {
				await this.$store.dispatch("user/setCurrentUser", currentUser)
			}
			else await this.$store.dispatch("user/setCurrentUser", null)
		}
	}
}

export default LoginCheck

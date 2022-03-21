import {mapGetters} from "vuex";

const RefreshMeMixin = {
	data: () => ({
		refreshing: false
	}),
	computed: {
		...mapGetters({
			me: "user/current"
		})
	},
	methods: {
		async refreshMe() {
			if (this.me?.id) {
				this.refreshing = true
				try {
					const res = await this.$axios.get(this.$urls.user.me)
					this.$helper.setCurrentUser(res)
					await this.$store.dispatch("user/setCurrentUser", res)
				} finally {
					this.refreshing = false
				}
			}
		}
	}
}

export default RefreshMeMixin

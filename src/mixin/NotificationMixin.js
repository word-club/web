import {mapGetters} from "vuex"

const NotificationMixin = {
	data: () => ({
		loadingN: false
	}),
	computed: {
		...mapGetters({
			notification: "notification/list",
		}),
	},
	methods: {
		fetchMyNotifications(update = false) {
			this.loading = true
			this.$axios.get(this.$urls.notification.me)
				.then(async response => {
					await this.$store.dispatch(
						"notification/set",
						{list: response, update}
					)
				})
				.finally(() => {
					this.loading = false
				})
		}
	}
}

export default NotificationMixin

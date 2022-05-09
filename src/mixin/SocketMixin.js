import NotificationMixin from "@/mixin/NotificationMixin.js"

const SocketMixin = {
	mixins: [NotificationMixin],
	methods: {
		getSocketUrl(link) {
			return this.$helper.getBackendWebsocketUrl()
				+ this.$urls.websockets[link]
				+ `?token=${this.$helper.getAccessToken()}`
		},
		socketLogin() {
			const url = this.getSocketUrl("login")
			const websocket = new WebSocket(url)
			const that = this
			websocket.onopen = function () {
				websocket.send(JSON.stringify({
					auth: {token: that.$helper.getAccessToken()},
				}))
			}
		},
		joinNotificationChannel() {
			const url = this.getSocketUrl("notifications")
			const websocket = new WebSocket(url)
			const that = this
			websocket.onmessage = async function (event) {
				const data = JSON.parse(event.data)
				if (data.notifications) {
					console.log(data.notifications)
					await that.$store.dispatch(
						"notification/set",
						{list: data.notifications}
					)
				}
				if (data.type === "notify") that.fetchMyNotifications(true)
			}
		}
	}
}

export default SocketMixin

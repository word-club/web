<template>
	<div>
		<div class="random-int">
			{{ notification }}
		</div>
	</div>
</template>

<script>
export default {
	name: "SocketTestComponent",
	data() {
		return {
			websocket: null,
			notification: null
		}
	},
	created() {
		this.websocket = new WebSocket(process.env.VUE_APP_BACKEND_WS_HOST + "/notification/")

		this.websocket.onmessage = function (event) {
			this.notification = JSON.parse(event.data)
		}
	}
}
</script>

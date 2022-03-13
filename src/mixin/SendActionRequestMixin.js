import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

const SendActionRequestMixin = {
	mixins: [RefreshMeMixin],
	methods: {
		sendActionRequest({id, payload, action, revoke = false,  model = "publication"}) {
			const url = (revoke)
				? `${action}/${id}/`
				: `${model}/${id}/${action}/`
			const method = (revoke)
				? "DELETE"
				: "POST"
			this.$axios.send(method, url, payload).then(async () => {
				this.$emit("init")
				await this.refreshMe()
			}).catch(() => {
				this.openSnack("Something went wrong.")
			})
		},
	}
}

export default SendActionRequestMixin;

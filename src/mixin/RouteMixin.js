const RouteMixin = {
	methods: {
		async toPublicationDetail(id) {
			await this.$router.push({ name: "Publication", params: { id: id }})
		}
	},
}

export default RouteMixin

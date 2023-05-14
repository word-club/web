const AdminTableMixin = {
	data: () => ({
		loading: true,
		items: [],
		search: "",
	}),
	methods: {
		fetch() {
			this.loading = true
			this.$axios.get(this.fetchUrl)
				.then(response => {
					this.items = response?.results || response;
				})
				.catch(error => {
					console.log(error);
				}).finally(() => {
					this.loading = false;
				});
		},
		deleteItem(item) {
			this.loading = true;
			this.$axios.delete(this.$util.format(this.deleteUrl, item.id))
				.then(() => {
					this.fetch();
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.loading = false;
				});
		}
	}
}

export default AdminTableMixin

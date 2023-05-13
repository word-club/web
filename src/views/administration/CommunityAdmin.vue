<template>
	<div class="community-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" />
			</template>
			<template #item.created_at="{ item }">
				{{ new Date(item.created_at).toLocaleString() }}
			</template>
			<template #item.updated_at="{ item }">
				{{ new Date(item.updated_at).toLocaleString() }}
			</template>
			<template #item.actions="{ item }">
				<v-btn icon small color="error" @click="deleteItem(item)">
					<v-icon>mdi-delete</v-icon>
				</v-btn>
			</template>
		</v-data-table>
	</div>
</template>
<script>
import TableToolbar from "@/components/admin/TableToolbar.vue";

export default {
	name: "CommunityAdmin",
	components: {TableToolbar},
	data: () => ({
		loading: true,
		items: [],
		search: "",
		headers: [
			{ text: "Name", value: "name" },
			{ text: "Created By", value: "created_by.username" },
			{ text: "Updated By", value: "updated_by" },
			{ text: "Created At", value: "created_at" },
			{ text: "Updated At", value: "updated_at" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			this.loading = true
			this.$axios.get("/community/")
				.then(response => {
					this.items = response;
				})
				.catch(error => {
					console.log(error);
				}).finally(() => {
					this.loading = false;
				});
		},
		deleteItem(item) {
			this.loading = true;
			this.$axios.delete(`/community/${item.id}/`)
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
</script>

<template>
	<div class="comment-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="Comment" icon="mdi-comment" />
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
import AdminTableMixin from "@/mixin/AdminTableMixin";

export default {
	name: "CommentAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		fetchUrl: "/wc-comment/",
		deleteUrl: "/wc-comment/%s/",
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Name", value: "name" },
			{ text: "Created By", value: "created_by.username" },
			{ text: "Created At", value: "created_at" },
			{ text: "Updated At", value: "updated_at" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	}
}
</script>

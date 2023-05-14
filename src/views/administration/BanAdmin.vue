<template>
	<div class="ban-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="Ban" icon="mdi-account-lock" />
			</template>
			<template #item.banned_at="{ item }">
				{{ new Date(item.created_at).toLocaleString() }}
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
	name: "CommunityAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		fetchUrl: "/ban/",
		deleteUrl: "/ban/%s/",
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Ban Item Id", value: "ban_item_id" },
			{ text: "Ban Item Model Class", value: "ban_item_id" },
			{ text: "Ban Item App Label", value: "ban_item_app_label" },
			{ text: "Banned At", value: "banned_at" },
			{ text: "Banned By", value: "created_by.username"},
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	}
}
</script>

<template>
	<div class="community-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="User" icon="mdi-account" />
			</template>
			<template #item.date_joined="{ item }">
				{{ new Date(item.date_joined).toLocaleString() }}
			</template>
			<template #item.last_login="{ item }">
				{{ new Date(item.last_login).toLocaleString() }}
			</template>
			<template #item.is_staff="{ item }">
				<v-checkbox hide-details v-model="item.is_staff" color="primary" class="ma-0 mb-1" readonly />
			</template>
			<template #item.is_active="{ item }">
				<v-checkbox hide-details v-model="item.is_active" color="success" class="ma-0 mb-1" readonly />
			</template>
			<template #item.is_superuser="{ item }">
				<v-checkbox hide-details v-model="item.is_superuser" color="black" class="ma-0 mb-1" readonly />
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
	name: "UserAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		fetchUrl: "/users/",
		deleteUrl: "/users/%s/",
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Username", value: "username" },
			{ text: "Date Joined", value: "date_joined" },
			{ text: "Last Login", value: "last_login" },
			{ text: "Is Staff", value: "is_staff" },
			{ text: "Is Active", value: "is_active" },
			{ text: "Is SuperUser", value: "is_superuser" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	}
}
</script>

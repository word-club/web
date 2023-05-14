<template>
	<div class="community-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="Hashtag" icon="mdi-pound" with-create @create="openCreateForm()" />
			</template>
			<template #item.created_at="{ item }">
				{{ new Date(item.created_at).toLocaleString() }}
			</template>
			<template #item.updated_at="{ item }">
				{{ new Date(item.updated_at).toLocaleString() }}
			</template>
			<template #item.actions="{ item }">
				<v-btn icon small color="primary" @click="openEditForm(item)">
					<v-icon>mdi-pencil</v-icon>
				</v-btn>
				<v-btn icon small color="error" @click="deleteItem(item)">
					<v-icon>mdi-delete</v-icon>
				</v-btn>
			</template>
		</v-data-table>
		<v-dialog v-model="dialog" max-width="600" persistent>
			<v-card>
				<v-card-title>
					<template v-if="dialogItem">Edit Hashtag</template>
					<template v-else>Add Hashtag</template>
				</v-card-title>
				<v-divider />
				<v-card-text class="pt-4">
					<v-text-field prepend-inner-icon="mdi-form-textbox" label="Tag"
						v-model="payload" :error-messages="formErrors['tag']"
						outlined color="primary"
					/>
				</v-card-text>
				<v-divider />
				<v-card-actions>
					<v-btn color="error" @click="closeForm()">Close</v-btn>
					<v-btn color="primary" @click="submit()">Submit</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import TableToolbar from "@/components/admin/TableToolbar.vue";
import AdminTableMixin from "@/mixin/AdminTableMixin";

export default {
	name: "HashtagAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		dialog: false,
		dialogItem: null,
		fetchUrl: "/hashtag/",
		deleteUrl: "/hashtag/%s/",
		payload: "",
		formErrors: {},
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Tag", value: "tag" },
			{ text: "Created At", value: "created_at" },
			{ text: "Updated At", value: "updated_at" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	},
	methods: {
		openCreateForm() {
			this.dialog = true;
			this.dialogItem = null;
			this.payload = "";
		},
		openEditForm(item) {
			this.dialog = true
			this.dialogItem = item
			this.payload = item.tag
		},
		closeForm() {
			this.dialog = false;
			this.dialogItem = null;
			this.payload = "";
		},
		submit() {
			let method, url
			if (this.dialogItem) {
				method = "patch";
				url = this.deleteUrl.replace("%s", this.dialogItem.id);
			} else {
				method = "post";
				url = this.fetchUrl;
			}
			this.$axios[method](url, {tag: this.payload})
				.then(() => {
					this.closeForm();
					this.fetch();
				})
				.catch(err => {
					this.formErrors = err.response.data;
				});
		}
	}
}
</script>

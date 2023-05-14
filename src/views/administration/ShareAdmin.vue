<template>
	<div class="share-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="Share" icon="mdi-share" />
			</template>
			<template #item.created_at="{ item }">
				{{ new Date(item.created_at).toLocaleString() }}
			</template>
			<template #item.publication="{item}">
				<v-chip
					v-if="item.publication" small
					@click="goToPublication(item.publication)"
					:color="item.publication.is_public ? 'success' : 'error'"
					text-color="white"
				>
					{{ item.publication.title.substring(0, 20) }}{{ item.publication.title.length > 20 ? '...' : '' }}
				</v-chip>
				<template v-else>
					-
				</template>
			</template>
			<template #item.comment="{item}">
				<v-chip
					v-if="item.comment" small
					@click="goToComment(item.comment)"
					text-color="white"
					:color="item.comment.reply ? 'success' : 'indigo'"
				>
					{{ item.comment.comment.substring(0, 20) }}{{ item.comment.comment.length > 20 ? '...' : ''}}
				</v-chip>
				<template v-else>
					-
				</template>
			</template>
			<template #item.profile="{item}">
				<v-chip
					v-if="item.profile" small
					@click="goToProfile(item.profile)"
					text-color="white"
					:color="item.profile.is_public ? 'success' : 'error'"
				>
					{{ item.profile.username }}
				</v-chip>
				<template v-else>
					-
				</template>
			</template>
			<template #item.community="{item}">
				<v-chip
					v-if="item.community" small
					@click="goToCommunity(item.community)"
					text-color="white"
					:color="item.community.is_public ? 'success' : 'error'"
				>
					{{ item.community.name }}
				</v-chip>
				<template v-else>
					-
				</template>
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
	name: "BookmarkAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		fetchUrl: "/share/",
		deleteUrl: "/share/%s/",
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Profile", value: "profile" },
			{ text: "Community", value: "community" },
			{ text: "Publication", value: "publication" },
			{ text: "Comment", value: "comment" },
			{ text: "Created At", value: "created_at" },
			{ text: "Created By", value: "created_by.username" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	}
}
</script>

<template>
	<div class="vote-admin">
		<v-data-table
			:items="items"
			:headers="headers"
			:loading="loading"
			class="elevation-4"
		>
			<template #top>
				<TableToolbar v-model="search" title="Vote" icon="mdi-thumbs-up" />
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
			<template #item.up="{ item }">
				<!--				<v-checkbox hide-details v-model="item.up" color="success" class="ma-0 mb-1" readonly />-->
				<v-icon v-if="item.up" color="success">mdi-thumb-up</v-icon>
				<v-icon v-else color="error">mdi-thumb-thumb-up-outline</v-icon>
			</template>
			<template #item.down="{ item }">
				<!--				<v-checkbox hide-details v-model="item.down" color="success" class="ma-0 mb-1" readonly />-->
				<v-icon v-if="item.down" color="success">mdi-thumb-down</v-icon>
				<v-icon v-else color="error">mdi-thumb-down-outline</v-icon>
			</template>
			<template #item.created_at="{ item }">
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
	name: "VoteAdmin",
	components: {TableToolbar},
	mixins: [AdminTableMixin],
	data: () => ({
		fetchUrl: "/vote/",
		deleteUrl: "/vote/%s/",
		headers: [
			{ text: "Id", value: "id" },
			{ text: "Upvote", value: "up"},
			{ text: "Downvote", value: "down"},
			{ text: "Publication", value: "publication"},
			{ text: "Comment", value: "comment"},
			{ text: "Created By", value: "created_by.username" },
			{ text: "Created At", value: "created_at" },
			{ text: "Actions", value: "actions", sortable: false }
		]
	}),
	created() {
		this.fetch();
	},
	methods: {
		goToPublication(publication) {
			console.debug(publication)
		},
		goToComment(comment) {
			console.debug(comment)
		}
	}
}
</script>

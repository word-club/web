<template>
	<div>
		<v-data-table
			:headers="headers"
			:items="reports"
			class="elevation-1"
		>
			<template #item.actions="{ item }">
				<v-btn icon small color="orange"
					@click="viewItem(item)"
				>
					<v-icon small>
						mdi-eye
					</v-icon>
				</v-btn>
			</template>
			<template #item.resolver="{ item }">
				<span v-if="item.resolved_by">{{ item.resolved_by.username }}</span>
				<span v-else>-</span>
			</template>
			<template #item.timestamp="{item }">
				{{ $moment(item.timestamp).fromNow() }}
			</template>
			<template #item.state="{item }">
				<span v-if="item.state === 'pending'">Pending</span>
				<span v-else-if="item.state === 'resolved'">Resolved</span>
				<span v-else>Ignored</span>
			</template>
			<template #no-data>
				<v-btn
					color="primary"
					@click="initialize"
				>
					Reset
				</v-btn>
			</template>
			<template #top>
				<div class="pa-2">
					<text-field
						name="search"
						v-model="search"
						icon="mdi-magnify"
						label="Search"
					/>
				</div>
			</template>
		</v-data-table>
		<report-admin-dialog />
	</div>
</template>

<script>
import {mapGetters} from "vuex"
import PatchMixin from "@/mixin/PatchMixin.js"

export default {
	name: "Report",
	components: {
		ReportAdminDialog: () => import("@/components/dialogs/ReportAdminDialog"),
	},
	data: () => ({
		reports: [],
		search: null,
		headers: [
			{ text: "Actions", value: "actions", sortable: false },
			{text: "ID", value: "id"},
			{text: "Reporter", value: "created_by.username"},
			{text: "State", value: "state"},
			{text: "Resolver", value: "resolver"},
			{text: "Timestamp", value: "timestamp"},
		]
	}),
	mixins: [PatchMixin],
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	created() {
		this.initialize();
	},
	methods: {
		initialize() {
			this.search = null;
			this.reports = this.community ? this.community.reports : []
		},
		viewItem(item) {
			this.$store.dispatch("dialog/clearDialog")
			this.$store.dispatch("dialog/setReportForAdminInView", {
				model: "community",
				object: item
			})
		}
	}
}
</script>

<style scoped lang="scss">

</style>

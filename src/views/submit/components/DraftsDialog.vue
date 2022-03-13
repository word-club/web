<template>
	<v-dialog
		v-model="draftDialog"
		max-width="600"
	>
		<v-card>
			<v-card-title>Your Drafts</v-card-title>
			<v-card-text>
				<v-list v-if="myDrafts">
					<v-list-item v-for="(draft, index) in myDrafts"
						:key="draft.id"
					>
						<v-list-item-avatar color="error lighten-5"
							class="d-flex align-center justify-center"
						>
							<v-btn color="error"
								@click="deleteDraft(draft.id, index)" icon>
								<v-icon>mdi-delete</v-icon>
							</v-btn>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>{{draft.title}}</v-list-item-title>
							<v-list-item-subtitle>
								<span><b>Type:</b> {{draft.type.replace(/^\w/, (c) => c.toUpperCase())}}</span>
								<v-icon>mdi-circle-small</v-icon>
								<span><b>In behalf of:</b> {{(draft.community) ? draft.community.name : 'Yourself'}}</span>
							</v-list-item-subtitle>
							<v-list-item-subtitle>
								<span><b>Last updated:</b> {{$moment(draft.timestamp).fromNow()}}</span>
							</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-action>
							<v-btn rounded
								:color="getDraftTheme(draft)"
								@click="startEditingDraft(draft)"
								:disabled="(inProgress && inProgress.id === draft.id)"
							>
								{{
									inProgress &&inProgress.id === draft.id
										? 'In Progress'
										:'Start Editing'
								}}
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
				<div v-else>No drafts saved yet.</div>
			</v-card-text>
			<confirm-dialog
				@refreshMe="$emit('refreshMe')"
				@startNew="$emit('startNew')"
			/>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "DraftsDialog",
	mixins: [ConfirmDialogMixin],
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress",
			currentUser: "user/current",
		}),
		myDrafts() {
			if (!this.currentUser) return [];
			return this.currentUser["my_publications"].filter(p => !p.is_published);
		},
		draftDialog: {
			get() {
				return this.$store.getters.draftState
			},
			set(v) {
				this.$store.dispatch("setDraftState", v)
			}
		},
	},
	methods: {
		getDraftTheme(draft) {
			return (draft.community) ? draft.community.theme.color : "primary"
		},
		async startEditingDraft(draft) {
			// TODO: check for current content and save for edit
			// do not start in progress draft
			if (this.inProgress) {
				if (this.inProgress.id === draft.id) return
			}
			await this.$store.dispatch("publication/setInProgress", draft)
			this.$emit("initDraft")
			this.draftDialog = false
		},
		deleteDraft(id) {
			const url = this.$util.format(this.$urls.publication.detail, id)
			this.openConfirmDialog(
				"Are you sure you want to delete this draft?",
				"DELETE",
				url,
				["startNew", "refreshMe"],
				"Draft deleted successfully.",
				"Something went wrong. Please try again."
			)
		},
	}
}
</script>

<style scoped lang="scss">

</style>

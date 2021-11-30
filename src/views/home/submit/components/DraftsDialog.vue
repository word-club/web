<template>
	<v-dialog
		v-model="draftDialog"
		max-width="600"
	>
		<v-card>
			<v-card-title>Your Drafts</v-card-title>
			<v-card-text>
				<v-list v-if="drafts.results">
					<v-list-item v-for="(draft, index) in drafts.results"
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
							<v-btn rounded :color="(draft.community) ? draft.community.theme.color : 'primary'"
								@click="startEditingDraft(draft)"
								:disabled="(inProgress && inProgress.id === draft.id)"
							>
								{{	inProgress
									? inProgress.id === draft.id
										? 'In Progress'
										:'Start Editing'
									: 'Start Editing'
								}}
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
				<div v-else>No drafts saved yet.</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixin/Snack.js";

export default {
	name: "DraftsDialog",
	mixins: [Snack],
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress",
			drafts: "publication/draftList",
		}),
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
		startEditingDraft(draft) {
			// TODO: check for current content and save for edit
			// do not start in progress draft
			if (this.inProgress) {
				if(this.inProgress.id === draft.id) return
			}
			this.$store.dispatch("publication/setInProgress", draft)
			this.draftDialog = false
			this.$emit("initDraft")
		},
		deleteDraft(id) {
			const url = this.$util.format(this.$urls.publication.detail, id)
			this.$axios.delete(url)
				.then(() => {
					if (id === this.inProgress.id) {
						this.$store.dispatch("publication/setInProgress", null)
						this.$emit("startNew")
					}
					this.$store.dispatch("publication/removeDraftItem", id)
						.then(() => {
							if (this.drafts.count === 0) this.draftDialog = false
						})
					this.openSuccessSnack("Draft deleted successfully.")
				})
				.catch(() => {
					this.openSnack("Something went wrong. Please try again.")
				})
		},
	}
}
</script>

<style scoped lang="scss">

</style>

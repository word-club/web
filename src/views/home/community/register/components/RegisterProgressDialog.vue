<template>
	<v-dialog :value="community"
		max-width="600" persistent
	>
		<v-card v-if="community">
			<v-card-text class="pa-4 d-flex justify-space-between">
				<v-chip color="primary weight-500">Community create progress</v-chip>
				<v-btn  icon to="/"><v-icon>mdi-home</v-icon></v-btn>
			</v-card-text>
			<v-card-title>
				Community: {{community.name}}
			</v-card-title>
			<v-divider />
			<v-card-text>
				<v-list rounded v-if="community" dense>
					<v-list-item
						v-for="(item, index) in community.create_progress"
						:key="index"
						:disabled="item.is_completed"
						:to="$helper.getProgressState(item.state).to"
					>
						<v-list-item-icon>
							<v-icon>
								{{ $helper.getProgressState(item.state).icon }}
							</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								{{ $helper.getProgressState(item.state).title }}
							</v-list-item-title>
							<v-list-item-subtitle v-if="item.is_skipped">
								Skipped
							</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-action>
							<v-chip
								dark
								:color="item.is_completed ? 'success': 'grey lighten-1'"
							>
								<v-icon left>
									{{item.is_completed ? 'mdi-check-circle': ''}}
								</v-icon>
								{{ item.is_completed ? 'Completed' : 'Yet to complete' }}
							</v-chip>
						</v-list-item-action>
					</v-list-item>
					<v-btn
						x-small text :loading="posting"
						class="grey--text text--darken-2 weight-500 px11"
						@click="completeProgress">
						Do not want to see this dialog next time for this community?
					</v-btn>
				</v-list>
			</v-card-text>
			<v-divider />
			<v-card-actions>
				<v-spacer />
				<v-btn color="success" @click="newCommunity">Create New</v-btn>
				<v-btn color="primary">Continue Progress</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import CheckPendingCommunities from "@/mixin/CheckPendingCommunities.js";

export default {
	name: "RegisterProgressDialog",
	mixins: [PostMixin, CheckPendingCommunities],
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
	},
	methods: {
		newCommunity() {
			this.$helper.clearCommunityInProgress()
			this.$store.dispatch("community/setInProgress", null)
		},
		completeProgress() {
			const url = this.$util.format(this.$urls.community.completeRegistration, this.community.id)
			this.post(url)
				.then(() => {
					this.$store.dispatch("community/setInProgress", null)
					this.$helper.clearCommunityInProgress()
					this.checkForPendingCommunities()
				})
		}
	}
}
</script>

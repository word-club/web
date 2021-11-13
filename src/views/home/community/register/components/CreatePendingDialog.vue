<template>
	<v-dialog :value="pendingList.length"
		max-width="600" persistent
	>
		<v-card>
			<v-card-title>You have pending communities to finish with registration steps.</v-card-title>
			<v-divider />

			<v-card-text>
				<v-list two-line flat>
					<v-list-item
						v-for="item in pendingList"
						:key="item.id"
						@click="setCommunityInProgress(item)"
					>
						<v-list-item-avatar :color="`${item.theme.color} lighten-1`"
							class="white--text px22"
						>
							{{item.name[0].toUpperCase()}}
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>
								{{item.name}}
							</v-list-item-title>
							<v-list-item-subtitle>
								<v-progress-linear
									striped rounded
									height="10"
									:color="item.theme.color"
									:value="completedPercentage(item.create_progress)"
								/>
							</v-list-item-subtitle>
						</v-list-item-content>

						<v-list-item-action>
							<v-btn
								rounded :color="`${item.theme.color} lighten-2`" dark
								@click="setCommunityInProgress(item)">Continue</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
			</v-card-text>
			<v-divider />

			<v-card-actions>
				<v-btn block color="primary" @click="newCommunity">New Community</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CreatePendingDialog",
	data: () => ({}),
	computed: {
		...mapGetters("community", ["pendingList"])
	},
	methods: {
		newCommunity() {
			this.$store.dispatch("community/setPendingList", [])
		},
		setCommunityInProgress(item) {
			this.$helper.setCommunityInProgress(item)
			this.$store.dispatch("community/setPendingList", [])
			this.$store.dispatch("community/setInProgress", item)
		},
		completedPercentage(progressArray) {
			let count = 0
			progressArray.forEach(step => {
				if (step.is_completed) count++
			})
			return count*20
		}
	}
}
</script>

<style scoped lang="scss">

</style>

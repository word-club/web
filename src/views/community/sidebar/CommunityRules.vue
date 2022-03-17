<template>
	<v-card outlined>
		<v-card-title class="px-3 py-2 white--text px14 weight-500"
			:class="community.theme.color"
		>
			#/{{ community.unique_id }} Rules
		</v-card-title>
		<v-divider class="mx-2" />
		<v-card-text class="pa-2 pt-0">
			<v-simple-table dense
				v-if="community.rules.length"
			>
				<template #default>
					<tbody>
						<tr v-for="(item, index) in community.rules"
							:key="item.id"
						>
							<td class="weight-500">
								{{ index + 1 }}
							</td>
							<td class="weight-500">
								{{ item.title }}
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
			<div v-else class="py-4">
				No rules available
			</div>
			<v-btn block class="mt-2" v-if="currentUserIsAdmin">Add Rules</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CommunityRules",
	computed: {
		...mapGetters({
			community: "community/inView",
			currentUser: "user/current"
		}),
		currentUserIsAdmin() {
			if (!this.currentUser) return false
			const managedCommunities = this.currentUser["managed_communities"]
			if (!managedCommunities.length) return false
			let found = false
			for (let i=0; i<managedCommunities.length; i++) {
				if (managedCommunities[i].id === this.community.id) {
					found = true
					break
				}
			}
			return found
		}
	}
}
</script>

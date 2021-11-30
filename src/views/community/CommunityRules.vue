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
			<v-btn block class="mt-2">Add Rules</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CommunityRules",
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	}
}
</script>

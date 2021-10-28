<template>
	<v-card outlined>
		<v-card-title class="pa-2 pt-4">
			<v-avatar size="35"
				color="grey darken-1"
			/>
			<span class="pl-3 px16 weight-400 grey--text">Posting to WordClub</span>
		</v-card-title>
		<v-divider class="mx-2" />
		<v-card-text class="pa-2 pt-0">
			<v-simple-table dense>
				<template #default>
					<tbody>
						<tr v-for="(item, index) in instructions"
							:key="item"
						>
							<td class="weight-500">
								{{ index + 1 }}
							</td>
							<td class="weight-500">
								{{ item }}
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "PostingToWordClub",
	computed: {
		instructions() {
			return [
				"Remember to be human",
				"Behave like you would in real life",
				"Look for the original source of content",
				"Search for duplicates before posting",
				"Read the community rules"
			]
		}
	}
}
</script>

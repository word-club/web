<template>
	<v-card outlined
		rounded
	>
		<v-card flat
			height="80"
			class="d-flex align-end rounded-b-0"
			color="primary"
			dark
			img="https://www.wealthmanagement.com/sites/wealthmanagement.com/files/styles/article_featured_standard/public/fastest-growing-rias-promo.jpg?itok=20oq5xhc"
		>
			<v-card-title class="sidebar-card-title py-0 pb-2">
				Today's Top Growing Communities
			</v-card-title>
		</v-card>
		<v-divider />
		<v-card-text class="pa-1">
			<v-simple-table class="rounded-0"
				dense
			>
				<template #default>
					<tbody>
						<tr v-for="(item, index) in trendingCommunities"
							:key="index"
						>
							<td>
								<div>{{ index + 1 }}</div>
							</td>
							<td>
								<div class="d-flex align-center py-1">
									<v-avatar size="30"
										color="grey darken-2"
									/>
									<div class="pl-2">
										{{ item.name }}
									</div>
								</div>
							</td>
							<td>
								<v-btn rounded
									color="primary"
									x-small
								>
									Join
								</v-btn>
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
	name: "TrendingCommunities",
	data: () => ({
		trendingCommunities: [
			{name: "AntiWork"},
			{name: "ShitPosting"},
			{name: "NoStupidQuestions"},
			{name: "InterestingAsFuck"},
			{name: "PCMasterRace"},
		]
	}),
}
</script>

<style scoped>

</style>

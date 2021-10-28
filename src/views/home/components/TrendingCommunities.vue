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
			<v-divider />
		</v-card-text>
		<v-card-actions>
			<v-btn block
				color="primary"
				rounded depressed
			>
				View All
			</v-btn>
		</v-card-actions>
		<v-card-actions>
			<v-btn class="primary--text tag-btn"
				color="grey lighten-4"
				rounded depressed
			>
				Top
			</v-btn>
			<v-btn class="primary--text tag-btn"
				color="grey lighten-4"
				rounded depressed
			>
				Near You
			</v-btn>
			<v-btn class="primary--text tag-btn"
				color="grey lighten-4"
				rounded depressed
			>
				Sports
			</v-btn>
			<v-btn class="primary--text tag-btn"
				color="grey lighten-4"
				rounded depressed
			>
				Gaming
			</v-btn>
		</v-card-actions>
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
.tag-btn {
	height: 25px !important; font-size: 11px; font-weight: 700;
	padding: 0 4px !important;
}
</style>

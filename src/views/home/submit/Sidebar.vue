<template>
	<div class="pa-2">
		<v-card outlined>
			<v-card-title class="pa-2 pt-4">
				<v-avatar size="35"
					color="grey darken-1"
				/>
				<span class="pl-3 title">Posting to WordClub</span>
			</v-card-title>
			<v-divider class="mx-2" />
			<v-card-text class="pa-2 pt-0">
				<v-simple-table dense>
					<template #default>
						<tbody>
							<tr v-for="(item, index) in instructions"
								:key="item"
							>
								<td class="bold">
									{{ index + 1 }}
								</td>
								<td class="bold">
									{{ item }}
								</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-card-text>
		</v-card>
		<div class="py-4 px-2 sidebar-info">
			Please be mindful of <a href="">wordclub's content policy</a> and practice good blogging.
		</div>
		<v-card outlined>
			<v-card-text class="pa-2">
				<v-row>
					<v-col cols="6"
						class="footer-items"
					>
						<div>Help</div>
						<div>WordClub Coins</div>
						<div>WordClub Premium</div>
						<div>WordClub Gifts</div>
					</v-col>
					<v-col cols="6"
						class="footer-items"
					>
						<div>About</div>
						<div>Careers</div>
						<div>Press</div>
						<div>Advertise</div>
						<div>Blog</div>
						<div>Terms</div>
						<div>Content Policy</div>
						<div>Privacy Policy</div>
						<div>Mod Policy</div>
					</v-col>
					<v-col cols="12">
						WordClub Inc © 2021. All rights reserved
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	props: {},
	data: () => ({}),
	computed: {
		instructions() {
			return [
				"Remember the human",
				"Behave like you would in real life",
				"Look for the original source of content",
				"Search for duplicates before posting",
				"Read the community rules"
			]
		}
	},
	methods: {}
}
</script>

<style scoped>
.title {
	font-size: 16px !important;
	color: grey;
	font-weight: 400;
}
.bold {
	font-weight: 500;
}
.sidebar-info {
	font-size: 14px;
	color: #999999
}
</style>

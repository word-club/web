<template>
	<div class="pa-2">
		<v-card outlined
			rounded
		>
			<v-card flat
				height="80"
				class="d-flex align-end"
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
		<div class="py-2" />
		<v-card outlined>
			<v-list-item two-line>
				<v-list-item-icon>
					<v-icon color="orange">
						mdi-apple-keyboard-command
					</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>
						WordClub Premium
					</v-list-item-title>
					<v-list-item-subtitle>
						The best WordClub experience, with monthly Coins
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-card-actions>
				<v-btn
					depressed dark
					block rounded
					color="orange"
				>
					Try Now
				</v-btn>
			</v-card-actions>
		</v-card>
		<div class="py-2" />
		<v-card outlined>
			<v-img src="https://astronomy.com/~/media/2D5DFC8056C147ACBAC697D519596DBB.jpg"
				height="40"
			/>
			<v-card-text class="avatar-line pt-0">
				<v-avatar size="80"
					color="grey darken-2"
				/>
				<div class="home">
					Home
				</div>
			</v-card-text>
			<v-card-text class="pt-0">
				<v-btn rounded
					block depressed
					color="primary"
					to="/submit"
				>
					Create Post
				</v-btn>
				<div class="py-2" />
				<v-btn rounded
					block outlined
					class="primary--text"
				>
					Create a Community
				</v-btn>
			</v-card-text>
		</v-card>
		<div class="py-2" />
		<v-card outlined>
			<v-list two-line>
				<v-subheader class="text-uppercase">
					Recent Posts
				</v-subheader>
				<v-list-item-group v-for="n in 2"
					:key="n"
				>
					<v-list-item>
						<v-list-item-avatar tile
							size="50"
							color="grey darken-2 rounded-lg"
						/>
						<v-list-item-content>
							<v-list-item-title>Some title will go in this section</v-list-item-title>
							<v-list-item-subtitle>
								<span>931 points</span>
								<span><v-icon>mdi-circle-small</v-icon></span>
								<span>36 comments</span>
								<span><v-icon>mdi-circle-small</v-icon></span>
								<span>2h</span>
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-divider v-if="n !== 2"
						class="mx-4"
					/>
				</v-list-item-group>
			</v-list>
		</v-card>
		<div class="py-2" />
		<home-footer />
	</div>
</template>

<script>
import HomeFooter from "@/components/footer/HomeFooter.vue";
export default {
	name: "Sidebar",
	components: {HomeFooter},
	props: {},
	data: () => ({
		trendingCommunities: [
			{name: "AntiWork"},
			{name: "ShitPosting"},
			{name: "NoStupidQuestions"},
			{name: "InterestingAsFuck"},
			{name: "PCMasterRace"},
		]
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped lang="scss">
.avatar-line {
	display: flex;
	align-items: center;
	margin-top: -20px;
	.home {
		padding-top: 20px;
		padding-left: 20px;
		font-size: 18px;
		font-weight: 500;
	}
}
</style>

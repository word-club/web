<template>
	<v-card outlined
		rounded
		class="overflow-hidden"
	>
		<v-progress-linear indeterminate v-if="loading" height="6"/>
		<v-card flat
			height="80"
			class="d-flex align-end rounded-b-0"
			color="primary"
			dark
			:img="trendingImg"
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
							:key="index" class="cursor"
							@click="$router.push({name: 'Community Detail', params: {uniqueId: item.unique_id}})"
						>
							<td class="px-1">
								<div class="pl-2">{{ index + 1 }}</div>
							</td>
							<td class="px-1">
								<div class="d-flex align-center py-1">
									<wc-avatar size="30"
										:color="item.theme.color"
										:src="item.avatar"
										:text="item.name"
										span-class="white--text"
									/>
									<div class="pl-2">
										{{ item.name }}
									</div>
								</div>
							</td>
							<td v-if="isSubscribed(item)" class="px-1">
								<v-btn
									rounded
									:color="item.theme.color"
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
		<v-card-actions class="px-1 top-tags">
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
import {mapGetters} from "vuex";

export default {
	name: "TrendingCommunities",
	data: () => ({
		loading: true,
		trendingImg: require("@/assets/trending.jpg"),
		trendingCommunities: []
	}),
	computed: {
		...mapGetters({
			actor: "user/current"
		})
	},
	created() {
		this.fetchTrendingCommunities();
	},
	methods: {
		isSubscribed(community) {
			if(!this.actor) {
				return false;
			} else return !!this.actor["my_subscriptions"].includes(community.id);
		},
		fetchTrendingCommunities() {
			this.loading = true;
			const url = this.$urls.community.trending
			this.$axios.get(url).then((res) => {
				this.loading = false;
				this.trendingCommunities = res
			});
		}
	}
}
</script>

<style scoped lang="scss">
.top-tags {
	overflow: auto;
	white-space: nowrap;
	.tag-btn {
		font-size: 11px;
		font-weight: 700;
		height: 25px !important;
		padding: 0 4px !important;
	}
}
</style>

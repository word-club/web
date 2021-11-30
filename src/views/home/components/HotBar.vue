<template>
	<v-card outlined>
		<v-card-actions
			class="pa-3 flex-wrap justify-space-between"
		>
			<v-btn
				rounded depressed
				:outlined="!isOnBest"
				:color="color" active-class="active-filter"
				:class="{
					'active-filter': isOnBest
				}"
				:to="{name: 'Home', params: {sortBy: bestItem.queryName}}"
			>
				<v-icon left>
					{{ bestItem.icon }}
				</v-icon>
				{{ bestItem.name }}
			</v-btn>
			<v-btn
				v-for="(item, index) in filterItems"
				:key="index" rounded depressed
				:outlined="$route.params.sortBy !== item.queryName"
				:color="color" active-class="active-filter"
				:class="{
					'active-filter': $route.params.sortBy === item.queryName
				}"
				:to="{name: 'Home', params: {sortBy: item.queryName}}"
			>
				<v-icon left>
					{{ item.icon }}
				</v-icon>
				{{ item.name }}
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
			<v-spacer />
			<v-avatar size="50">
				<v-img :src="require('@/assets/w_art.jpg')"></v-img>
			</v-avatar>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "HotBar",
	props: {
		color: {
			default: "primary",
			required: false,
			type: String
		}
	},
	data: () => ({
		payload: {is_published: true, asc: 0},
		bestItem: {icon: "mdi-rocket", name: "Best", queryName: "best", sortBy: "support"},
		filterItems: [
			{icon: "mdi-fire", name: "Popular", queryName: "popular", sortBy: "popularity"},
			{icon: "mdi-white-balance-sunny", name: "Fresh", queryName: "fresh", sortBy: "published_at"},
			{icon: "mdi-arrow-up-bold-outline", name: "Top Discussed", queryName: "discussed", sortBy: "discussions"},
		]
	}),
	computed: {
		isOnBest() {
			if (!this.$route.params.sortBy) return true
			else return this.$route.params.sortBy === "best"
		}
	},
	created() {
		this.$store.dispatch("publication/setFilterset", {
			sort_by: "support",
			...this.payload
		})
	},
}
</script>

<style lang="scss" scoped>
.v-btn {
	font-size: 13px;
	font-weight: 600;
	color: #454545;
	padding: 0 8px !important;
}
</style>

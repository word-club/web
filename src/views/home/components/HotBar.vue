<template>
	<v-card outlined class="hot-bar">
		<v-card-actions
			class="flex-wrap"
		>
			<div class="hot-bar--action-btn">
				<v-btn
					:outlined="!isOnBest"
					rounded depressed :color="color"
					active-class="active-filter"
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
			</div>
			<div class="hot-bar--action-btn"
				v-for="(item, index) in filterItems"
				:key="index"
			>
				<v-btn
					active-class="active-filter"
					rounded depressed :color="color"
					:outlined="$route.params.sortBy !== item.queryName"
					:to="{name: 'Home', params: {sortBy: item.queryName}}"
					:class="{
						'active-filter': $route.params.sortBy === item.queryName
					}"
				>
					<v-icon left>
						{{ item.icon }}
					</v-icon>
					{{ item.name }}
				</v-btn>
			</div>
			<v-spacer v-if="!lgAndUp" />
			<v-menu offset-y absolute close-delay="100"
				v-if="listItems.length" rounded="xl"
				transition="scale-transition"
			>
				<template #activator="{on, attrs}">
					<div class="hot-bar--action-btn"
						v-bind="attrs" v-on="on"
					>
						<v-btn icon>
							<v-icon>mdi-dots-horizontal</v-icon>
						</v-btn>
					</div>
				</template>
				<v-list rounded dense>
					<v-list-item
						v-for="(item, index) in listItems"
						:key="index" class="filter-drop"
						active-class="active-filter-drop"
						:class="{
							'active-filter-drop': $route.params.sortBy === item.queryName
						}"
						:to="{name: 'Home', params: {sortBy: item.queryName}}"
					>
						<v-list-item-icon>
							<v-icon :color="dropColor(item)">
								{{item.icon}}
							</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{item.name}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer v-if="lgAndUp" />
			<v-avatar size="50"
				v-if="mdAndUp"
			>
				<v-img :src="wArt" />
			</v-avatar>
		</v-card-actions>
	</v-card>
</template>

<script>
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";

export default {
	name: "HotBar",
	mixins: [ScreenSizeMixin],
	props: {
		color: {
			default: "primary",
			required: false,
			type: String
		}
	},
	data: () => ({
		wArt: require("@/assets/w_art.jpg"),
		payload: {is_published: true, asc: 0},
		bestItem: {icon: "mdi-rocket", name: "Best", queryName: "best", sortBy: "support"},
		popularItem: {icon: "mdi-fire", name: "Popular", queryName: "popular", sortBy: "popularity"},
		freshItem: {icon: "mdi-chart-donut", name: "Fresh", queryName: "fresh", sortBy: "published_at"},
		topDiscussedItem: {icon: "mdi-arrow-up-bold-outline", name: "Top Discussed", queryName: "discussed", sortBy: "discussions"},
	}),
	computed: {
		isOnBest() {
			if (!this.$route.params.sortBy) return true
			else return this.$route.params.sortBy === "best"
		},
		listItems() {
			if (this.viewportWidth < 300) {
				return [
					this.popularItem,
					this.freshItem,
					this.topDiscussedItem
				]
			} else if (this.viewportWidth < 500) {
				return [
					this.freshItem,
					this.topDiscussedItem
				]
			} else if (this.viewportWidth < 620) {
				return [
					this.topDiscussedItem
				]
			} else if (this.viewportWidth > 950 && this.viewportWidth < 1048) {
				return [
					this.freshItem,
					this.topDiscussedItem
				]
			} else {
				return []
			}
		},
		filterItems() {
			if (this.viewportWidth < 300) {
				return []
			} else if (this.viewportWidth < 500) {
				return [
					this.popularItem,
				]
			} else if (this.viewportWidth < 620) {
				return [
					this.popularItem,
					this.freshItem
				]
			} else if (this.viewportWidth > 950 && this.viewportWidth < 1048) {
				return [
					this.popularItem,
					this.freshItem
				]
			} else {
				return [
					this.popularItem,
					this.freshItem,
					this.topDiscussedItem
				]
			}
		},
	},
	created() {
		this.$store.dispatch("publication/setFilterset", {
			sort_by: "support",
			...this.payload
		})
	},
	methods: {
		dropColor(item) {
			return this.$route.params.sortBy === item.queryName ? "white" : "primary"
		}
	}
}
</script>

<style lang="scss" scoped>
.v-btn {
	font-size: 13px;
	font-weight: 600;
	color: #454545;
	padding: 2px 8px !important;
	margin: 2px;
}
.v-btn.active-filter {
	::v-deep.v-btn__content {
		color: white;
	}
}
.filter-drop {
	border: 1px solid var(--primary);
	color: var(--primary) !important;
	::v-deep.v-list-item__content{
		.v-list-item__title {
			font-size: 14px;
		}
	}
}
.active-filter-drop {
	background-color: var(--primary) !important;
	color: white !important;
}
</style>

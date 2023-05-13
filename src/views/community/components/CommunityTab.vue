<template>
	<v-card-actions
		v-if="community"
		class="flex-wrap px14 weight-500 py-0"
	>
		<div
			class="community-top-button ma-2 mb-0 cursor"
			@click="toCommunityDetail(community.unique_id)"
			:class="($route.name==='Community Detail') ? community.theme.color + '--text': ''"
		>
			<div class="px-1">Posts</div>
			<v-scale-transition>
				<v-card height="3" :color="community.theme.color"
					v-if="$route.name==='Community Detail'"
				/>
			</v-scale-transition>
		</div>
		<div class="community-top-button ma-2 mb-0 cursor"
			@click="toCommunityWiki(community.uniqueId)"
			:class="($route.name==='Community Detail Wiki') ? community.theme.color + '--text': ''"
		>
			<div class="px-1">Wiki</div>
			<v-scale-transition>
				<v-card height="3" :color="community.theme.color"
					v-if="$route.name==='Community Detail Wiki'"
				/>
			</v-scale-transition>
		</div>
		<div class="community-top-button ma-2 mb-0 cursor"
			:class="($route.name==='Community Detail Modmail') ? community.theme.color + '--text': ''"
			@click="toCommunityModmail(community.uniqueId)"
		>
			<div class="px-1">Modmail</div>
			<v-scale-transition>
				<v-card height="3" :color="community.theme.color"
					v-if="$route.name==='Community Detail Modmail'"
				/>
			</v-scale-transition>
		</div>
	</v-card-actions>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "CommunityTab",
	mixins: [RouteMixin],
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
}
</script>

<style scoped lang="scss">
.community-top-button {
	color: #818080;
	text-transform: uppercase;
	font-weight: 600;
}
</style>

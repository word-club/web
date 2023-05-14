<template>
	<v-card :color="theme.color + ' lighten-4'">
		<v-card-title @click="toCommunityDetail(community.unique_id)"
			class="cursor"
			v-ripple
		>
			<wc-avatar
				:src="avatar"
				size="30" :color="theme.color"
				:text="community.name"
				span-class="white--text"
			/>
			<span class="px-1">{{ community.name }}</span>
			<v-spacer />
			<v-icon class="px-1">mdi-plus-circle</v-icon>
			<span class="px16">{{$moment(community.created_at).format('LLLL')}}</span>
		</v-card-title>
		<v-card-text>
			<h3 class="pb-1">Statistics</h3>
			<div class="statistics-list">
				<v-card v-for="item in items"
					:key="item.name" rounded flat
				>
					<div class="l-title">{{item.name}}</div>
					<div class="l-value">{{item.value}}</div>
				</v-card>
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "CreatedCommunityCard",
	mixins: [RouteMixin],
	props: {
		community: {
			type: Object,
			required: true
		}
	},
	computed: {
		theme() {
			return this.community.theme
		},
		avatar() {
			return this.community.avatar ? this.community.avatar.image : null
		},
		items() {
			return [
				{name: "views", value: this.community.views},
				{name: "popularity", value: this.community.popularity},
				{name: "supports", value: this.community.supports},
				{name: "discussions", value: this.community.discussions},
				{name: "dislikes", value: this.community.dislikes},
				{name: "tags", value: this.community.tags.length},
				{name: "moderators", value: this.community.moderators.length},
				{name: "subscriptions", value: this.community.subscriptions.length},
				{name: "reports", value: this.community.reports.length},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.statistics-list {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;

	> * {
		flex-basis: 31.6%;
		padding: 1rem;
	}

	.l-title {
		font-size: 1rem;
		line-height: 1.2rem;
		text-transform: capitalize;
	}
	.l-value {
		font-size: 1.1rem;
		line-height: 1.1rem;
		font-weight: 600;
	}
}
</style>

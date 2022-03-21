<template>
	<v-card :color="theme.color + ' lighten-4'">
		<v-card-title @click="toCommunityDetail(community.unique_id)"
			class="cursor"
			v-ripple
		>
			<wc-avatar
				:src="community.avatar.image"
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
			<v-list dense class="statistics-list" rounded>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							views
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.views}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							popularity
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.popularity}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							support
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.support}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							discussions
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.discussions}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							dislikes
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.dislikes}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							tags
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.tags.length}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							moderators
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.moderators.length}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							subscriptions
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.subscriptions.length}}
					</v-list-item-action-text>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							reports
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action-text>
						{{community.reports.length}}
					</v-list-item-action-text>
				</v-list-item>
			</v-list>
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
		}
	}
}
</script>

<style scoped lang="scss">
.statistics-list {
	.v-list-item {
		.v-list-item__title {
			text-transform: capitalize;
			font-size: 1rem;
			line-height: 1rem;
		}
		.v-list-item__action-text {
			font-size: 1.1rem;
			line-height: 1.1rem;
			font-weight: 600;
		}
	}
}
</style>

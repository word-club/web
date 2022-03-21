<template>
	<v-card outlined>
		<v-list two-line>
			<v-subheader class="text-uppercase">
				Recent Posts
			</v-subheader>
			<div v-if="Array.isArray(me['recent_publications'])">
				<v-list-item-group
					v-for="(recent, index) in me['recent_publications']"
					:key="recent.id"
				>
					<v-list-item three-line>
						<v-list-item-avatar tile>
							<wc-avatar
								size="50"
								:color="getAvColor(recent.publication.community)"
								:src="recent.publication.thumbnail"
								:text="recent.publication.title"
								span-class="white--text px22"
							/>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>{{ recent.publication.title }}</v-list-item-title>
							<v-list-item-subtitle>
								<span>{{ getPoints(recent.publication) }} points</span>
								<span><v-icon>mdi-circle-small</v-icon></span>
								<span>{{ recent.publication.discussions }} comments</span>
							</v-list-item-subtitle>
							<v-list-item-subtitle>
								{{ $moment(recent.publication.updated_at).fromNow() }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-divider v-if="index + 1 !== me['recent_publications'].length"
						class="mx-4"
					/>
				</v-list-item-group>
			</div>
		</v-list>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "RecentlyViewedPosts",
	props: {  },
	data: () => ({
		list: []
	}),
	computed: {
		...mapGetters({
			me: "user/current",
		})
	},
	methods: {
		getAvColor(community) {
			if (community) {
				return community.theme.color;
			} return "primary"
		},
		getPoints(publication) {
			const additivies =  publication.views
				+ publication.popularity
				+ publication.supports;
			const deductivies = publication.dislikes
			if (additivies > deductivies) {
				return additivies - deductivies;
			} else return 0;
		}
	}
}
</script>

<style scoped>

</style>

<template>
	<v-card flat color="transparent">
		<v-card-title>
			Top {{ administrationData ? administrationData.top_count : '' }} Communities
		</v-card-title>
		<v-card-text>
			<v-list class="py-0" outlined
				v-if="topCommunities"
			>
				<v-list-item
					v-for="(community, index) in topCommunities"
					:key="community.id"
					:class="{
						'border-bottom': topCommunities.length !== index + 1
					}"
					link
				>
					<v-list-item-avatar size="40" :color="community.theme.color">
						<v-img v-if="community.avatar" :src="$link(community.avatar)" />
						<span v-else class="white--text font-weight-500 px22">{{community.name[0].toUpperCase()}}</span>
					</v-list-item-avatar>
					<v-list-item-content @click="$router.push({name: 'Community Detail', params: {id: community.id}})">
						<v-list-item-title class="py-1 px16 weight-500">{{ community.name }}</v-list-item-title>
						<v-list-item-subtitle>
							<v-chip small :color="community.theme.color" outlined>
								<v-icon left size="20">mdi-eye</v-icon>
								<b>{{community.views}}</b><span class="pl-1">Views</span>
							</v-chip>
							<v-chip small :color="community.theme.color"
								class="mx-1"
								outlined
							>
								<v-icon left size="20">mdi-arrow-up</v-icon>
								<b>{{community.popularity}}</b><span class="pl-1">Popularity</span>
							</v-chip>
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action>
						<v-btn
							v-if="isSubscribed(community)"
							rounded depressed dark
							:color="community.theme.color"
							@click="unSubscribe(community)"
						>
							unsubscribe
						</v-btn>
						<v-btn
							v-else
							rounded depressed dark
							:color="community.theme.color"
							@click="subscribe(community)"
						>
							subscribe
						</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card-text>
		<confirm-dialog @refreshMe="refreshMe()" />
	</v-card>
</template>

<script>
import CommunityActions from "@/mixin/CommunityActions.js";
import TopViewMixin from "@/mixin/TopViewMixin.js";

export default {
	name: "TopCommunities",
	mixins: [CommunityActions, TopViewMixin],
	computed: {
		topCommunities() {
			return this.topItems["communities"]
		},
	}
}
</script>

<style scoped lang="scss">

</style>

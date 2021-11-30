<template>
	<v-card flat color="transparent">
		<v-card-title>
			Top 50 Communities
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
					:to="{name: 'Community Detail', params: {id: community.id}}"
				>
					<v-list-item-avatar size="40" color="grey">
						<v-img :src="$link(community.avatar.image)" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>{{ community.name }}</v-list-item-title>
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
							v-if="!community.subscription"
							rounded depressed dark
							:color="community.theme.color"
							@click="subscribe(community)"
						>
							Join
						</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import CommunityActions from "@/mixin/CommunityActions.js";

export default {
	name: "Communities",
	mixins: [CommunityActions],
	computed: {
		...mapGetters(["topItems"]),
		...mapGetters({
			currentUser: "user/current"
		}),
		topCommunities() {
			return this.topItems["communities"]
		}
	}
}
</script>

<style scoped lang="scss">

</style>

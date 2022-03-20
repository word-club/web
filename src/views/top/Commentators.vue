<template>
	<v-card color="transparent" flat>
		<v-card-title>
			Top 50 Commentators
		</v-card-title>
		<v-card-text>
			<v-list class="py-0" outlined
				v-if="topCommentators"
			>
				<v-list-item
					v-for="(user, index) in topCommentators"
					:key="user.id"
					:class="{
						'border-bottom': topCommentators.length !== index +1
					}"
					link
				>
					<v-list-item-avatar size="40" color="grey lighten-2">
						<v-img
							v-if="user.avatar"
							:src="$link(user.avatar)"
						/>
						<div class="full-width text-center px22 grey--text text--darken-2">
							{{ user.username[0].toUpperCase() }}
						</div>
					</v-list-item-avatar>
					<v-list-item-content @click="$router.push({name: 'User Overview', params: {username: user.username}})">
						<v-list-item-title class="py-1 px16 weight-500">{{ user.display_name || user.username }}</v-list-item-title>
						<v-list-item-subtitle>
							<v-chip small color="orange"
								class="mx-1"
								outlined
							>
								<v-icon left size="20">mdi-arrow-up</v-icon>
								<b>{{user.discussions}}</b><span class="pl-1">Discussions</span>
							</v-chip>
							<v-chip small color="primary"
								class="mx-1"
								outlined
							>
								<v-icon left size="20">mdi-arrow-up</v-icon>
								<b>{{user.supports}}</b><span class="pl-1">Supports</span>
							</v-chip>
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action v-if="isNotMe(user)">
						<v-btn rounded
							v-if="isFollowing(user)"
							depressed color="primary"
							@click="unFollow(user)"
						>
							unfollow
						</v-btn>
						<v-btn rounded
							v-else
							depressed color="primary lighten-1"
							@click="followUser(user)"
						>
							follow
						</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card-text>
		<confirm-dialog @refresh="refreshMe()" />
	</v-card>
</template>

<script>
import TopViewMixin from "@/mixin/TopViewMixin.js";
import FollowMixin from "@/mixin/FollowMixin.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

export default {
	name: "TopCommentators",
	mixins: [TopViewMixin, FollowMixin, RefreshMeMixin],
	computed: {
		topCommentators() {
			return this.topItems["commentators"]
		}
	}
}
</script>

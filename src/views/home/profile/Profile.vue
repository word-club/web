<template>
	<div>
		<div class="top-tab white">
			<v-card max-width="800"
				class="mx-auto" tile
				flat
			>
				<v-card-actions class="pb-0 pt-4">
					<div
						class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Overview'}"
						@click="toProfileOverview(currentUser.username)"
					>
						Overview
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Posts'}"
						@click="toProfilePosts(currentUser.username)"
					>
						Posts
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Comments'}"
						@click="toProfileComments(currentUser.username)"
					>
						Comments
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Saved'}"
						@click="toProfileSaved(currentUser.username)"
					>
						Saved
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Hidden'}"
						@click="toProfileHidden(currentUser.username)"
					>
						Hidded
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Upvoted'}"
						@click="toProfileUpVoted(currentUser.username)"
					>
						Upvoted
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Downvoted'}"
						@click="toProfileDownVoted(currentUser.username)"
					>
						Downvoted
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Awards Received'}"
						@click="toProfileAwardsReceived(currentUser.username)"
					>
						Awards Received
					</div>
					<div class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === 'Profile Awards Given'}"
						@click="toProfileAwardsGiven(currentUser.username)"
					>
						Awards Given
					</div>
				</v-card-actions>
			</v-card>
		</div>
		<v-card
			flat tile
			max-width="800" class="mx-auto"
			color="transparent"
		>
			<v-card-text class="pb-0">
				<router-view />
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "Profile",
	mixins: [RouteMixin],
	props: {},
	data: () => ({}),
	computed: {
		...mapGetters({
			currentUser: "user/current"
		})
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.top-tab {
	width: 100%;
.profile-top-btn {
	text-transform: uppercase;
	margin: 0 6px;
	font-size: 14px;
	font-weight: 500;
	color: grey;
	padding: 0 4px 4px 4px;
}
.profile-top-btn:hover {
	color: #1d1d1d
}
.profile-top-btn-active {
	color: #1d1d1d;
	border-bottom: 3px solid #1d1d1d;
	pointer-events: none;
}
}
</style>

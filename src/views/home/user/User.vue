<template>
	<div>
		<div class="top-tab white">
			<v-card max-width="800"
				class="mx-auto" tile
				flat
			>
				<v-card-actions class="pb-0 pt-4">
					<div
						class="user-top-btn cursor"
						:class="{'user-top-btn-active': $route.name === 'User Overview'}"
						@click="toUserOverview(userInView.username)"
					>
						Overview
					</div>
					<div class="user-top-btn cursor"
						:class="{'user-top-btn-active': $route.name === 'User Posts'}"
						@click="toUserPosts(userInView.username)"
					>
						Posts
					</div>
					<div class="user-top-btn cursor"
						:class="{'user-top-btn-active': $route.name === 'User Comments'}"
						@click="toUserComments(userInView.username)"
					>
						Comments
					</div>
					<div class="user-top-btn cursor"
						:class="{'user-top-btn-active': $route.name === 'User Awards'}"
						@click="toUserAwards(userInView.username)"
					>
						Awards Received
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
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "User",
	mixins: [RouteMixin],
	data: () => ({}),
	computed: {
		...mapGetters({
			userInView: "user/inView"
		})
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.top-tab {
	width: 100%;
	.user-top-btn {
		text-transform: uppercase;
		margin: 0 6px;
		font-size: 14px;
		font-weight: 500;
		color: grey;
		padding: 0 4px 4px 4px;
	}
	.user-top-btn:hover {
		color: #1d1d1d
	}
	.user-top-btn-active {
		color: #1d1d1d;
		border-bottom: 3px solid #1d1d1d;
		pointer-events: none;
	}
}
</style>

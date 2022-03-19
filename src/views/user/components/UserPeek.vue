<template>
	<v-card outlined
		max-width="350"
		v-if="user"
	>
		<v-card flat
			color="primary" height="70"
			class="rounded-b-0"
			:img="user.cover ? user.cover : ''"
		/>
		<v-card-text class="d-flex justify-center avatar-line">
			<v-avatar size="200"
				color="grey"
				class="profile-avatar"
			>
				<v-img v-if="user.avatar"
					:src="user.avatar"
				/>
				<div v-else class="full-width text-center white--text display-3">
					{{user.username[0].toUpperCase()}}
				</div>
			</v-avatar>
		</v-card-text>
		<v-card-title class="d-flex justify-center">
			<h2>{{ user.username }}</h2>
		</v-card-title>
		<v-card-subtitle class="d-flex justify-center px15 weight-500">
			<div>
				u/{{ user.username }}
			</div>
			<v-icon>mdi-circle-small</v-icon>
			<div>{{ $moment(user.date_joined).fromNow() }}</div>
		</v-card-subtitle>
		<v-card-text class="px-4 py-0 d-flex justify-space-between">
			<div>
				<div class="px16 weight-500">
					Likes
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-2"
					>
						mdi-thumb-up-outline
					</v-icon>
					<div class="pl-3 px14 weight-500">
						{{ userReactions || 0 }}
					</div>
				</div>
			</div>
			<div>
				<div class="px16 weight-500">
					Cake day
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-2"
					>
						mdi-cake-variant
					</v-icon>
					<div class="pl-3 px14 weight-500">
						<span v-if="user.birth_date">
							{{ $moment(user.birth_date).format('YYYY-M-D') }}
						</span>
						<span v-else>-</span>
					</div>
				</div>
			</div>
		</v-card-text>
		<v-card-text class="px-2 px12 d-flex"  v-if="user.bio">
			<v-avatar size="30"
				color="grey"
			/>
			<div class="pl-2 px14">
				{{ user.bio }}
			</div>
		</v-card-text>
		<div class="py-2" v-else />
		<v-card-actions class="px-4 py-0 justify-space-between flex-wrap">
			<v-btn
				v-if="isFollowing(user)"
				depressed dark
				color="primary lighten-1" rounded
				@click="unFollow(user)"
			>
				unfollow
			</v-btn>
			<v-btn
				v-else
				depressed dark
				color="primary" rounded
				@click="followUser(user)"
			>
				follow
			</v-btn>
			<v-btn depressed
				color="primary" rounded
				dark
			>
				Message
			</v-btn>
		</v-card-actions>

		<div class="py-2" />
		<v-divider />
		<v-card-actions class="px-6 pt-2">
			<v-spacer />
			<v-scale-transition>
				<div
					v-if="!moreOptions"
					class="px14 weight-600 cursor primary--text"
					@click="moreOptions = true"
				>
					More Options
				</div>
			</v-scale-transition>
		</v-card-actions>
		<v-scale-transition>
			<div v-if="moreOptions"
				class="px-4"
			>
				<div>
					<v-btn rounded text
						small color="primary"
						class="weight-600"
					>
						Send Message
					</v-btn>
				</div>
				<div class="py-1">
					<v-btn rounded text
						small color="primary"
						class="weight-600"
					>
						Block User
					</v-btn>
				</div>
				<div>
					<v-btn rounded text
						small color="primary"
						class="weight-600"
					>
						Report User
					</v-btn>
				</div>
			</div>
		</v-scale-transition>
		<v-scale-transition>
			<v-card-actions
				v-if="moreOptions"
			>
				<v-spacer />
				<div
					class="px14 weight-600 cursor primary--text"
					@click="moreOptions = false"
				>
					Fewer Options
				</div>
			</v-card-actions>
		</v-scale-transition>
		<confirm-dialog @refreshMe="refreshMe"
			@refresh="fetchDetail('user')"
		/>
	</v-card>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
import FetchMixin from "@/mixin/FetchMixin.js";
import FollowMixin from "@/mixin/FollowMixin.js";

export default {
	name: "UserPeek",
	mixins: [PostMixin, Snack, RefreshMeMixin, FetchMixin, FollowMixin],
	data: () => ({
		moreOptions: false
	}),
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		userReactions() {
			if (!this.user?.profile) return
			return this.user.profile.popularity +
				this.user.profile.supports
		}
	},
	methods: {
		...mapMutations("user", ["SET_TO_VIEW"]),
	},
}
</script>

<style scoped>
.avatar-line {
	margin-top: -70px
}
.profile-avatar {
	border: 4px solid whitesmoke !important;
}
</style>

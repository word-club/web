<template>
	<v-card outlined
		max-width="350">
		<v-card flat
			color="primary" height="70"
			class="rounded-b-0"
			:img="user.cover ? user.cover.image : ''"
		/>
		<v-card-text class="d-flex justify-center avatar-line">
			<v-avatar size="200"
				color="grey"
				class="profile-avatar"
			>
				<v-img v-if="user.avatar"
					:src="user.avatar.image"
				/>
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
			<div>{{ $moment(user.last_active_at).fromNow() }}</div>
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
						5,555
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
						<span v-if="user.profile && user.profile.birth_date">
							{{ $moment(user.profile.birth_date).format('YYYY-M-D') }}
						</span>
						<span v-else>-</span>
					</div>
				</div>
			</div>
		</v-card-text>
		<v-card-text class="px-2 px12 d-flex">
			<v-avatar size="30"
				color="grey"
			/>
			<div class="pl-2 px14">
				Received the Helpful Award and more in the past 30 days
			</div>
		</v-card-text>
		<v-card-actions class="px-4 py-0 justify-space-between flex-wrap">
			<v-btn depressed
				color="primary" rounded
				dark
			>
				Follow
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
			<div
				v-if="!moreOptions"
				class="px14 weight-600 cursor primary--text"
				@click="moreOptions = true"
			>
				More Options
			</div>
		</v-card-actions>
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
	</v-card>
</template>

<script>

import {mapGetters} from "vuex";

export default {
	name: "UserPeek",
	data: () => ({
		moreOptions: false
	}),
	computed: {
		...mapGetters({
			user: "user/inView"
		})
	},
	methods: {}
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

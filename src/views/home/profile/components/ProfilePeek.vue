<template>
	<v-card outlined>
		<v-card
			flat class="rounded-b-0"
			color="primary"
			height="150"
			:img="userInView.cover.image"
		>
			<v-btn icon
				dark
			>
				<v-icon>mdi-camera-outline</v-icon>
			</v-btn>
		</v-card>
		<v-card-text class="pa-0 d-flex justify-center avatar-line">
			<v-avatar size="200" color="grey"
				class="profile-avatar"
			>
				<v-img :src="userInView.avatar.image" />
			</v-avatar>
		</v-card-text>
		<v-card-title class="d-flex justify-center">
			{{ userInView.username }}
		</v-card-title>
		<v-card-subtitle class="d-flex justify-center align-center">
			<div>#/{{ userInView.username }}</div>
			<v-icon>mdi-circle-small</v-icon>
			<div>{{ $moment(userInView.last_active_at).fromNow() }}</div>
		</v-card-subtitle>
		<v-card-text class="px-5 py-0 d-flex justify-space-between">
			<div>
				<div class="px14 weight-500">
					Likes
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-2"
					>
						mdi-thumb-up-outline
					</v-icon>
					<div class="pl-3 px12">
						5,555
					</div>
				</div>
			</div>
			<div>
				<div class="px14 weight-500">
					Cake day
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-2"
					>
						mdi-cake-variant
					</v-icon>
					<div class="pl-3 px12">
						{{ $moment(userInView.profile.birth_date).format('YYYY-M-D') }}
					</div>
				</div>
			</div>
		</v-card-text>
		<v-card-text>
			<v-btn block color="primary"
				dark depressed
				rounded class="px14 weight-700 text-capitalize"
				to="/submit"
			>
				New Post
			</v-btn>
		</v-card-text>
		<v-card-actions class="px-5">
			<v-spacer />
			<div v-if="!moreOptions"
				class="action-btn primary--text cursor"
				@click="moreOptions = true"
			>
				More Options
			</div>
		</v-card-actions>
		<v-card-text v-if="moreOptions">
			<v-btn text
				rounded small
			>
				Profile Moderation
			</v-btn>
		</v-card-text>
		<v-card-actions>
			<v-spacer />
			<div v-if="moreOptions"
				class="action-btn primary--text cursor"
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
	name: "ProfilePeek",
	props: {},
	data: () => ({
		moreOptions: false,
	}),
	computed: {
		...mapGetters({
			userInView: "user/inView"
		})
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.avatar-line {
	margin-top: -50px;
	.profile-avatar {
		border: 4px solid whitesmoke !important;
	}
}
.action-btn {
	padding: 10px;
	font-weight: 600;
}
</style>

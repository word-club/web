<template>
	<v-card outlined>
		<v-card flat
			color="primary" height="70"
			class="rounded-b-0"
			:img="userInView.active_cover.image"
		/>
		<v-card-text class="d-flex justify-center avatar-line">
			<v-avatar size="200"
				color="grey"
				class="profile-avatar"
			>
				<v-img :src="userInView.active_avatar.image" />
			</v-avatar>
		</v-card-text>
		<v-card-title class="d-flex justify-center">
			{{ userInView.username }}
		</v-card-title>
		<v-card-subtitle class="d-flex justify-center">
			<div>
				#/{{ userInView.username }}
			</div>
			<v-icon>mdi-circle-small</v-icon>
			<div>{{ $moment(userInView.last_active_at).fromNow() }}</div>
		</v-card-subtitle>
		<v-card-text class="px-3 py-0 d-flex justify-space-between">
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
		<v-card-text class="px-2 px12 d-flex">
			<v-avatar size="20"
				color="grey"
			/>
			<div class="pl-2">
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
	props: {},
	data: () => ({
		moreOptions: false
	}),
	computed: {
		...mapGetters({
			userInView: "user/inView"
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

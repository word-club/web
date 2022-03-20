<template>
	<v-card outlined v-if="user">
		<input
			v-show="false"
			id="avatar-input"
			ref="avatarInput"
			class="file-input"
			type="file"
			accept="image/*"
			@change="avatarInputChanged"
		>
		<input
			v-show="false"
			id="cover-input"
			ref="coverInput"
			class="file-input"
			type="file"
			accept="image/*"
			@change="coverInputChanged"
		>
		<v-card
			flat class="rounded-b-0"
			color="primary"
			height="150"
			:img="coverUrl || ''"
		/>
		<v-card-text class="pa-0 d-flex justify-center avatar-line">
			<v-avatar size="200"
				:color="(avatarUrl) ? 'white': 'grey'"
				class="profile-avatar"
			>
				<v-img v-if="avatarUrl" :src="avatarUrl" />
				<div v-else class="full-width text-center display-3 white--text">{{user.username[0].toUpperCase()}}</div>
			</v-avatar>
		</v-card-text>
		<v-card-title class="d-flex justify-center">
			<h2>{{ user.username }}</h2>
		</v-card-title>
		<v-card-subtitle class="d-flex justify-center align-center">
			<div class="px16">
				u/{{ user.username }}
			</div>
			<v-icon size="6"
				class="px-2 mt-1"
			>
				mdi-circle
			</v-icon>
			<div class="px16">
				{{ $moment(user.last_login).fromNow() }}
			</div>
		</v-card-subtitle>
		<v-card-text class="px-5 py-0 d-flex justify-space-between">
			<div>
				<div class="px16 weight-500">
					Upvotes
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-1"
					>
						mdi-arrow-up-bold
					</v-icon>
					<div class="pl-3 px14 weight-500">
						{{ getUpvotes }}
					</div>
				</div>
			</div>
			<div>
				<div class="px16 weight-500">
					Cake day
				</div>
				<div class="d-flex align-center">
					<v-icon small
						color="primary lighten-1"
					>
						mdi-cake-variant
					</v-icon>
					<div class="pl-3 px14 weight-500">
						{{ getBirthDate }}
					</div>
				</div>
			</div>
		</v-card-text>
		<v-card-text>
			<v-btn block color="primary"
				dark depressed
				rounded class="px14 weight-700 text-capitalize"
				:to="{name: 'Submit'}"
			>
				New Post
			</v-btn>
		</v-card-text>
		<v-card-actions class="px-5">
			<v-btn icon color="primary"
				:to="{name: 'User Settings Profile'}"
			><v-icon>mdi-cog-outline</v-icon></v-btn>
			<v-spacer />
			<div v-if="!moreOptions"
				class="action-btn primary--text cursor"
				@click="moreOptions = true"
			>
				More Options
			</div>
		</v-card-actions>
		<v-scale-transition>
			<v-card-actions v-if="moreOptions" class="flex-wrap">
				<v-btn rounded small
					class="ma-1 primary--text"
					@click="$refs.avatarInput.click()"
				>
					Add avatar
				</v-btn>
				<v-btn rounded small
					class="ma-1 teal--text"
					@click="$refs.coverInput.click()"
				>
					Add cover
				</v-btn>
				<v-btn rounded class="ma-1 info--text" small :to="{name: 'User Settings Profile'}">Edit Profile</v-btn>
				<v-btn rounded class="ma-1" block :to="{name: 'User Settings Account'}">Settings</v-btn>
			</v-card-actions>
		</v-scale-transition>
		<v-card-actions class="py-0">
			<v-spacer />
			<div v-if="moreOptions"
				class="action-btn primary--text cursor"
				@click="moreOptions = false"
			>
				Fewer Options
			</div>
		</v-card-actions>
		<v-fab-transition>
			<v-card-actions v-if="uploadMode">
				<v-btn block rounded @click="save" color="primary">
					Save {{ (avatarMode) ? 'Avatar' : 'Cover' }}
				</v-btn>
			</v-card-actions>
		</v-fab-transition>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import AvatarCoverMixin from "@/mixin/AvatarCoverMixin.js";

export default {
	name: "ProfilePeek",
	mixins: [AvatarCoverMixin, PostMixin, Snack],
	data: () => ({
		moreOptions: false
	}),
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		getBirthDate() {
			const date = this.user.profile.birth_date
			if (!date) return "-"
			return this.$moment(date).format("YYYY-M-D")
		},
		getUpvotes() {
			const publications = this.user["my_publications"]
			const comments = this.user["my_comments"]
			const items = publications.concat(comments)
			let count = 0
			items.forEach(item => {
				count += item.popularity
			})
			return count
		}
	}
}
</script>

<style scoped lang="scss">
.avatar-line {
	margin-top: -50px;
	.profile-avatar {
		border: 4px solid whitesmoke !important;
		position: relative;
		.clear-btn {
			position: absolute;
			bottom: -2px;
		}
	}
}
.action-btn {
	padding: 10px;
	font-weight: 600;
}
</style>

<template>
	<v-responsive
		v-if="$route.name"
		:max-width="$vuetify.breakpoint.xs ? '' : 200"
		height="100%"
		class="d-flex align-center justify-center px-2"
	>
		<v-text-field
			id="community-search"
			v-model="search"
			dense outlined hide-details
			clearable aria-autocomplete="search_communities"
			:placeholder="placeHolder"
			color="primary" full-width
		>
			<template #prepend-inner>
				<v-icon v-if="routeNameIs('Home')" size="22"> mdi-home</v-icon>
				<wc-avatar
					v-else-if="isUserRelatedRoutes && userInView"
					size="22"
					:color="(userInView && getAvatarFromUserInView) ? 'white': 'primary'"
					class="mt-0 mb-2"
					:src="getAvatarFromUserInView"
					:text="userInView.username"
					span-class="white--text"
				/>
				<wc-avatar
					v-else-if="communityInView"
					size="22"
					:color="communityInView.theme.color"
					style="margin-top: 2px;"
					:src="getCommunityInViewAvatar"
					:text="communityInView.name"
					span-class="white--text"
				/>
			</template>
		</v-text-field>
	</v-responsive>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CommunitySearch",
	data: () => ({
		search: null
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
			userInView: "user/inView",
			communityInView: "community/inView",
		}),
		placeHolder() {
			if (this.userInView) {
				let displayName = this.userInView.profile.display_name
				displayName = displayName ? displayName : this.userInView.username
				return "u/" + displayName
			} else if (this.communityInView) {
				return "c/" + this.communityInView.unique_id;
			} else {
				return this.$route.name;
			}
		},
		getCommunityInViewAvatar() {
			if (this.communityInView) {
				const avatar = this.communityInView.avatars.find(av => av.is_active);
				if (avatar) return this.$link(avatar.image)
				return null
			} else {
				return null;
			}
		},
		getAvatarFromUserInView() {
			if (this.userInView) {
				const avatar = this.userInView.profile.avatars.find(av => av.is_active)
				if (avatar) return this.$link(avatar.image)
				return false
			} else return false
		},
	},
	methods: {
		routeNameIs(name) {
			if (this.$route && this.$route.name) {
				return this.$route.name === name;
			}
			return false;
		},
		isUserRelatedRoutes() {
			if (this.$route && this.$route.name) {
				let check = this.$route.name.startsWith("User");
				if (!check) {
					check = this.$route.name.startsWith("Profile");
				} return check;
			}
			return false;
		},
	}
}
</script>

<style scoped lang="scss">
::v-deep.v-text-field {
	#community-search {
		font-size: .94rem;
	}
	fieldset {
		border: none;
	}
	&:hover {
		fieldset {
			border: 1px solid grey;
		}
	}
}
</style>

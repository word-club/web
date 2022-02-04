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
				<v-avatar
					v-if="routeNameStartsWith('User') && userInView"
					size="30"
					:color="(userInView && userInView.avatar) ? 'white': 'primary'"
					class="mt-0 mb-2"
				>
					<template #default>
						<v-img
							v-if="userInView.avatar"
							:src="userInView.avatar.image"
						/>
						<div v-else class="full-width white--text text-center weight-500">
							{{userInView.username[0].toUpperCase()}}
						</div>
					</template>
				</v-avatar>
				<v-avatar
					v-if="communityInView"
					size="30"
					:color="(communityInView && communityInView.avatar)
						? 'white': communityInView.theme.color"
					class="mt-0 mb-2"
				>
					<template #default>
						<v-img
							v-if="communityInView.avatar"
							:src="$link(communityInView.avatar.image)"
						/>
						<div v-else class="full-width white--text text-center weight-500">
							{{communityInView.name[0].toUpperCase()}}
						</div>
					</template>
				</v-avatar>
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
				return "u/" + this.userInView.username;
			} else if (this.communityInView) {
				return "c/" + this.communityInView.unique_id;
			} else {
				return this.$route.name;
			}
		},
	},
	methods: {
		routeNameIs(name) {
			if (this.$route && this.$route.name) {
				return this.$route.name === name;
			}
			return false;
		},
		routeNameStartsWith(text) {
			if (this.$route && this.$route.name) {
				return this.$route.name.startsWith(text);
			}
			return false;
		},
	}
}
</script>

<style scoped lang="scss">

</style>

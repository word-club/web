<template>
	<div>
		<div class="top-tab white">
			<v-card max-width="800"
				class="mx-auto" tile
				flat
			>
				<v-card-actions class="pb-0 pt-4 overflow-x-auto">
					<div
						v-for="(item, index) in tabs"
						:key="index"
						class="profile-top-btn cursor"
						:class="{'profile-top-btn-active': $route.name === item}"
						@click="$router.push({name: item})"
					>
						{{ item.split(" ")[1] }}
					</div>
				</v-card-actions>
			</v-card>
		</div>
		<v-card
			flat tile color="primary"
			max-width="800" class="mx-auto"
			:loading="refreshing"
			style="background-color: transparent!important;"
		>
			<v-card-text class="pb-0">
				<transition name="view">
					<router-view />
				</transition>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

export default {
	name: "Profile",
	mixins: [RouteMixin, RefreshMeMixin],
	data: () => ({
		tabs: [
			"Profile Overview",
			"Profile Recent",
			"Profile Posts",
			"Profile Comments",
			"Profile Saved",
			"Profile Shared",
			"Profile Hidden",
			"Profile Upvoted",
			"Profile Downvoted",
		]
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
		})
	},
	async created() {
		this.refreshing = true
		await this.$store.dispatch("user/setInView", this.currentUser)
		this.refreshing = false
	}
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
		color: var(--primary)
	}
	.profile-top-btn-active {
		color: var(--primary);
		border-bottom: 3px solid var(--primary);
		pointer-events: none;
	}
}
</style>
<style lang="sass">
.view-enter-active, .view-leave-active
	transition: opacity .6s ease-in-out, transform .6s ease
.view-enter-active
	transition-delay: .5s
.view-enter, .view-leave-to
	opacity: 0
.view-enter-to, .view-leave
	opacity: 1
</style>

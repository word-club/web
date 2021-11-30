<template>
	<v-card-title class="pa-0 white">
		<v-card max-width="800"
			width="800"
			class="mx-auto"
			flat color="white"
		>
			<v-card-text class="pa-3 pt-0 pb-1 d-flex align-center"
				style="width: 100%"
			>
				<v-avatar
					class="community-avatar"
					size="80"
					:color="(community.avatar) ? 'white' : community.theme.color"
				>
					<v-img v-if="community.avatar"
						:src="$link(community.avatar.image)"
					/>
					<div v-else
						class="full-width display-1 text-center white--text"
					>
						{{community.name[0].toUpperCase()}}
					</div>
				</v-avatar>
				<div class="px-2" />
				<div class="px24">
					{{ community.name }}
				</div>
				<v-spacer />
				<div class="px-2" />
				<v-btn
					v-if="subscription && subscription.is_approved"
					rounded depressed :color="community.theme.color"
					@click="unSubscribe(community)" dark
				>
					Joined
				</v-btn>
				<v-btn
					v-else outlined rounded
					:color="community.theme.color"
					@click="subscribe(community)" dark
				>
					Join
				</v-btn>
				<div class="px-2" />
				<v-btn
					v-if="subscription && !subscription.disable_notification"
					icon :color="community.theme.color"
					@click="disableNotification(community)"
				>
					<v-icon>mdi-bell</v-icon>
				</v-btn>
				<v-btn
					v-else icon :color="community.theme.color"
					@click="enableNotification(community)"
				>
					<v-icon>mdi-bell-outline</v-icon>
				</v-btn>
			</v-card-text>
			<community-tab />
		</v-card>
	</v-card-title>
</template>

<script>
import {mapGetters} from "vuex";
import CommunityTab from "@/views/community/CommunityTab.vue";
import CommunityActions from "@/mixin/CommunityActions.js";

export default {
	name: "DetailTitle",
	mixins: [CommunityActions],
	components: {CommunityTab},
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		subscription() {
			if (!this.community) return false
			return this.community.subscription
		}
	},
}
</script>

<style scoped lang="scss">
.community-avatar {
	border: 4px solid white !important;
	margin-top: -10px;
}
.px24 {
	font-size: 24px;
}
</style>

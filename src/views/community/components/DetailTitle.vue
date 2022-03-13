<template>
	<v-card-title class="pa-0 white">
		<confirm-dialog
			@refreshMe="refreshMe"
			@refreshCommunity="$emit('refresh')"
		/>
		<v-card max-width="800"
			width="800"
			class="mx-auto"
			flat color="white"
		>
			<v-card-text
				class="pa-3 pt-0 pb-1 d-flex align-center full-width"
				v-if="community"
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
				<div class="d-flex"
					v-if="$vuetify.breakpoint.smAndUp"
				>
					<v-btn
						v-if="subscription && subscription.is_approved"
						rounded depressed :color="community.theme.color"
						@click="unSubscribe(community)" dark
					>
						Joined
					</v-btn>
					<v-tooltip v-else-if="subscription && !subscription.is_approved" bottom>
						<template #activator="{on, attrs}">
							<v-btn
								@click="unSubscribe(community)"
								:color="community.theme.color + ' lighten-1'"
								v-bind="attrs"
								v-on="on" rounded
							>
								Requested
							</v-btn>
						</template>
						<span>Subscription request is in approval progress.</span>
						<span class="pl-1">Click to revoke your request.</span>
					</v-tooltip>
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
						v-if="subscription && subscription.disable_notification"
						icon :color="community.theme.color"
						@click="enableNotification(community)"
					>
						<v-icon>mdi-bell-outline</v-icon>
					</v-btn>
				</div>
				<v-menu
					v-else
					bottom
					nudge-bottom="38"
					nudge-right="-145"
				>
					<template #activator="{on, attrs}">
						<v-btn icon
							v-bind="attrs"
							v-on="on"
						>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>
					<v-list dense outlined rounded>
						<v-list-item
							v-if="!subscription"
							@click="subscribe()"
						>
							Request Subscription
						</v-list-item>
						<v-list-item
							v-if="subscription && !subscription.is_approved"
							@click="unSubscribe()"
						>
							Revoke Subscription
						</v-list-item>
						<v-list-item
							v-if="subscription && !subscription.disable_notification"
							@click="disableNotification()"
						>
							Disable Notifications
						</v-list-item>
						<v-list-item
							v-if="subscription && subscription.disable_notification"
							@click="enableNotification()"
						>
							Enable Notifications
						</v-list-item>
						<v-list-item @click="reportCommunity()">
							Report Community
						</v-list-item>
						<v-list-item
							v-if="subscription && subscription.is_approved"
							@click="unSubscribe()"
						>
							Unsubscribe
						</v-list-item>
					</v-list>
				</v-menu>
			</v-card-text>
			<community-tab />
		</v-card>
	</v-card-title>
</template>

<script>
import {mapGetters} from "vuex";
import CommunityActions from "@/mixin/CommunityActions.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
import FetchMixin from "@/mixin/FetchMixin.js";

export default {
	name: "DetailTitle",
	emits: ["refresh"],
	mixins: [CommunityActions, RefreshMeMixin, FetchMixin],
	components: {
		CommunityTab: () => import("@/views/community/components/CommunityTab")
	},
	computed: {
		...mapGetters({
			community: "community/inView",
			currentUser: "user/current"
		}),
		subscription() {
			if (!this.community) return false
			if (!this.currentUser) return false
			return this.currentUser["my_subscriptions"].find(s => s.community === this.community.id && s.is_approved && !s.is_banned)
		}
	}
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

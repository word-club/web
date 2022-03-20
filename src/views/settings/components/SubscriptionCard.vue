<template>
	<v-card
		:color="`${theme.color || 'primary'} lighten-4`"
	>
		<v-card-title class="d-flex align-center flex-wrap">
			<wc-avatar
				:src="community.avatar"
				:text="community.name"
				:color="theme.color"
				size="30" span-class="white--text"
			/>
			<div class="px-1 cursor" @click="toCommunityDetail(community.unique_id)">{{community.name}}</div>
			<v-icon v-if="community.is_authorized"
				color="white" class="mx-1"
			>mdi-check-circle</v-icon>
			<v-chip label small dark
				:color="`${theme.color || 'primary'} darken-2`"
			>{{community.type}}</v-chip>
			<v-spacer />
			<v-chip small>{{ community.unique_id }}</v-chip>
		</v-card-title>
		<v-card-text>
			<h3 class="pb-2">Subscription Details</h3>

			<v-list dense rounded
				color="transparent"
			>
				<v-list-item v-if="subscription.is_banned">
					<v-list-item-icon><v-icon>mdi-cancel</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>BAN Status</v-list-item-title>
						<v-list-item-content>
							<div class="pb-2">
								You have been <b>banned</b> from this community.
								This can be because of your non excusable activities in the community.
								Like, spamming, trolling, etc.
								<br>
								From now on, you'll not be view or publish any content with respect to this community.
							</div>
							<div class="reason">
								<b>Here is what the community moderators say about the BAN:</b>
								<br>
								<div class="py-2">
									{{subscription.ban_reason}}
								</div>
							</div>
							<div
								class="d-flex align-center rounded-xl pa-1 px-4 white--text error"
							>
								<span class="weight-500">BANNED</span>
								<v-spacer />
								<v-icon right dark>
									mdi-alert
								</v-icon>
							</div>
						</v-list-item-content>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-else>
					<v-list-item-icon><v-icon>mdi-check-circle</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Is your subscription approved by the community moderators?</v-list-item-title>
						<v-list-item-content>
							<div
								v-if="subscription.is_approved"
								:class="subscription.is_approved ? 'success' : 'warning'"
								class="d-flex align-center rounded-xl pa-1 px-4 white--text"
							>
								<span class="weight-500">{{ subscription.is_approved ? 'Accepted' : 'Pending' }}</span>
								<v-spacer />
								<v-icon right dark>
									{{subscription.is_approved ? 'mdi-check-circle' : 'mdi-close-circle'}}
								</v-icon>
							</div>
						</v-list-item-content>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="!subscription.is_banned">
					<v-list-item-icon><v-icon>mdi-bell</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Notifications</v-list-item-title>
						<v-list-item-content>
							Notifications for this community is currently {{ subscription.disable_notification ? 'disabled' : 'enabled' }} for you.
						</v-list-item-content>
					</v-list-item-content>
					<v-list-item-action>
						<v-fade-transition>
							<v-btn
								v-if="subscription.disable_notification"
								@click="enableNotification(subscription)"
								outlined rounded :color="theme.color">
								<v-icon small>mdi-bell</v-icon>
							</v-btn>
							<v-btn
								v-else @click="disableNotification(subscription)"
								outlined rounded :color="theme.color">
								<v-icon small>mdi-bell-off</v-icon>
							</v-btn>
						</v-fade-transition>
					</v-list-item-action>
				</v-list-item>
				<v-list-item v-if="isModerating(community)">
					<v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Moderation</v-list-item-title>
						<v-list-item-content>
							<div v-if="isModerating(community).is_accepted">
								You're in the <b>{{isModerating(community).role === 'mod' ? '' : 'Sub' }} Moderator</b> team of this community.
								<br>
								<b>Date Joined:</b> {{$moment(isModerating(community).accepted_at).format('LLLL')}}
							</div>
						</v-list-item-content>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card-text>
		<v-card-actions>
			<v-chip v-if="isMyCommunity(community)">
				My Community
			</v-chip>
			<v-spacer />
			<v-btn v-if="!isMyCommunity(community)" color="pink" text
				@click="unSubscribe(subscription)"
			>Remove Subscription</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import CommunityActions from "@/mixin/CommunityActions.js";
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "SubscriptionCard",
	mixins: [CommunityActions, RouteMixin],
	props: {
		subscription: {
			type: Object,
			required: true
		}
	},
	computed: {
		...mapGetters({
			user: "user/current",
		}),
		community() {
			return this.subscription.community
		},
		theme() {
			return this.subscription.community.theme
		}
	},
	methods: {
		isModerating(community) {
			return this.user.managed_communities.find(c => c.community.id === community.id)
		},
		isMyCommunity(community) {
			return this.user.my_communities.find(c => c.id === community.id)
		}
	}
}
</script>

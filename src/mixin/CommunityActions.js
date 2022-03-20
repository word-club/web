import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
import FetchMixin from "@/mixin/FetchMixin.js";
import {mapMutations} from "vuex";
import DeleteMixin from "@/mixin/DeleteMixin.js";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

const CommunityActions = {
	mixins: [PostMixin, Snack, RefreshMeMixin, FetchMixin, DeleteMixin, ConfirmDialogMixin],
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
		async unSubscribe(subscription) {
			await this.openConfirmDialog(
				`Are you sure you want to revoke your subscription for community <code><b>${subscription.community.name}</b></code>?`,
				"DELETE",
				this.$util.format(this.$urls.community.subscription.detail, subscription.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Subscription revoked successfully!",
				"Sorry! Subscription couldn't be revoked!"
			)
		},
		async subscribe(community) {
			await this.openConfirmDialog(
				"Are you sure you want to subscribe this community?",
				"POST",
				this.$util.format(this.$urls.community.subscription.add, community.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Subscription added successfully!",
				"Sorry! Subscription couldn't be added!"
			)
		},
		async disableNotification(subscription) {
			await this.openConfirmDialog(
				`Are you sure you want to disable notifications for the community <code>${subscription.community.name}</code>?`,
				"POST",
				this.$util.format(this.$urls.community.subscription.notifications.disable, subscription.id),
				["refreshMe", "refreshCommunity"],
				`Cheers! Notifications for the community ${subscription.community.name} is disabled successfully!`,
				"Sorry! Notifications couldn't be disabled!"
			)
		},
		async enableNotification(subscription) {
			await this.openConfirmDialog(
				`Are you sure you want to enable notifications for the community <code>${subscription.community.name}</code>?`,
				"DELETE",
				this.$util.format(this.$urls.community.subscription.notifications.removeDisable, subscription.id),
				["refreshMe", "refreshCommunity"],
				`Cheers! Notifications for the community ${subscription.community.name} is enabled successfully!`,
				"Sorry! Notifications couldn't be enabled!"
			)
		},
		reportCommunity() {
			// TODO: open report dialog
			// TODO: implement report dialog
		}
	}
}

export default CommunityActions

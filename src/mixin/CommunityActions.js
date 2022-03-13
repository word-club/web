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
		async unSubscribe(item) {
			await this.openConfirmDialog(
				"Are you sure you want to revoke your subscription?",
				"DELETE",
				this.$util.format(this.$urls.community.subscription.detail, item.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Subscription revoked successfully!",
				"Sorry! Subscription couldn't be revoked!"
			)
		},
		async subscribe(item) {
			await this.openConfirmDialog(
				"Are you sure you want to subscribe this community?",
				"POST",
				this.$util.format(this.$urls.community.subscription.add, item.id),
				["refreshMe", "refreshCommunity"],
				"Cheers! Subscription added successfully!",
				"Sorry! Subscription couldn't be added!"
			)
		},
		async disableNotification(item) {
			await this.openConfirmDialog(
				`Are you sure you want to disable notifications for the community <code>${item.name}</code>?`,
				"POST",
				this.$util.format(this.$urls.community.subscription.notifications.disable, item.id),
				["refreshMe", "refreshCommunity"],
				`Cheers! Notifications for the community ${item.name} is disabled successfully!`,
				"Sorry! Notifications couldn't be disabled!"
			)
		},
		async enableNotification(item) {
			await this.openConfirmDialog(
				`Are you sure you want to enable notifications for the community <code>${item.name}</code>?`,
				"DELETE",
				this.$util.format(this.$urls.community.subscription.notifications.removeDisable, item.subscription.id),
				["refreshMe", "refreshCommunity"],
				`Cheers! Notifications for the community ${item.name} is enabled successfully!`,
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

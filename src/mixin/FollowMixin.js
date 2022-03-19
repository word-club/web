import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";
import {mapGetters} from "vuex";

const FollowMixin = {
	mixins: [ConfirmDialogMixin],
	computed: {
		...mapGetters({
			currentUser: "user/current",
		})
	},
	methods: {
		isFollowing(user) {
			if (user && this.currentUser) {
				return this.currentUser.following.find(f => f.user === user.id);
			} return false
		},
		async followUser(user) {
			if (this.currentUser) {
				const url = this.$util.format(this.$urls.user.follow, user.id)
				await this.openConfirmDialog(
					`Are you sure you want to follow user <code>${user.username}</code>`,
					"POST",
					url,
					["refreshMe", "refresh"],
					`Follow success. You're now following user ${user.username}`,
					"Follow failed. Something went wrong. Please try again."
				)
			} else {
				await this.$store.dispatch("setAuthMode", {state: true, mode: "login"});
			}
		},
		async unFollow(user) {
			const follow = this.currentUser.following.find(follow => follow.user === user.id)
			if (!follow) return
			if (this.currentUser) {
				const url = this.$util.format(this.$urls.user.unfollow, follow.id)
				await this.openConfirmDialog(
					`Are you sure you want to un-follow user <code>${user.username}</code>`,
					"delete",
					url,
					["refreshMe", "refresh"],
					`Unfollow success. You're now not following user ${user.username}`,
					"Unfollow failed. Something went wrong. Please try again."
				)
			} else {
				await this.$store.dispatch("setAuthMode", {state: true, mode: "login"});
			}
		}
	}
}

export default FollowMixin

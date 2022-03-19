import {mapGetters} from "vuex";

const TopViewMixin = {
	computed: {
		...mapGetters(["topItems"]),
		...mapGetters({
			currentUser: "user/current"
		}),
		administrationData() {
			return this.$helper.getAdministrationData()
		},
	},
	methods: {
		isNotMe(user) {
			return this.currentUser.id !== user.id
		},
		isSubscribed(community) {
			return this.currentUser.my_subscriptions.find(s => (s.community.id === community.id))
		}
	}
}

export default TopViewMixin

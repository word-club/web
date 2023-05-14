import RefreshMeMixin from "@/mixin/RefreshMeMixin";
import {mapGetters} from "vuex";

const ProfileMixin = {
	mixins: [RefreshMeMixin],
	data: () => ({
		refreshing: false
	}),
	computed: {
		...mapGetters({
			currentUser: "user/current",
		})
	},
	methods:  {
		async refreshProfile() {
			this.refreshing = true
			await this.refreshMe()
			await this.$store.dispatch("user/setInView", this.currentUser)
			this.refreshing = false
		}
	}
}

export default ProfileMixin

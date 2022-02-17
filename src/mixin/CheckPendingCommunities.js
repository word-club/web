import {mapGetters} from "vuex";

const CheckPendingCommunities = {
	computed: {
		...mapGetters({
			"currentUser": "user/current",
		})
	},
	methods: {
		checkForPendingCommunities() {
			this.$axios.getWithPayload(this.$urls.community.list, {
				completed_registration_steps: false,
				created_by: this.currentUser.id
			}).then(async res => {
				if (res.count >= 1) {
					await this.$store.dispatch("community/setPendingList", res.results)
				} else {
					this.$helper.clearCommunityInProgress()
					await this.$store.dispatch("community/setInProgress", null)
				}
			})
		}
	}
}

export default CheckPendingCommunities

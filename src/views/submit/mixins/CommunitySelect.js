const CommunitySelect = {
	data: () => ({
		communityLoading: true,
		subscribedCommunities: [],
	}),
	computed: {
		communityHashtags() {
			if (!this.payload?.community) return []
			return this.payload.community.tags
		}
	},
	created() {
		this.fetchSubscribedCommunities()
	},
	methods: {
		async clearCommunityInit() {
			await this.$store.dispatch("setNotFound")
			await this.$router.push({name: "Submit", params: {type: "editor"}})
			this.initEditor()
		},
		onChangeCommunity(e) {
			if(e) this.theme = e.theme
			else this.theme = {color: "primary"}
		},
		async setCommunity(target = null) {
			if (!target) target = this.inProgress?.community
			this.payload.community = this.subscribedCommunities
				.find(item => item.id === target.id)
			this.onChangeCommunity(this.payload.community)
			if (!this.payload.community) {
				await this.$store.dispatch("setNotFound", {dialog: true, status: 403})
			} else {
				await this.$store.dispatch("setNotFound")
			}
		},
		fetchSubscribedCommunities() {
			this.communityLoading = true
			this.$axios.get(this.$urls.community.subscription.filter)
				.then(res => {
					this.subscribedCommunities = res.results
					this.communityLoading = false
				})
		},
		processInitWithCommunity() {
			const communityToInitWith = this.$route.params.community
			this.toView = false
			if (communityToInitWith) {
				this.fetchDetail("community", {pk: communityToInitWith})
					.then(async () => {
						if (this.fetchRes) {
							await this.setCommunity(this.fetchRes)
						} else {
							if (this.fetchErr.response.status === 404) {
								await this.$store.dispatch("setNotFound", {dialog: true, status: 404})
							} else {
								await this.$store.dispatch("setNotFound", {dialog: true, status: 500})
							}
						}
					})
			} else {
				this.payload.community = null
			}
		},
	}
}

export default CommunitySelect

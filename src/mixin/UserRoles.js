const UserRoles = {
	computed: {
		isCommunityManager() {
			if (!this.currentUser) return false
			const managedCommunities = this.currentUser["managed_communities"]
			if (!managedCommunities.length) return false
			let present = false
			for (let i=0; i<managedCommunities.length; i++) {
				if (managedCommunities[i].id === this.community.id)  {
					present = true
					break
				}
			}
			return present
		}
	},
	methods: {}
}

export default UserRoles

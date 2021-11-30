<template>
	<v-card color="transparent" flat>
		<v-card-text>
			<v-card dark :img="require('@/assets/administration.jpg')" height="100" />
		</v-card-text>
		<v-card-subtitle>
			Set administrators for your community. They will be able to approve related publications.
		</v-card-subtitle>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col cols="12">
					<user-select
						v-model="payload.admins"
						icon="mdi-account-tie"
						label="admins"
						name="admins" multiple
						:url="subscriberFetchUrl"
					/>
					<v-card-subtitle class="px-2 pb-0 d-flex align-center">
						<v-icon size="10">mdi-circle</v-icon>
						<div class="pl-3">Admin can <i>approve/remove</i> subscribers and manage <i>Community Settings</i>.</div>
					</v-card-subtitle>
				</v-col>
				<v-col cols="12">
					<user-select
						v-model="payload.sub_admins"
						icon="mdi-account-tie-outline"
						label="Sub Admins"
						name="sub_admins" multiple
						:url="subscriberFetchUrl"
					/>
					<v-card-subtitle class="px-2 pb-0 d-flex align-center">
						<v-icon size="10">mdi-circle</v-icon>
						<div class="pl-3">Sub-admins can <i>approve</i> subscribers and manage few <i>Community Settings</i>.</div>
					</v-card-subtitle>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-5">
			<v-divider />
			<v-card-actions>
				<v-btn color="grey darken-4" outlined
					:to="{name: 'Community Authorization'}"
				>
					Authorization
				</v-btn>

				<v-btn color="grey lighten-1"
					@click="skip"
				>
					Skip
				</v-btn>
				<v-spacer />
				<v-btn color="primary"
					@click="toCommunityDetail(community.id)"
				>
					Submit
				</v-btn>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
import UserSelect from "@/components/form/UserSelect.vue";
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
import CommunityProgress from "@/mixin/CommunityProgress.js";

export default {
	name: "Administration",
	components: {UserSelect},
	mixins: [RouteMixin, CommunityProgress],
	data: () => ({
		payload: {
			admins: [],
			sub_admins: []
		},
		stateCode: "5",
		requiredFields: [],
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
		subscriberFetchUrl() {
			return this.$util.format(this.$urls.community.subscribersFilter, this.community.id)
		}
	},
}
</script>

<style scoped>

</style>

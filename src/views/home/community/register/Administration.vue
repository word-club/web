<template>
	<v-card color="transparent" flat>
		<v-card-text>
			<v-card dark img="https://www.picpedia.org/highway-signs/images/administration.jpg" height="100" />
		</v-card-text>
		<v-card-subtitle>
			Set administrators for your community. They will be able to approve related publications.
		</v-card-subtitle>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col cols="12">
					<user-select
						v-model="community.admins"
						icon="mdi-account-tie"
						label="admins"
						name="admins"
					/>
					<v-card-subtitle class="px-2 pb-0">
						<v-icon small>mdi-circle</v-icon>
						Admin can approve/remove subscribers, manage publications and community settings.
					</v-card-subtitle>
				</v-col>
				<v-col cols="12">
					<user-select
						v-model="community.sub_admins"
						icon="mdi-account-tie-outline"
						label="Sub Admins"
						name="sub_admins"
					/>
					<v-card-subtitle class="px-2 pb-0">
						<v-icon small>mdi-circle</v-icon>
						Sub-admins can approve subscribers and manage few publication and community settings.
					</v-card-subtitle>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-5">
			<v-divider />
			<v-card-actions>
				<v-btn color="grey darken-4" outlined
					:to="{name: 'Community Authorization'}"
				>Authorization</v-btn>
				<v-spacer />
				<v-btn color="grey" dark>Skip</v-btn>
				<v-btn color="primary"
					@click="toCommunityDetail(communityInProgress.unique_id)"
				>Submit</v-btn>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
import UserSelect from "@/components/form/UserSelect.vue";
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
export default {
	name: "Administration",
	components: {UserSelect},
	mixins: [RouteMixin],
	data: () => ({
		community: {
			admins: [],
			sub_admins: []
		}
	}),
	computed: {
		...mapGetters({
			communityInProgress: "community/inProgress"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-card flat color="transparent">
		<v-card-title>
			Created Communities
		</v-card-title>
		<v-card-text v-if="user['my_communities'].length === 0">
			<v-alert type="info">
				You have not created any communities yet.
			</v-alert>
		</v-card-text>
		<v-card-text v-else>
			<created-community-card
				v-for="community in user['my_communities']"
				:key="community.id"
				:community="community"
				class="my-2"
			/>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import CreatedCommunityCard from "@/views/settings/components/CreatedCommunityCard.vue";

export default {
	name: "Communities",
	components: {CreatedCommunityCard},
	data: () => ({}),
	computed: {
		...mapGetters({
			user: "user/current"
		})
	},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

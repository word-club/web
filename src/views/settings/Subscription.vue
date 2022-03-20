<template>
	<v-card color="transparent" flat>
		<v-card-title>
			Subscription
		</v-card-title>
		<v-card-text v-if="user['my_subscriptions'].length > 0">
			<subscription-card
				v-for="subscription in user['my_subscriptions']"
				:key="subscription.id"
				class="my-2"
				:subscription="subscription"
			/>
			<confirm-dialog @refreshMe="refreshMe()" />
		</v-card-text>
		<v-card-text v-else>
			<v-alert type="warning">
				No community subscriptions made yet.
			</v-alert>
			<!-- TODO: add a list of subscription recommendations.-->
		</v-card-text>
	</v-card>
</template>

<script>
import SubscriptionCard from "@/views/settings/components/SubscriptionCard.vue";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";
import {mapGetters} from "vuex";

export default {
	name: "Subscription",
	components: {SubscriptionCard},
	mixins: [RefreshMeMixin],
	computed: {
		...mapGetters({
			user: "user/current",
		}),
	}
}
</script>

<template>
	<div class="py-4">
		<v-card flat color="transparent">
			<v-progress-linear v-if="loadingN" indeterminate height="6" color="primary" />
			<div class="pa-2 d-flex align-center">
				<h3>Notifications</h3>
				<v-chip class="ml-2" small>{{notification.unseen_count}}</v-chip>
			</div>
			<v-divider class="mx-2 mb-2" />
			<v-card-text v-for="item in notification.results" :key="item.id"
				class="pa-2"
			>
				<NotificationItem :item="item" />
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import NotificationMixin from "@/mixin/NotificationMixin.js"
import NotificationItem from "@/views/notification/NotificationItem.vue"

export default {
	name: "Notifications",
	components: {NotificationItem},
	mixins: [NotificationMixin],
	created() {
		this.fetchMyNotifications()
	},
}
</script>

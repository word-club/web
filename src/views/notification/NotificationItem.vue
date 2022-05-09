<template>
	<v-card elevation="1">
		<v-card-title>
			{{ notification.title }}
		</v-card-title>
		<v-card-subtitle>{{ notification.description }}</v-card-subtitle>
	</v-card>
</template>

<script>
export default {
	name: "NotificationItem",
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data: () => ({}),
	computed: {
		notification() {
			return this.item.notification
		}
	},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-menu
		v-model="notificationDrop"
		offset-y
		max-width="350"
	>
		<template #activator="{on, attrs}">
			<v-badge
				color="primary lighten-1"
				overlap
			>
				<template #badge>
					<span class="font-weight-bold">55</span>
				</template>
				<v-btn
					id="notification-bell"
					icon class="px-2"
					small v-bind="attrs"
					@click="notificationDrop = !notificationDrop"
					v-on="on"
				>
					<v-icon>
						mdi-bell-outline
					</v-icon>
				</v-btn>
			</v-badge>
		</template>
		<v-card flat
			tile
			width="350"
			max-height="90vh"
		>
			<v-card-actions class="align-center justify-space-between py-4 px-3">
				<div class="px14 weight-500 black--text">
					Notifications
				</div>
				<div class="d-flex align-center">
					<div class="px14 weight-500 grey--text">
						Messages
					</div>
					<div style="width: 2px; height: 20px; background-color: grey"
						class="mx-2 py-1"
					/>
					<v-btn icon
						x-small
						class="mx-1"
					>
						<v-icon>mdi-eye-outline</v-icon>
					</v-btn>
					<v-btn icon
						x-small
						class="mx-1"
					>
						<v-icon>mdi-cog-outline</v-icon>
					</v-btn>
				</div>
			</v-card-actions>
			<v-list color="grey lighten-3"
				two-line
			>
				<v-list-item v-for="n in 10"
					:key="n"
				>
					<v-list-item-avatar size="40"
						color="grey darken-1"
					/>
					<v-list-item-content>
						<v-list-item-subtitle class="d-flex align-center">
							<div>TajMahalWonderers</div>
							<v-icon>mdi-circle-small</v-icon>
							<div>3 hours ago</div>
						</v-list-item-subtitle>
						<v-list-item-title>
							Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
export default {
	name: "NotificationMenu",
	props: {},
	data: () => ({
		notificationDrop: false
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-menu
		v-model="notificationDrop"
		offset-y
		max-width="350"
		class="n_menu"
	>
		<template #activator="{on, attrs}">
			<v-badge
				color="primary lighten-1"
				overlap
				class="notification-badge"
			>
				<template #badge>
					<span class="font-weight-bold notification-count">{{ unseen }}</span>
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
		<v-card
			class="n_menu__card"
			flat tile
			width="350"
			max-height="90vh"
		>
			<div class="n_menu__wrapper">
				<div class="n_menu__title">
					Notifications
				</div>
				<div class="n_menu__actions">
					<div class="messages">
						Messages
					</div>
					&nbsp;
					<div class="divider" />
					&nbsp;
					<v-btn icon
						x-small
						class="mark_seen"
					>
						<v-icon>mdi-eye-outline</v-icon>
					</v-btn>
					&nbsp;
					<v-btn icon x-small
						class="settings"
					>
						<v-icon>mdi-cog-outline</v-icon>
					</v-btn>
				</div>
			</div>
			<v-list
				v-if="notifications.count > 0"
				color="grey lighten-3"
				two-line class="n_menu__list"
			>
				<v-list-item
					v-for="n in notifications.results"
					:key="n"
				>
					<v-list-item-avatar size="40"
						color="grey darken-1"
					/>
					<v-list-item-content>
						<v-list-item-subtitle class="info">
							<div>{{ n.notification.subject }}</div>
							<v-icon>mdi-circle-small</v-icon>
							<div>{{ $moment(n.created_at).fromNow() }}</div>
						</v-list-item-subtitle>
						<v-list-item-title class="description">
							{{n.notification.description}}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
import {mapGetters} from "vuex"

export default {
	name: "NotificationMenu",
	data: () => ({
		notificationDrop: false,
	}),
	computed: {
		...mapGetters({
			notifications: "notification/list",
		}),
		unseen() {
			if (!this.notifications) return 0
			return this.notifications.unseen_count
		},
	},
	created() {
		console.log(this.notifications)
	}
}
</script>

<style scoped lang="scss">
.n_menu {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 8px;
	}
	&__title {
		font-size: 1.1rem;
		font-weight: 500;
		color: grey;
	}
	&__actions {
		display: flex;
		align-items: center;
		.divider {
			width: 1px;
			height: 20px;
			background-color: grey;
		}
		.messages {
			font-size: .875rem;
			color: #696868;
		}
	}
	&__list {
		.info {
			display: flex;
			background: transparent!important;
			align-items: center;
		}
		.description {
			white-space: normal;
		}
	}
}
</style>

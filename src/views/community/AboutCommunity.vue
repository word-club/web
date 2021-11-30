<template>
	<v-card outlined>
		<v-card-title class="px-3 py-2 d-flex justify-space-between align-center white--text"
			:class="community.theme.color"
		>
			<div class="px14 weight-500">
				About Community
			</div>
			<v-btn icon
				small dark
			>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
		</v-card-title>
		<v-card-text class="pa-3">
			{{ community.quote }}
		</v-card-text>
		<v-card-text class="d-flex align-center pa-3 weight-500 justify-space-between">
			<div>
				<div class="px18">
					{{ community.subscriptions.subscribers }}
				</div>
				<div class="px14">
					{{ community.theme.to_call_subscriber }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					{{ community.subscriptions.notification_disables }}
				</div>
				<div class="px14">
					{{ community.theme.state_after_subscription }}
				</div>
			</div>
		</v-card-text>
		<v-divider />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ $moment(community.date_of_registration).fromNow() }}
			</div>
		</v-card-text>
		<v-card-text class="pa-3">
			<v-btn
				block rounded
				:color="community.theme.color"
				depressed dark
			>
				Create Post
			</v-btn>
		</v-card-text>
		<v-divider />
		<v-card-text>
			<v-btn
				depressed small
				rounded block
				@click="options = !options"
			>
				<template #default>
					<div class="d-flex align-center justify-space-between px-4"
						style="width: 100%"
					>
						<div>Community options</div>
						<v-icon>mdi-chevron-down</v-icon>
					</div>
				</template>
			</v-btn>
		</v-card-text>
		<v-slide-y-transition>
			<v-card-actions v-if="options">
				<v-card outlined class="full-width" rounded="lg">
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-eye-outline</v-icon></v-list-item-icon>
						<v-list-item-content><v-list-item-title>Community Theme</v-list-item-title></v-list-item-content>
						<v-list-item-action>
							<v-switch :color="community.theme.color" v-model="seeTheme" />
						</v-list-item-action>
					</v-list-item>
				</v-card>
			</v-card-actions>
		</v-slide-y-transition>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "AboutCommunity",
	props: {},
	data: () => ({
		options: false,
		seeTheme: true
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
}
</script>

<style scoped>

</style>

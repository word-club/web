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
		<v-card-text class="d-flex align-center pa-3 weight-500">
			<div>
				<div class="px18">
					{{ community.subscribers.count }}
				</div>
				<div class="px14">
					{{ community.settings.what_to_call_subscribers }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					{{ community.notifiedSubscribers.count }}
				</div>
				<div class="px14">
					{{ community.settings.feeling_after_subscribing }}
				</div>
			</div>
		</v-card-text>
		<v-divider />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ $moment(community.timestamp).fromNow() }}
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
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn
						depressed small
						rounded block
						v-bind="attrs"
						v-on="on"
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
				</template>
				<v-list dense>
					<v-list-item>
						<v-list-item-icon>mdi-eye-outline</v-list-item-icon>
						<v-list-item-content><v-list-item-title>Community Theme</v-list-item-title></v-list-item-content>
						<v-list-item-action>
							<v-switch v-model="seeTheme" />
						</v-list-item-action>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "AboutCommunity",
	props: {},
	data: () => ({
		seeTheme: true
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

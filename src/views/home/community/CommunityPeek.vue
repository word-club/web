<template>
	<v-card outlined
		max-width="350"
	>
		<v-card
			:color="community.theme.color"
			height="35" flat
			class="rounded-b-0"
		>
			<v-img
				v-if="community.cover"
				:src="$link(community.cover)"
				height="35"
			/>
		</v-card>
		<v-card-text class="pa-3 d-flex align-center">
			<v-avatar :color="community.theme.color"
				size="45"
			>
				<v-img v-if="community.avatar"
					:src="$link(community.avatar)"
				/>
			</v-avatar>
			<div>
				<v-card-title>{{community.name}}</v-card-title>
				<v-card-subtitle>
					#/{{ community.unique_id }}
				</v-card-subtitle>
			</div>
		</v-card-text>
		<v-card-text v-if="community.quote" class="pa-2">
			{{ community.quote }}
		</v-card-text>
		<v-card-text class="d-flex align-center pa-3 weight-500 justify-space-between">
			<div>
				<div class="px18">
					{{community.subscribers}}
				</div>
				<div class="px14">
					{{ community.theme.to_call_subscriber }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					{{community.reactions}}
				</div>
				<div class="px14">
					{{ community.theme.state_after_subscription }}
				</div>
			</div>
		</v-card-text>
		<v-divider class="mx-3" />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ $moment(community.date_of_registration).format("MM DD, YYYY") }}
			</div>
		</v-card-text>
		<v-card-text class="pa-3">
			<v-btn
				block rounded
				outlined :color="community.theme.color"
			>
				Join
			</v-btn>
		</v-card-text>
		<v-divider class="mx-3" />
		<v-card-text>
			<v-btn
				depressed small
				rounded block
				@click="seeOptions = !seeOptions"
			>
				<template #default>
					<div class="d-flex align-center justify-space-between px-4 full-width">
						<div>Community options</div>
						<v-icon>mdi-chevron-down</v-icon>
					</div>
				</template>
			</v-btn>
		</v-card-text>
		<v-slide-y-transition>
			<v-card-text v-if="seeOptions"
				class="pt-0"
			>
				<v-list class="py-0"
					dense
				>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>See community theme</v-list-item-title>
						</v-list-item-content>
						<v-list-item-action>
							<v-switch v-model="seeTheme"
								:color="community.theme.color"
							/>
						</v-list-item-action>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-slide-y-transition>
	</v-card>
</template>

<script>
export default {
	name: "CommunityPeek",
	props: {
		community: {
			required: true,
			type: Object
		}
	},
	data: () => ({
		seeOptions: false,
		seeTheme: true
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

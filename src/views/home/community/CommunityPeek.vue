<template>
	<v-card outlined
		max-width="350"
	>
		<v-card
			:color="$helper.getThemeColor(community)"
			height="35" flat
			class="rounded-b-0"
		>
			<v-img
				v-if="community.cover"
				:src="community.cover.image"
				height="35"
			/>
		</v-card>
		<v-card-text class="pa-3 d-flex align-center">
			<v-avatar :color="$helper.getThemeColor(community)"
				size="45"
			>
				<v-img v-if="community.avatar"
					:src="community.avatar.image"
				/>
			</v-avatar>
			<div class="px-3 mt-1 px16 weight-500">
				#/{{ community.unique_id }}
			</div>
		</v-card-text>
		<v-card-text class="pa-2">
			{{ community.quote }}
		</v-card-text>
		<v-card-text class="d-flex align-center pa-3 weight-500">
			<div>
				<div class="px18">
					5.2m
				</div>
				<div class="px14">
					{{ community.settings.what_to_call_subscribers }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					15.1k
				</div>
				<div class="px14">
					{{ community.settings.feeling_after_subscribing }}
				</div>
			</div>
		</v-card-text>
		<v-divider class="mx-3" />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ $moment(community.created_at).format("MM DD, YYYY") }}
			</div>
		</v-card-text>
		<v-card-text class="pa-3">
			<v-btn
				block rounded
				outlined :color="$helper.getThemeColor(community)"
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
							<v-switch :value="true"
								:color="$helper.getThemeColor(community)"
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
		seeOptions: false
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

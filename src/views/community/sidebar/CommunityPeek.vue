<template>
	<v-card
		v-if="community"
		outlined :max-width="maxWidth"
	>
		<v-card
			:color="community.theme.color"
			height="35" flat
			class="rounded-b-0"
		>
			<v-img
				v-if="community.cover"
				:src="$link(community.cover)"
				height="45"
			/>
		</v-card>
		<v-card-text class="px-3 py-0 d-flex align-center">
			<wc-avatar
				:color="community.theme.color"
				size="45"
				:src="community.cover"
				:text="community.name"
				span-class="full-width-text-center white--text px22 weight-500"
			/>
			<div>
				<v-card-title>{{community.name}}</v-card-title>
				<v-card-subtitle>
					#/{{ community.unique_id }}
				</v-card-subtitle>
			</div>
		</v-card-text>
		<v-card-text v-if="community.quote" class="pt-0">
			{{ community.quote }}
		</v-card-text>
		<v-card-text class="d-flex align-center px-4 py-0 weight-500 justify-space-between">
			<div>
				<div class="px22">
					{{ community["subscribers_count"] }}
				</div>
				<div class="px14">
					{{ community.theme.to_call_subscriber }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px22">
					{{community.rating }}
				</div>
				<div class="px14">
					{{ community.theme.state_after_subscription }}
				</div>
			</div>
		</v-card-text>
		<v-divider class="mt-3" />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ dateOfRegistration }}
			</div>
		</v-card-text>
		<v-card-text class="pa-3 pb-4">
			<v-btn
				block rounded
				outlined :color="community.theme.color"
			>
				Join
			</v-btn>
		</v-card-text>
		<v-divider />
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
		},
		maxWidth: {
			required: false,
			default: 350
		}
	},
	data: () => ({
		seeOptions: false,
		seeTheme: true
	}),
	computed: {
		dateOfRegistration() {
			if (!this.community["date_of_registration"]) return "-"
			return this
				.$moment(this.community["date_of_registration"])
				.format("MM DD, YYYY")
		}
	}
}
</script>

<style scoped>

</style>

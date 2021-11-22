<template>
	<v-card outlined>
		<v-card-title class="px-3 py-2 white--text px14 weight-500"
			:class="community.theme.color"
		>
			Moderators
		</v-card-title>
		<v-card-text class="pa-3">
			<v-btn block outlined
				:color="community.theme.color"
				small rounded
			>
				<v-icon left>
					mdi-message
				</v-icon>
				Message the mods
			</v-btn>
		</v-card-text>
		<v-card-text>
			<div v-for="(mod, index) in community.admins"
				:key="index"
				class="d-flex weight-500 align-center py-1"
				:class="`${community.theme.color}--text`"
			>
				<div>
					{{ mod.user.username }}
				</div>
				<div class="px-1">
					-
				</div>
				<div
					class="white--text rounded px-1"
					:class="community.theme.color"
				>
					President
				</div>
			</div>
			<div v-for="(mod, index) in community.sub_admins"
				:key="index"
				class="d-flex weight-500 align-center py-1"
				:class="`${community.theme.color}--text`"
			>
				<div>
					{{ mod.user.username }}
				</div>
				<div class="px-1">
					-
				</div>
				<div
					class="white--text rounded px-1"
					:class="community.theme.color"
				>
					Vice President
				</div>
			</div>

		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "MessageModerators",
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

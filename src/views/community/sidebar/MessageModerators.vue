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
			<div v-for="(mod, index) in community.moderators"
				:key="index"
				class="d-flex weight-500 align-center py-1"
				:class="`${community.theme.color}--text`"
			>
				<div>
					{{ mod.user.name }}
				</div>
				<div class="px-1">
					-
				</div>
				<div
					v-if="community.created_by === mod.user.id"
					class="white--text rounded px-1"
					:class="community.theme.color"
				>
					President
				</div>
				<div v-else-if="mod.role === 'mod'">MOD</div>
				<div v-else>Sub MOD</div>
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

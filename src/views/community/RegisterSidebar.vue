<template>
	<div class="px-4">
		<v-card outlined>
			<v-card-title>
				Community Registration
			</v-card-title>
			<v-divider />
			<v-card-text class="pa-0">
				<v-list dense>
					<v-list-item v-for="(item, index) in $helper.registrationSteps"
						:key="index"
						:to="item.to"
						active-class="step-active"
						:disabled="isStepCompleted(item.state)"
					>
						<v-list-item-icon>
							<v-icon size="22">
								{{ item.icon }}
							</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="px14">
								{{ item.title }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<div class="py-2" />
		<home-small-footer />
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "RegisterSidebar",
	computed: {
		...mapGetters("community", ["inProgress"]),
	},
	methods: {
		isStepCompleted(state) {
			if (state === "0") return true
			if(!this.community) {
				return true
			} else {
				if (!this.community.create_progress) return false
				const itemState = this.community.create_progress
					.find(item => item.state === state)
				return (itemState)
					// do not disable item if state is completed
					? itemState.is_completed
					: true
			}
		}
	}
}
</script>

<style scoped>
.step-active {
	pointer-events: none;
}
</style>

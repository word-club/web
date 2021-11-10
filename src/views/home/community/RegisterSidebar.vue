<template>
	<div class="px-4">
		<v-card outlined>
			<v-card-title>
				Community Registration
			</v-card-title>
			<v-divider />
			<v-card-text class="pa-0">
				<v-list dense>
					<v-list-item v-for="(item, index) in registrationSteps"
						:key="index"
						:to="item.to"
						active-class="step-active"
						:disabled="isStepCompleted(index)"
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
	data: ()=>({
		registrationSteps: [
			{title: "Community Mainframe", icon: "mdi-ballot", to: "/register-community/mainframe"},
			{title: "Add Community Theme", icon: "mdi-camera-image", to: "/register-community/display"},
			{title: "Set Community Rules", icon: "mdi-ruler-square-compass", to: "/register-community/rules"},
			{title: "Community Hashtags", icon: "mdi-pound", to: "/register-community/hashtags"},
			{title: "Authorize Your Community", icon: "mdi-check-bold", to: "/register-community/authorization"},
			{title: "Community Administration", icon: "mdi-account-cowboy-hat", to: "/register-community/administration"},
		]
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		})
	},
	methods: {
		isStepCompleted(index) {
			if(!this.community) {
				return index !== 0
			} else {
				if (index === 0) return true
				else {
					if (!this.community.create_progress) return false
					const itemState = this.community.create_progress
						.find(item => item.state === index.toString())
					return (itemState)
						// do not disable item if state is completed
						? itemState.is_completed
						: true
				}
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

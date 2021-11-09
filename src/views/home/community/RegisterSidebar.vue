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
export default {
	name: "RegisterSidebar",
	data: ()=>({
		registrationSteps: [
			{title: "Community Mainframe", icon: "mdi-ballot", to: "/register-community"},
			{title: "Add Community Theme", icon: "mdi-camera-image", to: "/register-community/display"},
			{title: "Set Community Rules", icon: "mdi-ruler-square-compass", to: "/register-community/rules"},
			{title: "Community Hashtags", icon: "mdi-pound", to: "/register-community/hashtags"},
			{title: "Authorize Your Community", icon: "mdi-check-bold", to: "/register-community/authorization"},
			{title: "Community Administration", icon: "mdi-account-cowboy-hat", to: "/register-community/administration"},
		]
	})
}
</script>

<style scoped>
.step-active {
	pointer-events: none;
}
</style>

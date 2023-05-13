<template>
	<div class="pa-2">
		<v-card outlined>
			<v-card-title>
				Community Registration
			</v-card-title>
			<v-divider />
			<v-card-text class="pa-0">
				<v-list dense>
					<v-list-item v-for="(item, index) in registrationTips"
						:key="index"
					>
						<v-list-item-icon class="mr-2">
							<v-icon size="22">
								{{ `mdi-numeric-${index+1}` }}
							</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							{{ item }}
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<div class="py-1" />
		<home-small-footer />
	</div>
</template>

<script>
export default {
	name: "RegisterSidebar",
	data: () => ({
		registrationTips: [
			"Community unique id will be used as a primary identifier for your community.",

		]
	})
}
</script>

<style scoped>
.step-active {
	pointer-events: none;
}
</style>

<template>
	<v-card flat color="transparent"
		max-width="800" class="mx-auto"
	>
		<v-card-text class="px26">Settings</v-card-text>
		<div class="grey lighten-2 mx-3"
			style="height: 2px;"
		/>
		<transition name="view">
			<router-view />
		</transition>
	</v-card>
</template>

<script>
export default {
	name: "Settings",
}
</script>

<template>
	<v-card flat color="transparent"
		max-width="800" class="mx-auto"
	>
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

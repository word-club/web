<template>
	<v-card flat>
		<v-card-text class="pa-0">
			<transition name="view">
				<router-view />
			</transition>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "ModSettings"
}
</script>

<style scoped lang="scss">

</style>

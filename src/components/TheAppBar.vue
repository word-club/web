<template>
	<v-app-bar
		app
		color="grey lighten-4"
		height="60"
	>
		<div class="d-flex align-center">
			<v-avatar>
				<v-img :src="require('@/assets/logo.png')" />
			</v-avatar>
			<div class="px-2" />
			<h2>WordClub</h2>
		</div>

		<v-spacer />

		<v-avatar color="grey"
			size="40"
		/>
	</v-app-bar>
</template>

<script>
export default {
	name: "TheAppBar",
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

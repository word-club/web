<template>
	<div
		style="height: 64px;"
	/>
</template>

<script>
export default {
	name: "SidebarTopPadding",
	computed: {
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
	}
}
</script>

<style scoped lang="scss">

</style>

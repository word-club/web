<template>
	<v-slide-x-transition>
		<v-navigation-drawer
			v-model="drawer"
			app clipped
			color="grey lighten-3"
			class="home-sidebar"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
			:width="$vuetify.breakpoint.md ? 200 : 250"
		>
			<router-view name="drawer" />
		</v-navigation-drawer>
	</v-slide-x-transition>
</template>

<script>
import MainDrawer from "@/mixin/MainDrawer.js";

export default {
	name: "RootDrawer",
	mixins: [MainDrawer],
	computed: {
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
	},
}
</script>

<style scoped lang="scss">
@import "../../styles/sidebar";
</style>

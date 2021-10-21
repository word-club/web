<template>
	<v-app>
		<the-app-bar />
		<v-navigation-drawer
			v-model="drawer"
			app clipped
			color="grey lighten-3"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
		>
			<v-list>
				<v-list-item>Kiran</v-list-item>
				<v-list-item>Parajuli</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-navigation-drawer
			v-if="homeRoute"
			v-model="sidebar"
			app right
			clipped
			color="grey lighten-3"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
			:width="$vuetify.breakpoint.width > 1000 ? 280 : 220"
		>
			<transition
				name="view"
			>
				<router-view name="sidebar" />
			</transition>
		</v-navigation-drawer>
		<v-main>
			<v-container fluid
				class="pa-0"
			>
				<v-card
					flat tile
					color="grey lighten-4"
					class="app-card"
				>
					<the-snackbar />
					<transition name="view">
						<router-view />
					</transition>
					<scroll-to-top />
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",
	components: {
		TheAppBar: () => import("@/components/TheAppBar"),
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		ScrollToTop: () => import("@/components/utils/ScrollToTop"),
	},
	data: () => ({
		sidebar: null,
		drawer: null,
	}),
	computed: {
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
		homeRoute() {
			return this.$route.meta["home"]
		}
	},
}
</script>

<style>
.app-card {
	min-height: calc(100vh - 55px) !important;
	padding: 10px 10px 0 10px
}
.v-label {
	font-size: 12px !important;
	font-weight: bold;
}
.v-input {
	font-size: 12px !important;
}
.v-btn {
	font-size: 12px !important;
}
</style>

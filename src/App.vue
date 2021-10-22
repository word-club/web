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
			<div class="py-2" />
			<drawer-list />
		</v-navigation-drawer>
		<v-navigation-drawer
			v-if="homeRoute"
			v-model="sidebar"
			app right
			clipped
			color="grey lighten-3"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
			width="350"
		>
			<div class="py-2" />
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
					:color="
						$route.name === 'Submit' ? 'grey lighten-2': 'grey lighten-4'
					"
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
		DrawerList: () => import("@/views/home/components/DrawerList.vue"),
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

<style lang="scss">
* {
	font-family: 'Barlow Semi Condensed', sans-serif;
	box-sizing: border-box;
}
.app-card {
	min-height: calc(100vh - 55px) !important;
	padding: 10px 10px 0 10px
}
.v-label {
	font-size: 14px !important;
	font-weight: bold;
}
.v-input {
	font-size: 14px !important;
}
.sidebar-card-title {
	font-size: 16px !important;
}
.footer-items {
	div {
		font-size: 14px;
		cursor: pointer;
	}
	div:hover {
		color: black
	}
}
</style>

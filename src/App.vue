<template>
	<v-app>
		<the-app-bar />
		<v-navigation-drawer
			v-model="drawer"
			app clipped
			color="grey lighten-3"
			class="home-sidebar"
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
			class="home-sidebar"
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
					v-if="$route.name"
					flat tile
					:color="
						$route.name === 'Submit' ? 'grey lighten-2': 'grey lighten-4'
					"
					class="app-card"
					:class="{
						'app-padding': ! $route.name.includes('Community') &&
							!$route.name.includes('User') &&
							!$route.name.includes('Profile'),
						'px-0': $route.name.includes('Community'),
						'px-0': $route.name.includes('User'),
						'px-0': $route.name.includes('Profile'),
					}"
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
	}
}
</script>

<style lang="scss">
* {
	font-family: 'Barlow Semi Condensed', sans-serif;
	box-sizing: border-box;
}
:root {
	--primary: #1975d1
}
.app-card {
	min-height: calc(100vh - 55px) !important;
}
.app-padding {
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
.cursor {
	cursor: pointer;
}
.px10 {
	font-size: 10px !important;
}
.px11 {
	font-size: 11px !important;
}
.px12 {
	font-size: 12px !important;
}
.px13 {
	font-size: 13px !important;
}
.px14 {
	font-size: 14px !important;
}
.px15 {
	font-size: 15px !important;
}
.px16 {
	font-size: 16px !important;
}
.px18 {
	font-size: 18px !important;
}
.px22 {
	font-size: 22px !important;
}
.px26 {
	font-size: 26px !important;
}
.weight-300 {
	font-weight: 300 !important;
}
.weight-400 {
	font-weight: 400 !important;
}
.weight-500 {
	font-weight: 500 !important;
}
.weight-600 {
	font-weight: 600 !important;
}
.weight-700 {
	font-weight: 700 !important;
}
.hover-underline:hover {
	text-decoration: underline;
}
.full-width {
	width: 100%
}
.normal-whitespace {
	white-space: normal !important;
}
.home-sidebar {
		/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #d7d7d7;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #727272;
	}
}
</style>

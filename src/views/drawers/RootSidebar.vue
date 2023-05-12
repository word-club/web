<template>
	<v-slide-x-reverse-transition>
		<v-navigation-drawer
			v-model="sidebar"
			app :permanent="!xs"
			:temporary="xs"
			right clipped
			color="grey lighten-3"
			class="home-sidebar"
			:width="sidebarWidth"
		>
			<div
				v-if="!mdAndUp || viewportWidth < 300"
				class="home-sidebar--toggle"
				:class="{
					'text-center': !showSidebarContent,
					'text-right': showSidebarContent
				}"
			>
				<v-btn @click="toggleSidebarWidth"
					color="accent"
					:block="showSidebarContent"
					:fab="!showSidebarContent"
					height="56"
				>
					<v-scale-transition>
						<v-icon v-if="!showSidebarContent">mdi-menu-open</v-icon>
						<v-icon v-else>mdi-backburger</v-icon>
					</v-scale-transition>
				</v-btn>
			</div>
			<div v-show="showSidebarContent"
				class="home-sidebar--content"
			>
				<transition
					name="view"
				>
					<router-view name="sidebar" />
				</transition>
			</div>
		</v-navigation-drawer>
	</v-slide-x-reverse-transition>
</template>

<script>
import {mapMutations} from "vuex";
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";

export default {
	name: "RootSidebar",
	mixins: [ScreenSizeMixin],
	data: () => ({
		showSidebarContent: true,
		sidebarWidth: 300,
	}),
	computed: {
		sidebar: {
			get() {
				return this.$store.getters.sidebarState
			},
			set(v) {
				this.SET_SIDEBAR_STATE(v)
			}
		},
		withSidebarRoute() {
			return this.$route.matched.some(route => route.meta["sidebar"])
		}
	},
	watch: {
		"$vuetify.breakpoint.width": {
			handler() {
				this.sidebarWidthManager()
			}
		}
	},
	created() {
		this.sidebarWidthManager()
	},
	methods: {
		...mapMutations(["SET_SIDEBAR_STATE"]),
		toggleSidebarWidth() {
			this.showSidebarContent = !this.showSidebarContent
			if (this.sidebarWidth === 80) this.sidebarWidth = 300
			else this.sidebarWidth = 80
		},
		sidebarWidthManager() {
			if (!this.mdAndUp && !this.xs) {
				this.sidebarWidth = 80
				this.showSidebarContent = false
			} else {
				this.sidebarWidth = 300
				this.showSidebarContent = true
			}
		},
	}
}
</script>
<style lang="scss" scoped>
@import "../../styles/sidebar";
</style>

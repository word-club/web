<template>
	<v-card
		class="mx-auto transparent"
		flat :loading="loading"
	>
		<div>
			<community-cover v-if="!modRoutes" />
			<detail-title v-if="!modRoutes" @refresh="refreshCommunity" />
			<community-breadcrumb v-else />
			<v-card-text class="pt-4">
				<v-card max-width="800"
					class="mx-auto"
					flat color="transparent"
				>
					<v-slide-x-transition>
						<transition name="view">
							<router-view />
						</transition>
					</v-slide-x-transition>
				</v-card>
			</v-card-text>
		</div>
	</v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import FetchMixin from "@/mixin/FetchMixin.js";

export default {
	name: "Community",
	components: {
		CommunityCover: () => import("@/views/community/components/CommunityCover"),
		DetailTitle: () => import("@/views/community/components/DetailTitle"),
		CommunityBreadcrumb: () => import("@/views/community/components/CommunityBreadcrumb")
	},
	mixins: [RouteMixin, FetchMixin],
	data: () => ({
		model: "community"
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		coverHeight() {
			if (this.$route.name.includes("Community MOD Settings")) return 100
			if (!this.community.cover) return 100
			return 300
		},
		modRoutes() {
			return this.$route.matched.some(route => route.meta["community_mod"])
		}
	},
	created() {
		this.refreshCommunity()
	},
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
		refreshCommunity() {
			this.fetchDetail("community")
				.then(() => {
					this.setTabListeners(this.community.theme.color)
				})
		},
		setTabListeners(color) {
			function onMouseOver(e) {
				e.target.classList.add(`${color}--text`)
			}
			function onMouseOut(e) {
				e.target.classList.remove(`${color}--text`)
			}
			const tabs = document.querySelectorAll(".community-top-button")
			tabs.forEach(tab => {
				tab.addEventListener("mouseover", onMouseOver)
				tab.addEventListener("mouseout", onMouseOut)
			})
		}
	}
}
</script>

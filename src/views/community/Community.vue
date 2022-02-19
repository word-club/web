<template>
	<v-card
		class="mx-auto transparent"
		flat :loading="loading"
	>
		<div v-if="community && community.theme">
			<v-card-text class="pa-0">
				<v-card
					:height="coverHeight"
					:color="community.theme.color"
					tile flat
				>
					<v-img
						v-if="community.cover"
						:src="$link(community.cover.image)"
						:height="coverHeight"
					/>
				</v-card>
			</v-card-text>
			<detail-title @refresh="refreshCommunity" />
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
		DetailTitle: () => import("@/views/community/DetailTitle")
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

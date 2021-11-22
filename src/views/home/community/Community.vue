<template>
	<v-card
		class="mx-auto transparent"
		flat :loading="loading"
	>
		<div v-if="community && community.theme">
			<v-card-text class="pa-0">
				<v-card
					:height="(community.cover) ? 300 : 100"
					:color="community.theme.color"
					tile flat
				>
					<v-img
						v-if="community.cover"
						:src="$link(community.cover.image)"
						height="300"
					/>
				</v-card>
			</v-card-text>
			<detail-title />
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
import DetailTitle from "@/views/home/community/DetailTitle.vue";
export default {
	name: "Community",
	components: {DetailTitle},
	mixins: [RouteMixin, FetchMixin],
	data: () => ({
		model: "community"
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	created() {
		this.fetchDetail()
			.then(() => {
				this.setTabListeners(this.community.theme.color)
			})
	},
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
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

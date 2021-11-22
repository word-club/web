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
			<v-card-title class="pa-0 white">
				<v-card max-width="800"
					width="800"
					class="mx-auto"
					flat color="white"
				>
					<v-card-text class="pa-3 pt-0 pb-1 d-flex align-center"
						style="width: 100%"
					>
						<v-avatar
							class="community-avatar"
							size="80"
							:color="(community.avatar) ? 'white' : community.theme.color"
						>
							<v-img v-if="community.avatar"
								:src="$link(community.avatar.image)"
							/>
						</v-avatar>
						<div class="px-2" />
						<div class="px24">
							{{ community.name }}
						</div>
						<v-spacer />
						<div class="px-2" />
						<v-btn
							v-if="community.my_status && community.my_status.is_approved"
							rounded depressed :color="community.theme.color"
							@click="unSubscribe"
						>
							Joined
						</v-btn>
						<v-btn
							v-else outlined rounded
							:color="community.theme.color"
							@click="subscribe"
						>
							Join
						</v-btn>
						<div class="px-2" />
						<v-btn
							v-if="community.my_status && !community.my_status.disable_notification"
							icon :color="community.theme.color"
							@click="disableNotification"
						>
							<v-icon>mdi-bell-outline</v-icon>
						</v-btn>
						<v-btn
							v-else icon :color="community.theme.color"
							@click="enableNotification"
						>
							<v-icon>mdi-bell</v-icon>
						</v-btn>
					</v-card-text>
					<community-tab />
				</v-card>
			</v-card-title>
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
import CommunityTab from "@/views/home/community/CommunityTab.vue";
export default {
	name: "Community",
	components: {CommunityTab},
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
		},
		unSubscribe() {},
		subscribe() {},
		disableNotification() {},
		enableNotification() {},
	}
}
</script>

<style scoped lang="scss">
.community-avatar {
	border: 4px solid white !important;
	margin-top: -10px;
}
.px24 {
	font-size: 24px;
}
</style>

<template>
	<v-slide-x-reverse-transition>
		<v-navigation-drawer
			v-if="communityModCogRoute"
			v-model="mainDrawer"
			app clipped
			color="grey lighten-3"
			:class="{'home-sidebar': mdAndUp}"
			:permanent="mdAndUp"
			:temporary="!mdAndUp"
			:width="$vuetify.breakpoint.md ? 220 : 240"
		>
			<div v-if="!mdAndUp" class="pa-4">
				<h3>COMMUNITY MOD</h3>
				<div class="underline" />
			</div>
			<v-list
				v-if="community"
				rounded dense
			>
				<v-list-item-group v-for="(item, index) in items"
					:key="index"
				>
					<v-subheader class="text-uppercase">
						<v-icon>{{ item.icon }}</v-icon>
						<span class="pl-2 weight-700">
							{{ item.name }}
						</span>
					</v-subheader>
					<v-list-item
						:color="community.theme.color"
						v-for="(item, index) in item.children"
						:key="index"
						:to="{name: item.to}"
						class="px-0"
					>
						<v-icon>{{ item.icon }}</v-icon>
						<v-list-item-title class="drawer-item weight-500"
							:class="{
								'px16': !$vuetify.breakpoint.md,
								'px14': $vuetify.breakpoint.md,
							}"
						>
							{{ item.title }}
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</v-slide-x-reverse-transition>
</template>

<script>
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";
import MainDrawer from "@/mixin/MainDrawer.js";
import {mapGetters} from "vuex";

export default {
	name: "CommunityMODCogDrawer",
	mixins: [ScreenSizeMixin, MainDrawer],
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		communityModCogRoute() {
			return this.$route.matched.some(route => route.meta["community_mod"])
		},
		items() {
			return [
				{
					name: "Queues",
					icon: "mdi-tray-full",
					children: [
						{title: "Reports", to: "Community MOD Settings Reports"},
						{title: "Spam", to: "Community MOD Settings Spam"},
						{title: "Edited", to: "Community MOD Settings Edited"},
					]
				},
				{
					name: "User Management",
					icon: "mdi-account-multiple",
					children: [
						{title: "Banned", to: "Community MOD Settings Banned"},
						{title: "Muted", to: "Community MOD Settings Muted"},
						{title: "Approved", to: "Community MOD Settings Approved"},
						{title: "Moderators", to: "Community MOD Settings Moderators"},
					]
				},
				{
					name: "Flair & Emojis",
					icon: "mdi-emoticon",
					children: [
						{title: "Grant User Flair", to: "Community MOD Settings Grant UF"},
						{title: "Emojis", to: "Community MOD Settings Emojis"},
						{title: "User Flair", to: "Community MOD Settings User Flair"},
						{title: "Post Flair", to: "Community MOD Settings Post Flair"},
					]
				},
				{
					name: "Rules & Regulations",
					icon: "mdi-script-text",
					children: [
						{title: "Rules", to: "Community MOD Settings Rules"},
						{title: "Removal Reasons", to: "Community MOD Settings Removal Reasons"},
						{title: "Content controls", to: "Community MOD Settings Content Control"},
						{title: "Automod", to: "Community MOD Settings Automod"},
					]
				},
				{
					name: "Content",
					icon: "mdi-text",
					children: [
						{title: "Scheduled posts", to: "Community MOD Settings Scheduled Post"},
						{title: "Event posts", to: "Community MOD Settings Event"},
					]
				},
				{
					name: "MODMAIL",
					icon: "mdi-email",
					children: [
						{title: "Modmail", to: "Community MOD Settings Email"},
					]
				},
				{
					name: "Chat",
					icon: "mdi-chat",
					children: [
						{title: "Chat settings", to: "Community MOD Settings Chat"},
					]
				},
				{
					name: "Community Activity",
					icon: "mdi-ticket",
					children: [
						{title: "Traffic stats", to: "Community MOD Settings Traffic"},
						{title: "Mod log", to: "Community MOD Settings Log"},
					]
				},
				{
					name: "MOD help center",
					icon: "mdi-timeline-help",
					children: [
						{title: "Mod help center", to: "Community MOD Settings Help Center"},
						{title: "Moderator guidelines", to: "Community MOD Settings Guidelines"},
						{title: "Moderator support", to: "Community MOD Settings Support"},
						{title: "Contact WordClub", to: "Community MOD Settings Contact"},
					]
				},
			]
		}

	}
}
</script>

<style scoped lang="scss">
@import "styles/sidebar";
.underline {
	width: 64%;
	height: 4px;
	background-color: #1d1d1d;
	border-radius: 4px;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		height: 4px;
		width: 4px;
		background-color: white;
		border-radius: 50%;
		left: 20px;
		top: 0;
	}
}
</style>

<template>
	<div class="administration-drawer">
		<v-list>
			<v-list-item v-for="item in items" :key="item.title" :to="item.to"
				exact
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</div>
</template>
<script>
export default {
	name: "AdministrationDrawer",
	computed: {
		items() {
			return [
				{ title: "Site Administration", icon: "mdi-sitemap", to: {name: "Site Administration"} },
				{ title: "Users", icon: "mdi-account", to: {name: "User Administration"} },
				{ title: "Hashtags", icon: "mdi-pound", to: {name: "Hashtag Administration"} },
				{ title: "Communities", icon: "mdi-account-group", to: {name: "Community Administration"} },
				{ title: "Publications", icon: "mdi-newspaper", to: {name: "Publication Administration"} },
				{ title: "Comments", icon: "mdi-comment", to: {name: "Comment Administration"} },
				{ title: "Votes", icon: "mdi-thumb-up", to: {name: "Vote Administration"} },
				{ title: "Bookmarks", icon: "mdi-bookmark", to: {name: "Bookmark Administration"} },
				{ title: "Shares", icon: "mdi-share", to: {name: "Share Administration"} },
				{ title: "Hides", icon: "mdi-eye-off", to: {name: "Hides Administration"} },
				{ title: "Blocks", icon: "mdi-block-helper", to: {name: "Blocks Administration"} },
				{ title: "Avatars", icon: "mdi-account-circle", to: {name: "Avatars Administration"} },
				{ title: "Covers", icon: "mdi-image", to: {name: "Covers Administration"} },
				{ title: "Images", icon: "mdi-image-multiple", to: {name: "Images Administration"} },
				{ title: "Links", icon: "mdi-link", to: {name: "Links Administration"} },
				{ title: "Auth Codes", icon: "mdi-key", to: {name: "Auth Code Administration"} },
				{ title: "Reports", icon: "mdi-alert", to: {name: "Report Administration"} },
				{ title: "Notifications", icon: "mdi-bell", to: {name: "Notification Administration"} },
				{ title: "Bans", icon: "mdi-account-lock", to: {name: "Ban Administration"} },
			]
		}
	}
}
</script>

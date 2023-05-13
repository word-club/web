<template>
	<div class="administration-drawer">
		<v-list>
			<v-list-item v-for="item in items" :key="item.title" :to="item.to">
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
				{ title: "Site Administration", icon: "mdi-sitemap", to: "/administration/site" },
				{ title: "Users", icon: "mdi-account", to: "/administration/users" },
				{ title: "Hashtags", icon: "mdi-pound", to: "/administration/hashtags" },
				{ title: "Communities", icon: "mdi-account-group", to: "/administration/communities" },
				{ title: "Publications", icon: "mdi-newspaper", to: "/administration/publications" },
				{ title: "Comments", icon: "mdi-comment", to: "/administration/comments" },
				{ title: "Votes", icon: "mdi-thumb-up", to: "/administration/votes" },
				{ title: "Bookmarks", icon: "mdi-bookmark", to: "/administration/bookmarks" },
				{ title: "Shares", icon: "mdi-share", to: "/administration/shares" },
				{ title: "Hides", icon: "mdi-eye-off", to: "/administration/hides" },
				{ title: "Blocks", icon: "mdi-block-helper", to: "/administration/blocks" },
				{ title: "Avatars", icon: "mdi-account-circle", to: "/administration/avatars" },
				{ title: "Covers", icon: "mdi-image", to: "/administration/covers" },
				{ title: "Images", icon: "mdi-image-multiple", to: "/administration/images" },
				{ title: "Links", icon: "mdi-link", to: "/administration/links" },
				{ title: "Auth Codes", icon: "mdi-key", to: "/administration/auth_codes" },
				{ title: "Reports", icon: "mdi-alert", to: "/administration/reports" },
				{ title: "Notifications", icon: "mdi-bell", to: "/administration/notifications" },
				{ title: "Bans", icon: "mdi-account-lock", to: "/administration/bans" },
			]
		}
	}
}
</script>

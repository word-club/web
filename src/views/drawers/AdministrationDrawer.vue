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
				{ title: "User", icon: "mdi-account", to: {name: "User Administration"} },
				{ title: "Hashtag", icon: "mdi-pound", to: {name: "Hashtag Administration"} },
				{ title: "Community", icon: "mdi-account-group", to: {name: "Community Administration"} },
				{ title: "Publication", icon: "mdi-newspaper", to: {name: "Publication Administration"} },
				{ title: "Comment", icon: "mdi-comment", to: {name: "Comment Administration"} },
				{ title: "Vote", icon: "mdi-thumb-up", to: {name: "Vote Administration"} },
				{ title: "Bookmark", icon: "mdi-bookmark", to: {name: "Bookmark Administration"} },
				{ title: "Share", icon: "mdi-share", to: {name: "Share Administration"} },
				{ title: "Hide", icon: "mdi-eye-off", to: {name: "Hide Administration"} },
				{ title: "Block", icon: "mdi-block-helper", to: {name: "Block Administration"} },
				{ title: "Avatar", icon: "mdi-account-circle", to: {name: "Avatar Administration"} },
				{ title: "Cover", icon: "mdi-image", to: {name: "Cover Administration"} },
				{ title: "Image", icon: "mdi-image-multiple", to: {name: "Image Administration"} },
				{ title: "Link", icon: "mdi-link", to: {name: "Link Administration"} },
				{ title: "Auth Code", icon: "mdi-key", to: {name: "Auth Code Administration"} },
				{ title: "Report", icon: "mdi-alert", to: {name: "Report Administration"} },
				{ title: "Notification", icon: "mdi-bell", to: {name: "Notification Administration"} },
				{ title: "Ban", icon: "mdi-account-lock", to: {name: "Ban Administration"} },
			]
		}
	}
}
</script>

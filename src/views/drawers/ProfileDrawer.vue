<template>
	<div class="profile-drawer">
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
	name: "ProfileDrawer",
	computed: {
		items() {
			return [
				{
					title: "Overview", icon: "mdi-account",
					to: {name: "Profile Overview"}
				},
				{
					title: "Recent", icon: "mdi-clock",
					to: {name: "Profile Recent"}
				},
				{
					title: "Posts", icon: "mdi-post",
					to: {name: "Profile Posts"}
				},
				{
					title: "Comments", icon: "mdi-comment",
					to: {name: "Profile Comments"}
				},
				{
					title: "Saved", icon: "mdi-bookmark",
					to: {name: "Profile Saved"}
				},
				{
					title: "Shared", icon: "mdi-share",
					to: {name: "Profile Shared"}
				},
				{
					title: "Hidden", icon: "mdi-eye-off",
					to: {name: "Profile Hidden"}
				},
				{
					title: "Upvoted", icon: "mdi-thumb-up",
					to: {name: "Profile Upvoted"}
				},
				{
					title: "Downvoted", icon: "mdi-thumb-down",
					to: {name: "Profile Downvoted"}
				},
				{
					title: "Edit Profile", icon: "mdi-pencil",
					to: {name: "User Settings Profile"}
				}
			]
		}
	}
}
</script>

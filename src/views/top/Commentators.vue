<template>
	<v-card color="transparent" flat>
		<v-card-title>
			Top 50 Commentators
		</v-card-title>
		<v-card-text>
			<v-list class="py-0" outlined
				v-if="topCommentators"
			>
				<v-list-item
					v-for="(user, index) in topCommentators"
					:key="user.id"
					:class="{
						'border-bottom': topCommentators.length !== index +1
					}"
					:to="{name: 'User Overview', params: {username: user.username}}"
				>
					<v-list-item-avatar size="40" color="grey lighten-2">
						<v-img
							v-if="user.profile.avatar"
							:src="$link(user.profile.avatar.image)"
						/>
						<div class="full-width text-center px22 grey--text text--darken-2">
							{{ user.username[0].toUpperCase() }}
						</div>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>{{ getName(user) }}</v-list-item-title>
						<v-list-item-subtitle>
							<v-chip small color="orange"
								class="mx-1"
								outlined
							>
								<v-icon left size="20">mdi-arrow-up</v-icon>
								<b>{{user.profile.discussions}}</b><span class="pl-1">Discussions</span>
							</v-chip>
							<v-chip small color="primary"
								class="mx-1"
								outlined
							>
								<v-icon left size="20">mdi-arrow-up</v-icon>
								<b>{{user.profile.supports}}</b><span class="pl-1">Supports</span>
							</v-chip>
						</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-action>
						<v-btn rounded
							v-if="currentUser && user.username !== currentUser.username && !user.is_followed"
							depressed color="primary">Follow</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Commentators",
	computed: {
		...mapGetters(["topItems"]),
		...mapGetters({
			currentUser: "user/current"
		}),
		topCommentators() {
			return this.topItems["commentators"]
		}
	},
	methods: {
		getName(user) {
			if (user.first_name && user.last_name)
				return `${user.first_name} ${user.last_name}`
			return user.username
		}
	}
}
</script>

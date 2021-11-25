<template>
	<v-menu class="user-hover-box"
		open-on-hover
		nudge-top="-30"
		nudge-left="-34"
		close-delay="200"
		open-delay="200"
		max-width="320"
	>
		<template #activator="{on, attrs}">
			<div class="px14 cursor hover-underline weight-500"
				v-bind="attrs"
				@click="toUserOverview(user.username)"
				v-on="on"
			>
				{{ user.username }}
			</div>
		</template>
		<v-card>
			<v-list-item>
				<v-list-item-avatar
					:color="user.avatar ? '' : 'primary'" tile
					class="d-flex justify-center align-center rounded"
				>
					<v-img v-if="user.avatar"
						:src="$link(user.avatar)"
					/>
					<div v-else class="full-width text-h5 white--text text-uppercase">{{ user.username[0] }}</div>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{user.username}}</v-list-item-title>
					<v-list-item-subtitle>
						<span>{{user.username}}</span>
						<span><v-icon>mdi-circle-small</v-icon></span>
						<span>{{ $moment(user.date_joined).fromNow() }}</span>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-card-text class="pa-4 d-flex justify-space-between">
				<div>
					<div class="d-flex align-center">
						<v-icon color="primary lighten-2">
							mdi-thumb-up-outline
						</v-icon>
						<div class="pl-3 px18 weight-500">
							{{ user.reactions }}
						</div>
					</div>
					<div>Reactions</div>
				</div>
				<div>
					<div class="d-flex align-center">
						<v-icon color="primary lighten-2">
							mdi-cake-variant
						</v-icon>
						<div class="pl-3 px18 weight-500">
							<span v-if="user.birth_date">
								{{ $moment(user.birth_date).format('YYYY-M-D') }}
							</span>
							<span v-else>-</span>
						</div>
					</div>
					<div>Cake day</div>
				</div>
			</v-card-text>
			<v-card-actions>
				<v-btn block rounded
					outlined color="primary"
				>
					Message
				</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn block rounded
					color="primary"
				>
					Follow
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-menu>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "UserHoverBox",
	mixins: [RouteMixin],
	props: {
		user: {
			required: true,
			type: Object
		}
	},
}
</script>

<style scoped>

</style>

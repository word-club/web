<template>
	<v-menu class="user-hover-box"
		open-on-hover
		nudge-top="-27"
		nudge-left="2"
	>
		<template #activator="{on, attrs}">
			<div class="px14 cursor hover-underline weight-500"
				v-bind="attrs"
				@click="toUserOverview(user.username)"
				v-on="on"
			>
				u/{{ user.username }}
			</div>
		</template>
		<user-peek :user="user" />
	</v-menu>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import UserPeek from "@/views/home/user/components/UserPeek.vue";

export default {
	name: "UserHoverBox",
	components: {UserPeek},
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

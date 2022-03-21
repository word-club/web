<template>
	<v-menu class="community-hover-box"
		open-on-hover
		nudge-top="-30"
		nudge-left="-34"
		close-delay="200"
		open-delay="200"
		:close-on-content-click="false"
	>
		<template #activator="{on, attrs}">
			<div class="d-flex align-center"
				v-bind="attrs"
				v-on="on"
			>
				<wc-avatar
					size="25" tile class="rounded cursor"
					:color="(community.avatar) ? 'transparent' : community.theme.color"
					@click="toCommunityDetail(community.unique_id)"
					:src="community.avatar"
					span-class="full-width white--text weight-500 px18 text-center"
					:text="community.name"
				/>
				<div class="px-1" />
				<div
					class="px14 weight-600 cursor hover-underline"
					:class="`${community.theme.color}--text`"
					@click="toCommunityDetail(community.unique_id)"
				>
					{{ community.name }}
				</div>
			</div>
		</template>
		<community-peek :community="community" max-width="300" />
	</v-menu>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "CommunityHoverBox",
	components: {
		CommunityPeek: () => import("@/views/community/sidebar/CommunityPeek.vue")
	},
	mixins: [RouteMixin],
	props: {
		community: {
			type: Object,
			required: true
		}
	}
}
</script>
<style scoped lang="scss">

</style>

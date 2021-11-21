<template>
	<v-menu class="community-hover-box"
		open-on-hover
		nudge-top="-30"
		nudge-left="-34"
		close-delay="200"
		:close-on-content-click="false"
	>
		<template #activator="{on, attrs}">
			<div class="d-flex align-center"
				v-bind="attrs"
				v-on="on"
			>
				<v-avatar
					size="30"
					:color="community.theme.color" tile
					class="rounded cursor"
					@click="toCommunityDetail(community.unique_id)"
				>
					<v-img v-if="community.avatar"
						:src="$link(community.avatar)"
					/>
				</v-avatar>
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
		<community-peek :community="community" />
	</v-menu>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import CommunityPeek from "@/views/home/community/CommunityPeek.vue";

export default {
	name: "CommunityHoverBox",
	components: {CommunityPeek},
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

<template>
	<v-card-text class="d-flex align-center pa-2 flex-wrap justify-space-between">
		<community-hover-box
			v-if="item.community && $route.name !== 'Community'"
			:community="item.community"
		/>
		<v-icon
			v-if="item.community && $route.name !== 'Community'"
		>
			mdi-circle-small
		</v-icon>
		<div v-else
			class="px-1"
		/>
		<user-hover-box :user="item.created_by" />
		<v-icon>mdi-circle-small</v-icon>
		<div class="publication-timestamp">
			{{ $moment(item.timestamp).fromNow() }}
		</div>
		<v-spacer />
		<v-btn icon>
			<v-icon>mdi-dots-horizontal</v-icon>
		</v-btn>
	</v-card-text>
</template>

<script>
import UserHoverBox from "@/components/utils/UserHoverBox.vue";
import CommunityHoverBox from "@/components/utils/CommunityHoverBox.vue";

export default {
	name: "ItemHeader",
	props: {item: {type: Object, default: () => {}}},
	components: {
		UserHoverBox,
		CommunityHoverBox,
	}
}
</script>

<style scoped lang="scss">

</style>

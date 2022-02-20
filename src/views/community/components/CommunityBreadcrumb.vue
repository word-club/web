<template>
	<div class="community-breadcrumb">
		<div class="community-breadcrumb--item"
			@click="$router.push(communityItem.to)"
		>
			<v-icon size="20"
				:color="community.theme.color"
				class="community-breadcrumb--item--avatar"
			>
				mdi-label
			</v-icon>
			<div class="community-breadcrumb--item--title"
				:class="community.theme.color + '--text'"
			>
				{{ communityItem.text }}
			</div>
		</div>
		<div class="community-breadcrumb--divider">/</div>
		<div class="community-breadcrumb--c-item">
			<div class="community-breadcrumb--c-item--title">
				{{ currentItem.text }}
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "CommunityBreadcrumb",
	computed: {
		...mapGetters({
			community: "community/inView",
		}),
		communityItem() {
			return {
				exact: true,
				disabled: false,
				text: this.community.unique_id,
				avatar: this.community.avatar?.image,
				to: {
					name: "Community Detail",
					params: { id: this.community.id }
				}
			}
		},
		currentItem() {
			return {
				disabled: true,
				text: this.$route.name.split("Community MOD Settings ")[1],
			}
		}
	},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.community-breadcrumb {
	display: flex;
	align-items: center;
	font-size: .875rem;
	text-transform: uppercase;
	padding: 12px;
	background-color: white;
	border-bottom: 2px solid #c2c2c2;
	&--item {
		display: flex;
		align-items: center;
		padding: 0 4px;
		&--title {
			font-weight: 600;
			cursor: pointer;
		}
		&--avatar {
			margin-right: 4px;
		}
	}
	&--c-item {
		padding: 0 4px;
		&--title {
			font-weight: 500;
			color: #4d4d4d;
		}
	}
}
</style>

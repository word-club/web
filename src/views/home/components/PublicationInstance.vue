<template>
	<v-card class="feed-item" outlined>
		<item-header :item="publication" />
		<v-card-title class="py-0 pb-2 px-2 cursor publication-title grey lighten-4"
			@click="toPublicationDetail(publication.id)"
		>
			<h4>{{ publication.title }}</h4>
		</v-card-title>
		<item-images v-if="publication.type === 'media'" :item="publication" />
		<item-link v-if="publication.type === 'link'" :link="publication.link"/>
		<item-content v-if="publication.type ==='editor'" :content="JSON.parse(publication.content)" />
		<item-actions @init="$emit('init')" :item="publication"/>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "PublicationInstance",
	props: {
		publication: {type: Object, required: true}
	},
	mixins: [RouteMixin],
	components: {
		ItemHeader: () => import("@/components/feeds/ItemHeader.vue"),
		ItemImages: () => import("@/components/feeds/ItemImages.vue"),
		ItemLink: () => import("@/components/feeds/ItemLink.vue"),
		ItemContent: () => import("@/components/feeds/ItemContent.vue"),
		ItemActions: () => import("@/components/feeds/ItemActions.vue"),
	}
}
</script>
<style lang="scss" scoped>
.feed-item:hover {
	border: 1px solid #707070 !important;
}
.v-btn {
	font-size: 12px !important;
	font-weight: 600 !important;
	color: #666666;
}
.publication-title {
	font-size: 22px;
	letter-spacing: 0;
	font-weight: 500 !important;
	color: #505050;
}
</style>

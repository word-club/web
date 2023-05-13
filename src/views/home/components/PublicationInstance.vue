<template>
	<v-card outlined
		:class="{
			'feed-item-ban': publication.ban,
			'feed-item': !publication.ban
		}"
	>
		<item-header :item="publication" />
		<v-card-title class="publication-title"
			@click="toPublicationDetail(publication.id)"
			:class="{ 'grey--text': publication.ban }"
		>
			<h4>{{ publication.title }}</h4>
		</v-card-title>
		<item-images v-if="publication.type === 'media'" :item="publication" />
		<item-link v-if="publication.type === 'link'" :link="publication.links"/>
		<item-content v-if="publication.type ==='editor'" :content="editorContent" />
		<item-actions v-if="!publication.ban" @init="$emit('init')" :item="publication"/>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import EditorContentMixin from "@/mixin/EditorContentMixin.js";

export default {
	name: "PublicationInstance",
	props: {
		publication: {type: Object, required: true}
	},
	mixins: [RouteMixin, EditorContentMixin],
	components: {
		ItemHeader: () => import("@/components/feeds/ItemHeader"),
		ItemImages: () => import("@/components/feeds/ItemImages"),
		ItemLink: () => import("@/components/feeds/ItemLink"),
		ItemContent: () => import("@/components/feeds/ItemContent"),
		ItemActions: () => import("@/components/feeds/ItemActions"),
	}, created() {
		this.mini = true
	}
}
</script>
<style lang="scss" scoped>
.feed-item:hover {
	border: 1px solid #707070 !important;
}
.feed-item-ban:hover {
	border: 1px solid darkred !important;
}
.v-btn {
	font-size: 12px !important;
	font-weight: 600 !important;
	color: #666666;
}
.publication-title {
	padding-inline: .5rem;
	padding-bottom: .5rem;
	cursor: pointer;
	font-size: 22px;
	letter-spacing: 0;
	font-weight: 500 !important;
	color: #505050;
}
</style>

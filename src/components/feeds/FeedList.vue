<template>
	<v-card :loading="isLoading" flat tile color="primary" class="feed-item">
		<v-card v-for="(item, index) in publications.results"
			:key="index" class="my-4 feed-item" outlined
		>
			<item-header :item="item" />
			<v-card-title class="py-1 cursor publication-title"
				@click="toPublicationDetail(item.id)"
			>
				<h4>{{ item.title }}</h4>
			</v-card-title>
			<item-images v-if="item.type === 'media'" :item="item" />
			<item-link v-if="item.type === 'link'" :link="item.link"/>
			<item-content v-if="item.type ==='editor'" :content="JSON.parse(item.content)" />
			<item-actions @init="fetchPublications()" :item="item"/>
		</v-card>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import ItemHeader from "@/components/feeds/ItemHeader.vue";
import RouteMixin from "@/mixin/RouteMixin.js";
import ItemImages from "@/components/feeds/ItemImages.vue";
import ItemLink from "@/components/feeds/ItemLink.vue";
import ItemContent from "@/components/feeds/ItemContent.vue";
import ItemActions from "@/components/feeds/ItemActions.vue";
import PublicationType from "@/mixin/PublicationType.js";

export default {
	name: "FeedList",
	mixins: [RouteMixin, PublicationType],
	props: {
		payload: {
			type: Object,
			default: () => ({
				is_published: true,
				depth: 3
			})
		}
	},
	data: () => ({
		isLoading: true
	}),
	components: {
		ItemActions,
		ItemContent,
		ItemLink,
		ItemImages,
		ItemHeader
	},
	computed: {
		...mapGetters({
			publications: "publication/list"
		})
	},
	async created() {
		await this.fetchPublications()
	},
	methods: {
		async fetchPublications() {
			await this.$store.dispatch("publication/filter", this.payload)
			this.isLoading = false
		}
	}
}
</script>
<style lang="scss" scoped>
.publication-instance:hover {
	border: 1px solid black !important;
}
.v-btn {
	font-size: 12px !important;
	font-weight: 600 !important;
	color: #585858;
}
.publication-title {
	font-size: 20px;
	font-weight: 600;
	color: #505050;
}
.feed-item {
	background-color: transparent!important;
}
</style>

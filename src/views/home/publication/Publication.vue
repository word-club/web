<template>
	<v-card outlined :loading="loading"
		class="mx-auto" max-width="800"
	>
		<div v-if="publication">
			<item-header :item="publication" />
			<v-card-title class="py-2 publication-title">
				{{ publication.title }}
			</v-card-title>
			<item-images v-if="publication.type === 'media'" :item="publication" />
			<item-link v-if="publication.type === 'link'" :link="publication.link"/>
			<item-content v-if="publication.type ==='editor'" :content="JSON.parse(publication.content)" />
			<item-actions :item="publication" @init="fetchDetail" :detail="true" />
			<v-divider />
			<v-card-text>
				<v-menu offset-y>
					<template #activator="{on, attrs}">
						<v-btn rounded
							depressed small
							v-bind="attrs"
							v-on="on"
						>
							<span class="px10 font-weight-bold primary--text">
								Sort By: Top (Suggested)
							</span>
							<v-icon small
								color="primary"
							>
								mdi-chevron-down
							</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item>Kiran</v-list-item>
					</v-list>
				</v-menu>
				<v-divider class="my-2" />
				<div class="d-flex">
					<v-spacer />
					<div class="px12 font-weight-bold primary--text">
						View discussions in other communities
					</div>
				</div>
			</v-card-text>
			<v-card-text class="py-0">
				<comment-item v-for="(comment, index) in publication.comments"
					:key="index"
					:index="index"
					:item="comment"
					:count="publication.comments.length"
					@init="$emit('init')"
				/>
			</v-card-text>
		</div>
	</v-card>
</template>

<script>
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters, mapMutations} from "vuex";
import ItemHeader from "@/components/feeds/ItemHeader.vue";
import ItemContent from "@/components/feeds/ItemContent.vue";
import ItemImages from "@/components/feeds/ItemImages.vue";
import ItemLink from "@/components/feeds/ItemLink.vue";
import ItemActions from "@/components/feeds/ItemActions.vue";
import CommentItem from "@/views/home/publication/CommentItem.vue";
import FetchMixin from "@/mixin/FetchMixin.js";

export default {
	name: "Publication",
	components: {
		CommentItem,
		ItemActions,
		ItemLink,
		ItemImages,
		ItemContent,
		ItemHeader
	},
	mixins: [RouteMixin, FetchMixin],
	data: () => ({
		myComment: "",
		model: "publication"
	}),
	computed: {
		...mapGetters({
			publication: "publication/inView"
		})
	},
	created() {
		this.fetchDetail()
	},
	methods: {
		...mapMutations("publication", ["SET_TO_VIEW"])
	}
}
</script>

<style scoped>
.publication-title {
	font-size: 32px; line-height: 32px;
}
</style>

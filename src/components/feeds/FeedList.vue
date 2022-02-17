<template>
	<v-card flat color="transparent">
		<v-scale-transition>
			<v-card v-if="isLoading">
				<v-card-text>
					<v-card-title>
						We're fetching publications. Just a moment...
					</v-card-title>
					<v-card-subtitle>
						<v-progress-linear indeterminate height="6" rounded />
					</v-card-subtitle>
				</v-card-text>
			</v-card>
			<div v-else>
				<v-card
					v-if="publications.results.length"
					class="publication-list"
					flat color="primary"
					:loading="fetchingPubs"
					loader-height="6"
				>
					<publication-instance
						v-for="publication in publications.results"
						:key="publication.id"
						:id="`publication-${publication.id}`"
						:publication="publication"
						@init="getPublications"
						class="mb-4 publication-item"
					/>
				</v-card>
				<v-card v-else outlined min-height="70vh" class="pt-16">
					<v-card-text class="px16 weight-500 text-center pt-16">
						Hmm... Sorry we're out of posts. Please visit us later :)
					</v-card-text>
				</v-card>
			</div>
		</v-scale-transition>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import PublicationType from "@/mixin/PublicationType.js";
import FetchPublications from "@/mixin/FetchPublications.js";

export default {
	name: "FeedList",
	components: {
		PublicationInstance: () => import("@/views/home/components/PublicationInstance")
	},
	mixins: [RouteMixin, PublicationType, FetchPublications],
	props: {
		payload: {
			required: false,
			default: () => {}
		}
	},
	data: () => ({
		isLoading: false,
	}),
	computed: {
		...mapGetters({
			publications: "publication/list"
		}),
	},
	created() {
		// only set loading to true if the store is empty
		this.isLoading = !this.publications?.count
		setTimeout(() => {
			this.getPublications({payload: this.payload})
				.then(() => {this.isLoading = false})
		}, 2000)
	},
	watch: {
		"$route.params.sortBy": {
			async handler(v) {
				await this.getPublications(v)
			}
		}
	},
	methods: {
		async getPublications({sortString = "best", payload = {}} = {}) {
			const sortBy = this.$route.params.sortBy
			if (sortBy) sortString = sortBy

			sortString = this.$helper.parseSortString(sortString)

			await this.$store.dispatch("publication/setFilterset", sortString)
			await this.fetchPublications({sort_by: sortString, ...payload})
		}
	},
}
</script>
<style scoped lang="scss">
.publication-list {
	background-color: transparent !important;
}
</style>

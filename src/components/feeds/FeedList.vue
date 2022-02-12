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
				<div v-if="pubs" class="publication-list">
					<publication-instance
						v-for="publication in publications.results"
						:key="publication.id"
						:id="`publication-${publication.id}`"
						:publication="publication"
						@init="getPublications"
						class="mb-4 publication-item"
					/>
				</div>
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
	data: () => ({
		isLoading: true,
	}),
	computed: {
		...mapGetters({
			publications: "publication/list"
		}),
		pubs() {
			if (!this.publications) return false
			if (!this.publications.results) return false
			return this.publications.results.length
		}
	},
	created() {
		setTimeout(() => {
			console.log(this.loading)
			this.getPublications()
				.then(() => {this.isLoading = false})
		}, 3000)
	},
	watch: {
		"$route.params.sortBy": {
			async handler(v) {
				await this.getPublications(v)
			}
		}
	},
	methods: {
		async getPublications(sortString = "best") {
			const sortBy = this.$route.params.sortBy
			if (sortBy) sortString = sortBy

			sortString = this.$helper.parseSortString(sortString)

			await this.$store.dispatch("publication/setFilterset", sortString)
			await this.fetchPublications({sort_by: sortString})
		}
	},
}
</script>

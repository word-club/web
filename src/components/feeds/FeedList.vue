<template>
	<v-card flat color="transparent">
		<v-scale-transition>
			<div class="pt-2" v-if="isLoading">
				<v-progress-linear indeterminate height="6" rounded />
			</div>
		</v-scale-transition>
		<div v-if="publications.results.length">
			<publication-instance
				v-for="publication in publications.results"
				:key="publication.id"
				:publication="publication"
				@init="getPublications"
				class="mb-4"
			/>
		</div>
		<v-card v-else outlined min-height="70vh" class="pt-16">
			<v-card-text class="px16 weight-500 text-center pt-16">
				Hmm... Sorry we're out of posts. Please visit us later.
			</v-card-text>
		</v-card>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import PublicationType from "@/mixin/PublicationType.js";
import PublicationInstance from "@/views/home/components/PublicationInstance.vue";
import FetchPublications from "@/mixin/FetchPublications.js";

export default {
	name: "FeedList",
	components: {PublicationInstance},
	mixins: [RouteMixin, PublicationType, FetchPublications],
	data: () => ({
		isLoading: false,
	}),
	computed: {
		...mapGetters({
			publications: "publication/list"
		})
	},
	async created() {
		await this.getPublications()
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
			this.isLoading = true
			const sortBy = this.$route.params.sortBy
			if (sortBy) sortString = sortBy

			sortString = this.$helper.parseSortString(sortString)

			await this.$store.dispatch("publication/setFilterset", sortString)
			await this.fetchPublications({sort_by: sortString})
			this.isLoading = false
		}
	},
}
</script>

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
				@init="fetchPublications"
				class="mb-4"
			/>
		</div>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
import PublicationType from "@/mixin/PublicationType.js";
import PublicationInstance from "@/views/home/components/PublicationInstance.vue";

export default {
	name: "FeedList",
	components: {PublicationInstance},
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

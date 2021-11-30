<template>
	<v-scale-transition>
		<v-col v-if="inProgress && inProgress['images'] && inProgress['images'].length"
			cols="12" class="pa-0"
		>
			<v-row class="ma-0 pa-0">
				<v-col cols="4"
					v-for="img in inProgress.images"
					:key="img.id"
				>
					<card-img max-width="400" :src="$link(img.image)">
						<v-btn icon color="error"
							@click="deleteImage(img.id)"
						>
							<v-icon>mdi-delete</v-icon>
						</v-btn>
					</card-img>
				</v-col>
			</v-row>
		</v-col>
	</v-scale-transition>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ImageList",
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		})
	},
	methods: {
		deleteImage(itemID) {
			const url = this.$util.format(this.$urls.publication.imageDetail, itemID)
			this.$axios.delete(url)
				.then(() => {
					this.$store.dispatch("publication/removeImageItem", this.inProgress.id, itemID)
				})
		},
	}
}
</script>

<style scoped lang="scss">

</style>

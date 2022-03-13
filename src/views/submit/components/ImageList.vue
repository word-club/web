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
			<confirm-dialog @refresh="$emit('refresh')" />
		</v-col>
	</v-scale-transition>
</template>

<script>
import {mapGetters} from "vuex";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "ImageList",
	mixins: [ConfirmDialogMixin],
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		})
	},
	methods: {
		deleteImage(itemID) {
			const url = this.$util.format(this.$urls.image.detail, itemID)
			this.openConfirmDialog(
				"Are you sure you want to delete this image?",
				"DELETE",
				url,
				["refresh"],
				"Image removed successfully.",
				"Image could not be removed."
			)
		},
	}
}
</script>

<style scoped lang="scss">

</style>

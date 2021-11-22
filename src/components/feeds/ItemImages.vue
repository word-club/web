<template>
	<v-card-text class="pa-0">
		<v-card
			dark tile flat
			height="350"
		>
			<v-carousel height="350" hide-delimiters
				:show-arrows="medias.length > 1"
			>
				<v-carousel-item
					v-for="(image, index) in medias"
					:key="index"
					:src="$link(image.image || image.image_url)"
				/>
			</v-carousel>
		</v-card>
	</v-card-text>
</template>

<script>
export default {
	name: "ItemImages",
	props: {
		item: {
			type: Object, default: () => ({
				images: [],
				image_urls: []
			})
		}
	},
	computed: {
		medias() {
			return this.item.images.concat(this.item.image_urls)
		}
	}
}
</script>

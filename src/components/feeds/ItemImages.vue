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
				>
					<v-img
						contain height="350"
						:src="$link(image.image || image.image_url)"
					>
						<div class="fill-height">
							<v-btn icon dark
								class="fullscreen-btn"
							>
								<v-icon>mdi-fullscreen</v-icon>
							</v-btn>
						</div>
					</v-img>
				</v-carousel-item>
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
<style lang="scss" scoped>
.fill-height {
	position: relative;
	.fullscreen-btn {
		visibility: hidden;
		position: absolute;
		bottom: 2px; right: 2px;
		transition: visibility ease-in-out;
	}
}
.fill-height:hover {
	.fullscreen-btn {
		visibility: visible;
	}
}
</style>

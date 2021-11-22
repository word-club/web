<template>
	<v-card-text class="pa-0">
		<div v-if="item.images">
			<v-card
				v-for="(image, index) in item.images"
				:key="index"

				dark tile
				flat
				height="350"
			>
				<v-img :src="$link(image.image)"
					height="350"
					contain
				/>
			</v-card>
		</div>
		<div v-if="item.image_urls">
			<v-card
				v-for="(image, index) in item.image_urls"
				:key="index"

				dark tile
				flat
				height="350"
			>
				<v-img :src="$link(image.image_url)"
					height="350"
					contain
				/>
			</v-card>
		</div>
	</v-card-text>
</template>

<script>
export default {
	name: "ItemImages",
	props: {item: {type: Object, default: () => {}}},
}
</script>

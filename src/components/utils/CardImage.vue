<template>
	<v-card :height="height"
		:max-width="maxWidth"
		class="card-image"
		dark flat tile
	>
		<v-card-actions class="actions rounded flex-wrap align-center">
			<v-btn icon
				class="fullscreen-btn"
				@click="fullscreen=true"
			>
				<v-icon>
					mdi-fullscreen
				</v-icon>
			</v-btn>
			<v-spacer />
			<slot />
		</v-card-actions>
		<v-card-actions class="info rounded flex-wrap align-center">
			<slot name="info" />
		</v-card-actions>
		<v-dialog v-model="fullscreen"
			fullscreen
		>
			<v-card height="100%"
				dark
				tile
			>
				<v-img
					contain
					height="100%"
					:src="$link(src)"
				>
					<v-btn
						fab dark
						x-small class="ma-4"
						color="grey darken-4"
						@click="fullscreen=false"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-img>
			</v-card>
		</v-dialog>
		<v-img
			:height="height"
			:contain="contain"
			:src="$link(src)"
		/>
	</v-card>
</template>

<script>
export default {
	name: "CardImage",
	props: {
		height: {
			type: String,
			default: ""
		},
		maxWidth: {
			type: String,
			default: "100%"
		},
		src: {type: String, required: true},
		contain: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		fullscreen: false
	})
}
</script>

<style scoped lang="scss">
.card-image {
	position: relative;
	.actions {
		transition: opacity ease .3s;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 100%;
		background-color: #3377d20a;
		z-index: 1;
		height: 45px;
		.fullscreen-btn {
			position: absolute;
			left: 4px;
			top: 4px;
			z-index: 1;
		}
	}
	.info {
		transition: opacity ease .3s;
		opacity: 0;
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: #3377d20a !important;
		z-index: 1;
		border-radius: 0 !important;
	}
}
.card-image:hover {
	.actions, .info {
		opacity: 1;
	}
}
</style>

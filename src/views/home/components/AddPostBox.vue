<template>
	<v-card outlined>
		<v-card-title class="pa-3">
			<v-avatar size="38"
				color="grey darken-2"
				class="mr-2"
			/>
			<v-responsive class="px-2"
				max-width="1200"
			>
				<v-text-field
					dense outlined
					hide-details
					placeholder="Create Post"
					full-width
				>
					<template #prepend-inner>
						<v-icon size="22">
							mdi-home
						</v-icon>
					</template>
				</v-text-field>
			</v-responsive>
			<v-btn icon>
				<v-icon>mdi-image</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-link-variant</v-icon>
			</v-btn>
		</v-card-title>
	</v-card>
</template>

<script>
export default {
	name: "AddPostBox",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

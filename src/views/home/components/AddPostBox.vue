<template>
	<v-card outlined>
		<v-card-title class="pa-3">
			<v-avatar size="38"
				:color="color"
				class="mr-2"
			/>
			<v-responsive class="px-2 py-1"
				max-width="1200"
			>
				<v-text-field
					dense outlined
					hide-details
					placeholder="Create Post"
					full-width
					:color="color"
				>
					<template
						v-if="$route.path === '/'"
						#prepend-inner
					>
						<v-icon size="22">
							mdi-home
						</v-icon>
					</template>
				</v-text-field>
			</v-responsive>
			<v-btn icon>
				<v-icon>mdi-image-outline</v-icon>
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
	props: {
		color: {
			default: "primary",
			required: false,
			type: String
		}
	},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<!--<style scoped lang="scss">-->
<!--::v-deep.v-text-field&#45;&#45;outlined fieldset {-->
<!--	border-color: #0078cd !important;-->
<!--}-->
<!--</style>-->

<template>
	<v-card outlined>
		<v-card-actions class="actions pa-3">
			<v-btn rounded
				depressed
			>
				<v-icon left>
					mdi-rocket
				</v-icon>
				Best
			</v-btn>
			<v-btn rounded
				depressed
			>
				<v-icon left>
					mdi-fire
				</v-icon>
				Hot
			</v-btn>
			<v-btn rounded
				depressed
			>
				<v-icon left>
					mdi-white-balance-sunny
				</v-icon>
				New
			</v-btn>
			<v-btn rounded
				depressed
			>
				<v-icon left>
					mdi-arrow-up-bold-outline
				</v-icon>
				Top
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-view-agenda</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "HotBar",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style lang="scss" scoped>

</style>

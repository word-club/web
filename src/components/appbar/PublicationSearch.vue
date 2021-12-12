<template>
	<v-responsive
		max-width="1200"
		height="100%"
		class="d-flex align-center justify-center px-2"
	>
		<v-text-field
			v-model="search"
			dense outlined clearable
			hide-details aria-autocomplete="search_publication"
			placeholder="Search WordClub"
		>
			<template #prepend-inner>
				<v-icon size="22">mdi-magnify</v-icon>
			</template>
		</v-text-field>
	</v-responsive>
</template>

<script>
export default {
	name: "PublicationSearch",
	data: () => ({
		search: null
	}),
	computed: {},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

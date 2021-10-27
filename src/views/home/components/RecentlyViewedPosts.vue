<template>
	<v-card outlined>
		<v-list two-line>
			<v-subheader class="text-uppercase">
				Recent Posts
			</v-subheader>
			<v-list-item-group v-for="n in 2"
				:key="n"
			>
				<v-list-item>
					<v-list-item-avatar tile
						size="50"
						color="grey darken-2 rounded-lg"
					/>
					<v-list-item-content>
						<v-list-item-title>Some title will go in this section</v-list-item-title>
						<v-list-item-subtitle>
							<span>931 points</span>
							<span><v-icon>mdi-circle-small</v-icon></span>
							<span>36 comments</span>
							<span><v-icon>mdi-circle-small</v-icon></span>
							<span>2h</span>
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-divider v-if="n !== 2"
					class="mx-4"
				/>
			</v-list-item-group>
		</v-list>
	</v-card>
</template>

<script>
export default {
	name: "RecentlyViewedPosts",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-card outlined>
		<v-list-item two-line>
			<v-list-item-icon>
				<v-icon color="orange">
					mdi-apple-keyboard-command
				</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>
					WordClub Premium
				</v-list-item-title>
				<v-list-item-subtitle
					class="normal-whitespace"
				>
					The best WordClub experience, with monthly Coins
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<v-card-actions>
			<v-btn
				depressed dark
				block rounded
				color="orange"
			>
				Try Now
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "TryWordClubPremium",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

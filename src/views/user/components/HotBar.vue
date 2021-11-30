<template>
	<v-card outlined>
		<v-card-actions>
			<v-btn depressed
				rounded class="primary--text"
			>
				<v-icon left
					color="primary"
				>
					mdi-white-balance-sunny
				</v-icon>
				New
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
					mdi-arrow-up-bold-outline
				</v-icon>
				Top
			</v-btn>
			<v-spacer v-if="isProfilePostsRoute" />
			<v-btn
				v-if="isProfilePostsRoute"
				text rounded
				class="primary--text weight-600"
			>
				Drafts
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "HotBar",
	computed: {
		isProfilePostsRoute() {
			return this.$route.name === "Profile Posts"
		}
	},
}
</script>

<style scoped>

</style>

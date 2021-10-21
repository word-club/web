<template>
	<v-app-bar
		app
		color="grey lighten-4"
		height="55"
		clipped-left
		clipped-right
	>
		<div class="d-flex align-center px-2">
			<v-avatar
				size="40"
				color="grey"
			/>
			<div class="px-2" />
			<h4>WordClub</h4>
		</div>
		<v-responsive
			max-width="200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchCommunities"
				dense outlined
				hide-details
				placeholder="Home"
			>
				<template #prepend-inner>
					<v-icon size="22">
						mdi-home
					</v-icon>
				</template>
			</v-text-field>
		</v-responsive>
		<v-responsive
			max-width="1200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchPublications"
				dense outlined
				hide-details
				placeholder="Search WordClub"
			>
				<template #prepend-inner>
					<v-icon size="22">
						mdi-magnify
					</v-icon>
				</template>
			</v-text-field>
		</v-responsive>
		<v-spacer />

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-thermostat
			</v-icon>
		</v-btn>

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-ballot-recount
			</v-icon>
		</v-btn>

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-bell
			</v-icon>
		</v-btn>

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="26">
				mdi-plus
			</v-icon>
		</v-btn>
		<div class="px-4" />
		<v-avatar color="grey"
			size="30"
		/>
	</v-app-bar>
</template>

<script>
export default {
	name: "TheAppBar",
	data: () => ({
		searchCommunities: "",
		searchPublications: ""
	}),
	computed: {},
	methods: {}
}
</script>

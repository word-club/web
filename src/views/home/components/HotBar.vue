<template>
	<v-card outlined>
		<v-card-actions
			class="pa-3 flex-wrap justify-space-between"
		>
			<v-btn
				rounded
				depressed
				:class="`${color}--text`"
			>
				<v-icon left
					:color="color"
				>
					mdi-rocket
				</v-icon>
				Best
			</v-btn>
			<v-btn
				rounded
				depressed
			>
				<v-icon left>
					mdi-fire
				</v-icon>
				Hot
			</v-btn>
			<v-btn
				rounded
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
			<v-avatar size="50">
				<v-img :src="require('@/assets/w_art.jpg')"></v-img>
			</v-avatar>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "HotBar",
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

<style lang="scss" scoped>
.v-btn {
	font-size: 13px;
	font-weight: 600;
	color: #454545;
	padding: 0 8px !important;
}
</style>

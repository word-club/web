<template>
	<v-card class="transparent" flat>
		<v-card-text>
			<v-card dark color="success">
				<v-card-actions>
					<v-avatar>
						<v-icon large>mdi-check-circle</v-icon>
					</v-avatar>
					<v-card-title class="px-2">
						Authorize your Community
					</v-card-title>
				</v-card-actions>
			</v-card>
		</v-card-text>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col cols="12">
					<text-field
						v-model="email"
						name="email"
						label="Email Address"
						icon="mdi-at"
						type="email"
						:errors="formErrors"
					/>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-5">
			<v-divider />
			<div class="py-1" />
			<v-card-actions>
				<v-btn color="grey darken-3"
					dark outlined
					:to="{'name': 'Community Hashtags'}"
				>Hashtags</v-btn>
				<v-spacer />
				<v-btn color="grey lighten-1"
					dark depressed
					:to="{'name': 'Community Administration'}"
				>Skip</v-btn>
				<v-btn color="success"
					:to="{'name': 'Community Administration'}"
				>Next</v-btn>
			</v-card-actions>
		</div>
	</v-card>
</template>

<script>
import TextField from "@/components/form/TextField.vue";
import {mapGetters} from "vuex";
export default {
	name: "Authorization",
	components: {TextField},
	props: {},
	data: () => ({
		email: null
	}),
	computed: {
		...mapGetters({
			formErrors: "community/errorList"
		})
	},
	methods: {}
}
</script>

<style scoped>

</style>

<template>
	<v-card color="transparent" flat>
		<v-card-text>
			<v-card flat :color="theme.color" dark
				height="100" class="d-flex justify-center align-center"
			>
				<v-card-title>
					<v-icon>mdi-palette</v-icon>
					<div class="pb-1 pl-2">
						Set your community theme
					</div>
				</v-card-title>
			</v-card>
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col cols="12">
					<select-field dense
						v-model="theme.color"
						icon="mdi-format-color-fill"
						:items="colorsForSelect"
						label="Color"
						name="color"
						item-text="name"
						item-value="value"
						:color="theme.color"
					/>
				</v-col>
				<v-col cols="12" class="py-0 pt-3" />
				<v-col cols="12">
					<text-field
						v-model="theme.to_call_subscriber"
						icon="mdi-format-color-fill"
						:items="colorsForSelect"
						label="Subscriber's Nickname"
						placeholder="What to call your subscribers? Provide an amazing nickname..."
						name="to_call_subscriber"
						counter="64" :color="theme.color"
					/>
				</v-col>
				<v-col cols="12">
					<text-field
						v-model="theme.state_after_subscription"
						icon="mdi-format-color-fill"
						:items="colorsForSelect"
						label="State After Subscription"
						placeholder="What is the state do you expect your subscribers to be after subscription? Ex. Comfortably Numb"
						name="state_after_subscription"
						counter="64" :color="theme.color"
					/>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-6"><v-divider /></div>
		<v-card-actions class="px-6">
			<v-spacer />
			<v-btn class="ma-1" color="grey lighten-1" depressed
				:to="{name: 'Community Rules'}" dark
			>Skip</v-btn>
			<v-btn class="ma-1" :color="theme.color"
				:to="{name: 'Community Rules'}" dark
			>Next</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import TextField from "@/components/form/TextField.vue";
import SelectField from "@/components/form/SelectField.vue";
export default {
	name: "Display",
	components: {SelectField, TextField},
	data: () => ({
		theme: {
			color: "primary"
		},
		colorsForSelect: [
			{value: "primary", name: "Primary"},
			{value: "red", name: "Red"},
			{value: "indigo", name: "Indigo"},
			{value: "teal", name: "Teal"},
			{value: "orange", name: "Orange"},
			{value: "green", name: "Green"}
		]
	})
}
</script>

<style scoped>

</style>

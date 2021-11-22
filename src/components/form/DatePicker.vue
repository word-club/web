<template>
	<v-menu
		ref="menu"
		v-model="menu"
		:close-on-content-click="false"
		transition="scale-transition"
		offset-y
		min-width="auto"
	>
		<template #activator="{ on, attrs }">
			<!--eslint-disable-next-line vue/no-mutating-props-->
			<v-text-field v-model="value"
				:label="label.toUpperCase()" :prepend-inner-icon="icon"
				readonly v-bind="attrs" :dense="dense"
				v-on="on" outlined :color="color"
				:error-messages="getErrorMessage"
				@change="$emit('input', $event)"
				hide-details="auto"
			/>
		</template>
		<v-date-picker
			:value="value"
			:active-picker.sync="activePicker"
			:max="maxDate"
			min="1950-01-01"
			@change="save"
			@input="$emit('input', $event)"
		/>
	</v-menu>
</template>

<script>

import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "DatePicker",
	mixins: [FormFieldError],
	props: {
		value: {
			required: true
		},
		label: {
			type: String,
			required: true
		},
		name:{
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		dense: {
			type: Boolean,
			default: true
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		color: {type: String, default: "primary"}
	},
	data: () => ({
		activePicker: null,
		menu: false,
	}),
	computed: {
		maxDate() {
			return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
		}
	},
	watch: {
		menu(val) {
			val && setTimeout(() => (this.activePicker = "YEAR"))
		},
	},
	methods: {
		save(date) {
			this.$refs.menu.save(date)
		},
	},
}
</script>

<style scoped>

</style>

<template>
	<v-text-field
		:value="value" dense
		outlined clearable
		:label="label.toUpperCase()"
		placeholder="Start typing"
		:type="type" :hint="hint"
		:counter="counter"
		hide-details="auto"
		color="grey darken-4"
		background-color="#00000"
		:error-messages="getErrorMessage"
		:prepend-inner-icon="icon"
		:autocomplete="autocomplete"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
	/>
</template>
<script>

import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "TextField",
	mixins: [FormFieldError],
	props: {
		value: {
			required: true
		},
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true
		},
		hint: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			required: false,
			default: "text"
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		icon: {
			type: String,
			required: true
		},
		counter: {
			default: false
		},
		autocomplete: {
			type: String,
			default: "off"
		}
	},
	emits: ["input", "change"],
}
</script>

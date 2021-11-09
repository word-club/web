<template>
	<v-text-field
		:value="value" :dense="dense"
		outlined clearable
		:label="label.toUpperCase()"
		:placeholder="placeholder"
		:type="type" :hint="hint"
		:counter="counter"
		hide-details="auto"
		:color="color"
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
		},
		dense: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: String,
			default: "Start typing"
		},
		color: {type: String, default: "primary"}
	},
	emits: ["input", "change"],
}
</script>

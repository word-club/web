<template>
	<v-text-field
		:value="value" :dense="dense"
		outlined clearable
		:label="label.toUpperCase()"
		:placeholder="placeholder"
		:type="type" :hint="hint"
		:counter="counter"
		hide-details="auto" :disabled="disabled"
		:color="color" :readonly="readonly"
		background-color="white"
		:error-messages="getErrorMessage"
		:prepend-inner-icon="icon"
		:autocomplete="autocomplete"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
		@keyup="$emit('keyup', $event)"
	/>
</template>
<script>

import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "TextField",
	mixins: [FormFieldError],
	props: {
		value: {required: true},
		name: {type: String, required: true},
		label: {type: String,required: true},
		hint: {type: String,default: null},
		type: {type: String, required: false, default: "text"},
		errors: {type: Object, required: false, default: () => {}},
		icon: {type: String, default: ""},
		counter: {default: false},
		autocomplete: {type: String, default: "off"},
		dense: {type: Boolean, default: true},
		placeholder: {type: String, default: "Start typing"},
		color: {type: String, default: "primary"},
		readonly: {type: Boolean, default: false},
		disabled: {type: Boolean, default: false}
	},
	emits: ["input", "change"],
}
</script>

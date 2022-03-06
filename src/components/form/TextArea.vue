<template>
	<v-textarea
		:id="id"
		:value="value" auto-grow
		background-color="white"
		outlined :clearable="clearable"
		hide-details="auto"
		:label="label.toUpperCase()"
		placeholder="Start typing"
		:error-messages="getErrorMessage"
		:prepend-inner-icon="icon"
		:counter="counter" :color="color"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
		@focus="$emit('focus', $event)"
		@blur="$emit('blur', $event)"
	/>
</template>
<script>
import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "TextArea",
	mixins: [FormFieldError],
	props: {
		value: {
			required: true
		},
		id: {type: String, default: null},
		name: {type: String, required: true},
		label: {type: String, required: true},
		counter: {type: [String, Boolean], required: true},
		errors: {type: Object, required: false, default: () => {}},
		icon: {type: String, default: "mdi-form-textbox"},
		color: {type: String, default: "primary"},
		clearable: {type: Boolean, default: true}
	},
	emits: ["input", "change"]
}
</script>

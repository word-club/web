<template>
	<v-textarea
		:value="value"
		auto-grow
		outlined clearable
		hide-details="auto"
		:label="label.toUpperCase()"
		placeholder="Start typing"
		:error-messages="getErrorMessage"
		:prepend-inner-icon="icon"
		:counter="counter" color="primary"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
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
		name: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		counter: {
			type: String,
			required: true
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		icon: {
			type: String,
			required: true
		}
	},
	emits: ["input", "change"]
}
</script>

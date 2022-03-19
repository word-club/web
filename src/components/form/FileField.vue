<template>
	<v-file-input
		:value="value" dense
		outlined small-chips show-size
		:accept="accept" :label="label.toUpperCase()"
		clearable color="primary" background-color="white"
		hide-details="auto" :placeholder="placeholder"
		prepend-icon="" :prepend-inner-icon="icon"
		:error-messages="getErrorMessage"
		:color="color"
		@change="$emit('input', $event)"
	/>
</template>
<script>

import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "FileField",
	mixins: [FormFieldError],
	props: {
		icon: {default: "mdi-paperclip", type: String},
		label: {required: true, type: String},
		name: {default: "image", type: String},
		value: {required: true},
		color: {required: false, default: "primary"},
		accept: {default: "image/*", type: String},
		placeholder: {type: String, default: "Select an image"},
		errors: {type: Object, default: () => {}}
	},
	emits: ["input"]
}
</script>

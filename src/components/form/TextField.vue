<template>
	<v-text-field
		outlined clearable
		:label="label.toUpperCase()"
		:placeholder="placeholder"
		:type="type"
		hide-details="auto"
		:color="color"
		background-color="white"
		:error-messages="getErrorMessage"
		:prepend-inner-icon="icon"
		v-bind="$attrs" v-on="$listeners"
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
		type: {type: String, required: false, default: "text"},
		errors: {type: Object, required: false, default: () => {}},
		icon: {type: String, default: ""},
		dense: {type: Boolean, default: true},
		placeholder: {type: String, default: "Start typing"},
		color: {type: String, default: "primary"},
	},
}
</script>

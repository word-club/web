<template>
	<v-autocomplete
		:value="value"
		class="ma-0" :dense="dense"
		outlined clearable
		:label="label.toUpperCase()"
		:items="items"
		:rules="rules" :type="type"
		:item-value="itemValue"
		:item-text="itemText"
		autocomplete="off"
		hide-details="auto"
		:color="color"
		:prepend-inner-icon="icon"
		:error-messages="getErrorMessage"
		@input="$emit('input', $event)"
		@change="$emit('input', $event)"
	/>
</template>
<script>
import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "SelectField",
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
		type:{
			type: String,
			default: "text"
		},
		items: {
			type: Array,
			required: true,
		},
		icon: {
			type: String,
			required: true
		},
		rules: {
			type: Array,
			required: false,
			default: () => []
		},
		dense: {
			type: Boolean,
			default: false
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		itemValue: {type: [String, null], default: null},
		itemText: {type: [String, null], default: null},
		color: {type: String, default: "primary"}
	},
	emits: ["input"],
	data() {
		return {
			selectField: null,
		}
	}
}
</script>

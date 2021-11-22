<template>
	<v-autocomplete :search-input.sync="search"
		:value="value" attach=""
		:items="users"
		:loading="isLoading"
		outlined dense
		chips small-chips
		clearable
		deletable-chips
		item-value="id"
		item-text="username"
		:color="color" hide-details="auto"
		:multiple="multiple"
		:background-color="bg"
		:prepend-inner-icon="icon"
		:error-messages="getErrorMessage"
		:label="label.toUpperCase()"
		:placeholder="placeholder"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
	/>
</template>
<script>
import FormFieldError from "@/mixin/FormFieldError.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "UserSelect",
	mixins: [FormFieldError, Snack],
	props: {
		bg: {type: String, default: "white"},
		url: {type: String, required: true},
		icon: {type: String, default: "mdi-account"},
		label: {type: String, default: "User"},
		value: {required: true},
		color: {type: String, default: "primary"},
		errors: {type: Object, default: () => {}},
		multiple: {type: Boolean, default: false},
		placeholder:  {type: String, default: "Start typing"}
	},
	emits: ["input", "change"],
	data: () => ({
		name: "user",
		isLoading: false,
		search: null,
		users: []
	}),
	watch: {
		search(val) {
			console.log(val)
			if (this.isLoading) return
			this.isLoading = true

			this.$axios.get(this.url, {search: val})
				.then(res => {
					console.log(res)
					this.users = res
				})
				.catch(() => {
					this.openSnack("Something went wrong.")
				})
				.finally(() => (this.isLoading = false))
		}
	}
}
</script>

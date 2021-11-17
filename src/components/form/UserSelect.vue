<template>
	<v-autocomplete :search-input.sync="search"
		:value="value" attach=""
		:items="users.results"
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
import {mapGetters} from "vuex";

export default {
	name: "UserSelect",
	mixins: [FormFieldError],
	props: {
		bg: {type: String, default: "white"},
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
		search: null
	}),
	computed: {
		...mapGetters({
			users: "user/list"
		})
	},
	watch: {
		search(val) {
			if (this.isLoading) return
			this.isLoading = true

			this.$store.dispatch("user/filter", {search: val})
				.catch(err => {
					console.log(err)
				})
				.finally(() => (this.isLoading = false))
		}
	}
}
</script>

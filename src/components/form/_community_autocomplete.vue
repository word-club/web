<template>
	<!-- eslint-disable-next-line -->
  <v-autocomplete :search-input.sync="search"
		:value="value" attach=""
		:items="communities.results"
		:loading="isLoading"
		outlined dense
		chips small-chips
		multiple clearable
		item-value="id"
		:item-text="itemText"
		prepend-inner-icon="mdi-account-group"
		:error-messages="getErrorMessage"
		label="COMMUNITY" placeholder="Start typing"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
	/>
</template>
<script>
import FormFieldError from "@/mixin/FormFieldError.js";
import {mapGetters} from "vuex";

export default {
	name: "CommunityAutocomplete",
	mixins: [FormFieldError],
	props: {
		value: {
			required: true
		},
		itemText: {
			required: true,
			type: String
		},
		items: {
			required: true,
			type: Array
		},
		label: {
			required: true,
			type: String,
		},
		icon: {
			required: true,
			type: String
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		fetchUrl: {
			type: String,
			required: false,
			default: null
		}
	},
	emits: ["input", "change"],
	data: () => ({
		name: "community",
		isLoading: false,
		search: null
	}),
	computed: {
		...mapGetters({
			communities: "community/list"
		})
	},
	watch: {
		search(val) {
			if (!this.fetchUrl) return
			if (this.isLoading) return
			this.isLoading = true

			// lazily load input items
			this.$store.dispatch("community/filter", {search: val})
				.catch(err => {
					console.log(err)
				})
				.finally(() => (this.isLoading = false))
		}
	}
}
</script>

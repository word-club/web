<template>
	<!-- eslint-disable-next-line -->
  <v-autocomplete :search-input.sync="search"
		:value="value" attach=""
		:items="communities.results"
		:loading="isLoading"
		outlined dense
		chips small-chips
		clearable
		item-value="id"
		item-text="name"
		color="primary"
		background-color="white"
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
		errors: {
			type: Object,
			required: false,
			default: () => {}
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

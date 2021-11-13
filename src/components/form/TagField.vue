<template>
	<v-autocomplete
		:value="value"
		outlined :label="label"
		prepend-inner-icon="mdi-pound" multiple
		:items="hashtags"
		item-value="id"
		item-text="tag" background-color="white"
		placeholder="Start typing"
		:loading="fetching" name="tags"
		:color="color" hide-details="auto"
		@change="$emit('change', $event)"
		@input="$emit('input', $event)"
		:error-messages="getErrorMessage"
	>
		<template v-slot:selection="data">
			<v-chip
				:key="JSON.stringify(data.item)"
				v-bind="data.attrs"
				:input-value="data.selected"
				:disabled="data.disabled"
				@click:close="data.parent.selectItem(data.item)"
				close
			>
				<v-avatar
					class="white--text"
					:color="`${color} lighten-2`"
					left size="10"
					v-text="data.item.tag.slice(0, 1).toUpperCase()"
				/>
				<span class="weight-500 grey--text text--darken-2">{{ data.item.tag }}</span>
			</v-chip>
		</template>
	</v-autocomplete>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "TagField",
	mixins: [FormFieldError],
	props: {
		value: {required: true},
		label: {type: String, default: "Add hashtags"},
		color: {type: String, default: "primary"},
		errors: {type: Object, default: () => {}}
	},
	data: () => ({
		fetching: true,
		tags: []
	}),
	created() {
		this.fetchTags()
	},
	computed: {
		...mapGetters({
			hashtags: "hashtag/list"
		})
	},
	methods: {
		...mapMutations("hashtag", ["SET_LIST"]),
		fetchTags() {
			this.$axios.get(this.$urls.hashtag.list)
				.then(res => {
					this.SET_LIST(res.results)
				})
				.finally(() => {
					this.fetching = false
				})
		}
	}
}
</script>

<style scoped lang="scss">

</style>

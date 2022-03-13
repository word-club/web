<template>
	<v-autocomplete
		:value="value"
		outlined :label="label"
		:prepend-inner-icon="icon"
		multiple :items="options"
		item-value="id" item-text="tag"
		background-color="white"
		:placeholder="placeholder"
		:loading="loading" name="tags"
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
import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "TagField",
	mixins: [FormFieldError],
	props: {
		value: {required: true},
		label: {type: String, default: "Add hashtags"},
		color: {type: String, default: "primary"},
		icon: {type:String, default: "mdi-pound"},
		options: {type: Array, default: () => []},
		placeholder: {type:String, default: "Start typing"},
		errors: {type: Object, default: () => {}},
		loading: {type: Boolean, default: false}
	}
}
</script>

<style scoped lang="scss">

</style>

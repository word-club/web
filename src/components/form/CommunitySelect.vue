<template>
	<v-autocomplete
		:value="value" attach=""
		:items="items"
		:loading="loading"
		outlined clearable
		return-object
		item-text="community.name"
		:color="color"
		background-color="white"
		prepend-inner-icon="mdi-account-group"
		:error-messages="getErrorMessage"
		label="COMMUNITY" placeholder="Start typing"
		@input="$emit('input', $event)"
		@change="$emit('change', $event)"
	>
		<template v-slot:selection="data">
			<v-chip
				v-bind="data.attrs"
				:input-value="data.selected"
				dark :color="data.item.theme.color"
				@click="data.select"
			>
				<v-avatar left color="white">
					<v-img
						v-if="data.item.avatar"
						:src="$link(data.item.avatar.image)"
					/>
					<span v-else
						:class="`${data.item.theme.color}--text`"
					>
						{{ data.item.name[0].toUpperCase() }}
					</span>
				</v-avatar>
				{{ data.item.name }}
			</v-chip>
		</template>
		<template v-slot:item="data">
			<v-list-item-avatar :color="data.item.theme.color">
				<v-img
					v-if="data.item.avatar"
					:src="$link(data.item.avatar.image)"
				/>
				<div class="white--text headline text-center full-width" v-else>{{data.item.name[0].toUpperCase()}}</div>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title v-html="data.item.name" />
			</v-list-item-content>
		</template>
	</v-autocomplete>
</template>
<script>
import FormFieldError from "@/mixin/FormFieldError.js";

export default {
	name: "CommunitySelect",
	mixins: [FormFieldError],
	props: {
		loading: {type: Boolean, default: true},
		value: {
			required: true
		},
		items: {
			type: Array, default: () => []
		},
		errors: {
			type: Object,
			required: false,
			default: () => {}
		},
		color: {type: String, default: "primary"}
	},
	emits: ["input", "change"],
	data: () => ({
		name: "community"
	}),
}
</script>

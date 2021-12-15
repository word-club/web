<template>
	<v-list-item dense two-line @click="1" style="cursor: default;">
		<v-list-item-icon v-if="icon"><v-icon>{{ icon }}</v-icon></v-list-item-icon>
		<v-list-item-content>
			<v-list-item-title class="px16">{{title}}</v-list-item-title>
			<v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
		</v-list-item-content>
		<v-list-item-action>
			<slot />
		</v-list-item-action>
	</v-list-item>

</template>

<script>
export default {
	name: "ListItem",
	props: {
		icon: {type: [String, null], default: null},
		title: {type: String, required: true},
		subtitle: {type: String, required: true}
	},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

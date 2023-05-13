<template>
	<v-toolbar dense>
		<v-app-bar-nav-icon>
			<v-icon>{{icon}}</v-icon>
		</v-app-bar-nav-icon>
		<v-toolbar-title>{{title}}</v-toolbar-title>
		<v-spacer />
		<v-text-field v-bind="$attrs" v-on="$listeners"
			label="Search" prepend-inner-icon="mdi-magnify"
			outlined dense color="primary" hide-details
		/>
	</v-toolbar>
</template>
<script>
export default {
	name: "TableToolbar",
	props: {
		title: {
			type: String,
			default: "Table"
		},
		icon: {
			type: String,
			default: "mdi-table"
		}
	}
}
</script>

<template>
	<v-card flat>
		<v-card-actions class="grey lighten-5">
			<v-spacer />
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn icon
						v-bind="attrs" v-on="on"
					>
						<v-icon>mdi-dots-horizontal</v-icon>
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item>View Wiki History</v-list-item>
					<v-divider />
					<v-list-item>View Page Source</v-list-item>
					<v-divider />
					<v-list-item>Copy URL</v-list-item>
				</v-list>
			</v-menu>
		</v-card-actions>
		<v-card-text>
			<v-card flat color="grey lighten-4">
				<v-card-title class="table-of-content">Table of content</v-card-title>
				<v-card-text>
					<v-list class="content-item-list" dense>
						<v-list-item class="content-item">
							Welcome to {{community.name}}!
						</v-list-item>
						<v-list-item class="content-item">
							Rules
						</v-list-item>
						<v-list-item class="content-item align-center">
							<v-list-item-icon class="mr-2 my-0"><v-icon>mdi-circle-small</v-icon></v-list-item-icon>
							<v-list-item-content><v-list-item-title>One</v-list-item-title></v-list-item-content>
						</v-list-item>
						<v-list-item class="content-item align-center">
							<v-list-item-icon class="mr-2 my-0"><v-icon>mdi-circle-small</v-icon></v-list-item-icon>
							<v-list-item-content><v-list-item-title>One</v-list-item-title></v-list-item-content>
						</v-list-item>
						<v-list-item class="content-item align-center">
							<v-list-item-icon class="mr-2 my-0"><v-icon>mdi-circle-small</v-icon></v-list-item-icon>
							<v-list-item-content><v-list-item-title>One</v-list-item-title></v-list-item-content>
						</v-list-item>
						<v-list-item class="content-item align-center">
							<v-list-item-icon class="mr-2 my-0"><v-icon>mdi-circle-small</v-icon></v-list-item-icon>
							<v-list-item-content><v-list-item-title>One</v-list-item-title></v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card-text>
				<v-card-text>
					//
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
export default {
	name: "WikiPage",
	data: () => ({
		value: "## Welcome to",
		options: {
			lineNumbers: false
		}
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	methods: {}
}
</script>

<style scoped lang="scss">
.table-of-content {
	font-size: 18px!important;
}
::v-deep.v-list-item {
	min-height: 30px !important;
}
</style>

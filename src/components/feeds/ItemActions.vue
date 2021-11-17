<template>
	<v-card class="rounded-t-0" color="grey lighten-4">
		<v-card-actions class="flex-wrap"
			:class="{
				'justify-space-evenly': smAndDown
			}"
		>
			<v-btn :small="smAndDown" outlined class="item-action-btn">
				<v-icon left>mdi-comment-outline</v-icon>Comments
			</v-btn>
			<v-btn :small="smAndDown" outlined class="item-action-btn">
				<v-icon left>mdi-share-outline</v-icon>Share
			</v-btn>
			<v-menu offset-y>
				<template #activator="{on, attrs}">
					<v-btn icon v-bind="attrs" v-on="on" class="mx-2">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list dense>
					<v-list-item>
						<v-list-item-icon class="mr-2"><v-icon>mdi-bookmark-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Bookmark</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item>
						<v-list-item-icon class="mr-2"><v-icon>mdi-bookmark-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Bookmark</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item>
						<v-list-item-icon class="mr-2"><v-icon>mdi-eye-off-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Hide</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item>
						<v-list-item-icon class="mr-2"><v-icon>mdi-flag-outline</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Report</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-spacer v-if="!smAndDown" />
			<v-btn icon>
				<v-icon>
					mdi-arrow-up-bold-outline
				</v-icon>
			</v-btn>
			<div class="grey--text text--darken-3 weight-500 mx-1">33.4K</div>
			<v-btn icon>
				<v-icon>
					mdi-arrow-down-bold-outline
				</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "ItemActions",
	props: {item: {type: Object, default: () => {}}},
	computed: {
		smAndDown() {
			return this.$vuetify.breakpoint.width < 600
		}
	}
}
</script>

<style scoped lang="scss">
.item-action-btn {
	margin-top: 2px;
	margin-bottom: 2px;
	color: #525252 !important;
	font-size: 15px;
}
</style>

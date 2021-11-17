<template>
	<v-card outlined
		class="publication-instance"
	>

		<v-card-subtitle class="px16">
			{{ publication.content }}
		</v-card-subtitle>

		<v-card-actions class="flex-wrap justify-space-between">
			<v-btn depressed>
				<v-icon left>
					mdi-comment-outline
				</v-icon>
				300 Comments
			</v-btn>
			<v-btn depressed>
				<v-icon left>
					mdi-share-variant-outline
				</v-icon>
				Share
			</v-btn>
			<v-menu absolute
				transition="scale-transition"
			>
				<template #activator="{on, attrs}">
					<v-btn icon
						v-bind="attrs"
						class="mx-1"
						v-on="on"
					>
						<v-icon>mdi-dots-horizontal</v-icon>
					</v-btn>
				</template>
				<v-list dense
					class="py-0"
				>
					<v-list-item-group v-for="(item, index) in publicationActions"
						:key="index"
						v-model="selected"
					>
						<v-list-item>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-divider v-if="publicationActions.length !== index + 1" />
					</v-list-item-group>
				</v-list>
			</v-menu>

			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-chevron-up</v-icon>
			</v-btn>
			<div class="px-1 green--text font-weight-bold">
				99
			</div>
			<v-btn icon>
				<v-icon>mdi-chevron-down</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import CommunityHoverBox from "@/components/utils/CommunityHoverBox.vue";
import UserHoverBox from "@/components/utils/UserHoverBox.vue";

export default {
	name: "PublicationInstance",
	prop: {
		publication: {
			type: Object,
			default: () => ({
				title: null,
				content: null,
				tags: null,
				image: null,
				community: null
			})
		}
	},
	components: {UserHoverBox, CommunityHoverBox},
	data: () => ({
		selected: null,
		communityHover: false
	}),
	computed: {
		publicationActions() {
			return [
				{icon: "mdi-bookmark-outline", title: "Save"},
				{icon: "mdi-eye-off-outline", title: "Hide"},
				{icon: "mdi-flag-outline", title: "Report"}
			]
		}
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

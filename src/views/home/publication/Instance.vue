<template>
	<v-card outlined
		class="publication-instance"
	>
		<v-card-text class="d-flex align-center pa-2 flex-wrap justify-space-between">
			<community-hover-box
				v-if="$route.name !== 'Community'"
				:community="publication.community"
			/>
			<v-icon
				v-if="$route.name !== 'Community'"
			>
				mdi-circle-small
			</v-icon>
			<div v-else
				class="px-1"
			/>
			<user-hover-box :user="publication.created_by" />
			<v-icon>mdi-circle-small</v-icon>
			<div class="publication-timestamp">
				{{ $moment(publication.timestamp).fromNow() }}
			</div>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
		</v-card-text>
		<v-card-title class="pt-1 cursor publication-title"
			@click="toPublicationDetail(publication.id)"
		>
			{{ publication.title }}
		</v-card-title>
		<v-card-subtitle class="px16">
			{{ publication.content }}
		</v-card-subtitle>
		<v-card-text class="pa-0">
			<v-card
				dark tile
				flat
				height="350"
			>
				<v-img :src="publication.image"
					height="350"
					contain
				/>
			</v-card>
		</v-card-text>
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
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
import CommunityHoverBox from "@/components/utils/CommunityHoverBox.vue";
import UserHoverBox from "@/components/utils/UserHoverBox.vue";

export default {
	name: "PublicationInstance",
	components: {UserHoverBox, CommunityHoverBox},
	mixins: [RouteMixin],
	data: () => ({
		selected: null,
		communityHover: false
	}),
	computed: {
		...mapGetters({
			publication: "publication/inView"
		}),
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
.publication-instance:hover {
	border: 1px solid black !important;
}
.v-btn {
	font-size: 12px !important;
	font-weight: 600 !important;
	color: #585858;
}
.publication-title {
	font-size: 22px;
}
</style>

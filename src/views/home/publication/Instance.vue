<template>
	<v-card outlined
		class="publication-instance"
	>
		<v-card-text class="d-flex align-center pa-2 flex-wrap justify-space-between">
			<v-avatar
				v-if="$route.name !== 'Community'"
				size="30"
				:color="publication.community.theme.color" tile
				class="rounded cursor"
				@click="toCommunityDetail(publication.community.unique_id)"
			>
				<v-img v-if="publication.community.avatar"
					:src="publication.community.avatar.image"
				/>
			</v-avatar>
			<div
				v-if="$route.name !== 'Community'"
				class="px-1"
			/>
			<div
				v-if="$route.name !== 'Community'"
				class="px14 weight-600 cursor hover-underline"
				:class="`${publication.community.theme.color}--text`"
				@click="toCommunityDetail(publication.community.unique_id)"
			>
				{{ publication.community.name }}
			</div>
			<v-icon
				v-if="$route.name !== 'Community'"
			>
				mdi-circle-small
			</v-icon>
			<div v-else
				class="px-1"
			/>
			<div class="px14 cursor hover-underline weight-500"
				@click="toUserOverview(publication.created_by.username)"
			>
				{{ publication.created_by.username }}
			</div>
			<v-icon>mdi-circle-small</v-icon>
			<div class="publication-timestamp">
				{{ $moment(publication.timestamp).fromNow() }}
			</div>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-dots-horizontal</v-icon>
			</v-btn>
		</v-card-text>
		<v-card-title class="pt-1 cursor"
			@click="toPublicationDetail(publication.id)"
		>
			{{ publication.title }}
		</v-card-title>
		<v-card-subtitle>{{ publication.content }}</v-card-subtitle>
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

export default {
	name: "PublicationInstance",
	mixins: [RouteMixin],
	data: () => ({
		selected: null,
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
</style>

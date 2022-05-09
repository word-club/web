<template>
	<v-card-text class="d-flex align-center pa-1 px-2 flex-wrap justify-space-between grey lighten-4 rounded-t">
		<community-hover-box
			v-if="item.community && $route.name !== 'Community'"
			:community="item.community"
		/>
		<v-icon
			v-if="item.community && $route.name !== 'Community'"
			style="width: 20px;"
		>
			mdi-circle-small
		</v-icon>
		<div
			v-if="!isProfileRoute"
			class="pl-1 pr-2 info-text"
		>
			Posted by
		</div>
		<user-hover-box v-if="item.created_by && !isProfileRoute" :user="item.created_by" />
		<div class="info-text pl-2 pr-1">
			{{ $moment(item.published_at || item.created_at).fromNow() }}
			<span class="draft-info" v-if="!item.is_published">
				<v-chip small>DRAFT</v-chip>
			</span>
		</div>
		<v-icon class="px-1" v-if="item.type === 'link'">mdi-link</v-icon>
		<v-chip class="text-lowercase px12 mx-1"
			v-for="hashtag in item.tags"
			:key="hashtag.id" outlined
			x-small :color="theme"
			@click="tagFilter(hashtag.id)"
		>
			<v-icon size="12" left>mdi-pound</v-icon>
			<span style="padding-bottom: 2px;">{{hashtag.tag}}</span>
		</v-chip>
		<v-spacer />
		<v-menu offset-y nudge-top="-5" nudge-right="-110"
			transition="slide-y-transition"
		>
			<template #activator="{on, attrs}">
				<v-btn
					v-if="!share"
					icon v-bind="attrs" v-on="on"
				>
					<v-icon>mdi-dots-horizontal</v-icon>
				</v-btn>
			</template>
			<v-list dense>
				<v-list-item v-if="ifActorIsWriter"
					:to="{ name: 'Submit', params: { toEdit: item.id, type: item.type } }"
				>
					<v-list-item-icon class="mr-2"><v-icon color="primary lighten-1">mdi-pencil</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Edit Publication</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-divider v-if="ifActorIsWriter" />
				<v-list-item v-if="ifActorIsWriter"
					@click="deletePublicationTrigger()"
				>
					<v-list-item-icon class="mr-2"><v-icon color="red lighten-1">mdi-delete</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Delete Publication</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-divider v-if="ifActorIsWriter" />
				<v-list-item v-else
					@click="ignoreAuthor()"
				>
					<v-list-item-icon class="mr-2"><v-icon>mdi-eye-off</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Ignore this author</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-list-item @click="copyPublicationLink()">
					<v-list-item-icon class="mr-2"><v-icon>mdi-content-copy</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Copy URL</v-list-item-title></v-list-item-content>
				</v-list-item>
			</v-list>
		</v-menu>
		<confirm-dialog @refresh="$emit('refresh')" />
	</v-card-text>
</template>

<script>
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "ItemHeader",
	props: {
		item: {type: Object, default: () => {}},
		share: {type: Boolean, default: false},
	},
	mixins: [ConfirmDialogMixin],
	components: {
		UserHoverBox: () => import("@/components/utils/UserHoverBox"),
		CommunityHoverBox: () => import("@/components/utils/CommunityHoverBox"),
	},
	computed: {
		theme() {
			if (!this.item.community) return false
			return this.item.community.theme.color
		},
		ifActorIsWriter() {
			if (!this.item) return false
			if (!this.$helper.getCurrentUser()) return false
			if (!this.item.created_by) return true
			return this.item.created_by.id === this.$helper.getCurrentUser().id
		},
		isProfileRoute() {
			const r = ["Profile Overview", "Profile Recent", "Profile Posts", "Profile Comments", "User Overview", "User Posts", "User Comments"]
			return r.includes(this.$route.name)
		}
	},
	methods: {
		async deletePublicationTrigger() {
			const url = this.$urls.publication.detail
			const title = `Are you sure you want to delete publication <i>"${this.item.title}"</i> ?`
			await this.openConfirmDialog(
				title,
				"delete",
				this.$util.format(url, this.item.id),
				["refresh"],
				"Publication deleted."
			)
		},
		ignoreAuthor() {
			//TODO
		},
		copyPublicationLink() {
			//TODO
		},
		tagFilter() {
			//TODO
		}
	}
}
</script>

<style scoped lang="scss">
.info-text {
	font-size: 13px;
}
</style>

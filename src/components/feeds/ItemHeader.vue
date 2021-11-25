<template>
	<v-card-text class="d-flex align-center pa-1 px-2 flex-wrap justify-space-between grey lighten-4">
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
			class="pl-1 pr-2 info-text"
		>
			Posted by
		</div>
		<user-hover-box :user="item.created_by" />
		<div class="info-text pl-2">
			{{ $moment(item.timestamp).fromNow() }}
		</div>
		<v-spacer />
		<v-menu offset-y nudge-top="-5" nudge-right="-110"
			transition="slide-y-transition"
		>
			<template #activator="{on, attrs}">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-dots-horizontal</v-icon>
				</v-btn>
			</template>
			<v-list dense>
				<v-list-item v-if="$helper.ifCurrentUserIs(item.created_by)"
					:to="{name: 'Submit', params: {toEdit: item.id}}"
				>
					<v-list-item-icon class="mr-2"><v-icon color="primary lighten-1">mdi-pencil</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Edit Publication</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-list-item v-if="$helper.ifCurrentUserIs(item.created_by)"
					@click="deletePublication()"
				>
					<v-list-item-icon class="mr-2"><v-icon color="red lighten-1">mdi-delete</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Delete Publication</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-list-item v-if="!$helper.ifCurrentUserIs(item.created_by)"
					@click="ignoreAuthor()"
				>
					<v-list-item-icon class="mr-2"><v-icon>mdi-eye-off</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Ignore this author</v-list-item-title></v-list-item-content>
				</v-list-item>
				<v-list-item @click="copyPublicationLink()">
					<v-list-item-icon class="mr-2"><v-icon>mdi-copy</v-icon></v-list-item-icon>
					<v-list-item-content><v-list-item-title>Copy URL</v-list-item-title></v-list-item-content>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-card-text>
</template>

<script>
import UserHoverBox from "@/components/utils/UserHoverBox.vue";
import CommunityHoverBox from "@/components/utils/CommunityHoverBox.vue";

export default {
	name: "ItemHeader",
	props: {item: {type: Object, default: () => {}}},
	components: {
		UserHoverBox,
		CommunityHoverBox,
	},
	methods: {
		deletePublication() {
			const url = this.$util.format(this.$urls.publication.detail, this.item.id)
			this.$axios.delete(url)
		},
		ignoreAuthor() {},
		copyPublicationLink() {},
	}
}
</script>

<style scoped lang="scss">
.info-text {
	font-size: 13px;
}
</style>

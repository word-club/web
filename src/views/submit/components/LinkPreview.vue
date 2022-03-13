<template>
	<v-card v-if="inProgress && inProgress.links"
		class="mb-6"
	>
		<v-card-text>
			<v-list-item>
				<v-list-item-avatar :color="theme.color">
					<v-img v-if="inProgress.links.image" :src="inProgress.links.image" />
					<div v-else class="white--text px22 mb-1 full-width text-center">{{inProgress.links.title[0].toUpperCase()}}</div>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>
						<a :href="inProgress.links.link" target="_blank">{{inProgress.links.title}}</a>
					</v-list-item-title>
					<v-list-item-subtitle>{{inProgress.links.description}}</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action>
					<v-btn icon color="error" @click="removeLink()"><v-icon>mdi-delete</v-icon></v-btn>
				</v-list-item-action>
			</v-list-item>
		</v-card-text>
		<confirm-dialog @refresh="$emit('refresh')" />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "LinkPreview",
	props: {
		theme: {type: Object, required: true}
	},
	mixins: [ConfirmDialogMixin],
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		})
	},
	methods: {
		removeLink() {
			const url = this.$util.format(this.$urls.link.detail, this.inProgress.links.id);
			this.openConfirmDialog(
				"Are you sure you want to remove this link?",
				"DELETE",
				url,
				["refresh"],
				"Link removed successfully.",
				"Link removal failed."
			)
		}
	}
}
</script>

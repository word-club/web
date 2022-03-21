<template>
	<v-card v-if="inProgress && inProgress.links"
		class="mb-6"
	>
		<v-card-text>
			<v-list-item>
				<v-list-item-avatar>
					<wc-avatar
						:color="theme.color"
						:src="inProgress.links.image"
						:text="inProgress.links.title"
						span-class="white--text px22 mb-1 full-width text-center"
					/>
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

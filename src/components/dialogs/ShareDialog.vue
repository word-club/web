<template>
	<v-dialog :value="dialog" max-width="600" scrollable>
		<v-card
			v-if="dialog && target && model"
			outlined
		>
			<v-card-title>
				Share {{model}}
				<v-spacer />
				<v-icon>mdi-share</v-icon>
			</v-card-title>
			<v-divider />
			<div class="py-2"></div>
			<v-card-text>
				<text-field
					v-model="title"
					name="title"
					icon="mdi-format-title"
					label="share title"
					:errors="formErrors"
				/>
			</v-card-text>
			<v-card-text style="max-height: 400px;"
				class="share-scrollbar"
			>
				<v-card outlined light>
					<item-header :item="target" :share="true" />
					<v-divider />
					<div v-if="isPublication">
						<v-card-title>
							{{ target.title }}
							<v-spacer />
							<v-chip v-if="getTypeString(target.type)" outlined>{{ getTypeString(publication.type) }}</v-chip>
						</v-card-title>
						<item-images v-if="target.type === 'media'" :item="publication" />
						<item-link v-if="target.type === 'link'" :link="publication.link"/>
						<item-content v-if="target.type ==='editor'" :content="editorContent" />
					</div>
					<div v-else>
						<v-card-text>
							{{target.comment}}
						</v-card-text>
					</div>
					<v-card-text class="grey lighten-4 d-flex flex-wrap align-center pa-2">
						<div class="pa-1">{{ target.views }} Views</div>
						<v-icon>mdi-circle-small</v-icon>
						<div class="pa-1">{{ target.discussions }} {{ isPublication ? 'Discussions' : 'Replies' }}</div>
					</v-card-text>
				</v-card>
			</v-card-text>
			<v-divider />
			<v-card-actions>
				<v-btn block color="primary" @click="createShare()">Share</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import PublicationType from "@/mixin/PublicationType.js";
import EditorContentMixin from "@/mixin/EditorContentMixin.js";
import RefreshMeMixin from "@/mixin/RefreshMeMixin.js";

export default {
	name: "ShareDialog",
	components: {
		ItemContent: () => import("@/components/feeds/ItemContent"),
		ItemLink: () => import("@/components/feeds/ItemLink"),
		ItemImages: () => import("@/components/feeds/ItemImages"),
		ItemHeader: () => import("@/components/feeds/ItemHeader"),
	},
	mixins: [PostMixin, Snack, PublicationType, EditorContentMixin, RefreshMeMixin],
	data: () => ({
		title: null
	}),
	computed: {
		dialog: {
			get() {
				return this.$store.getters["dialog/share"]
			},
			set(v) {
				this.SET_SHARE(!!v)
			}
		},
		...mapGetters({
			target: "dialog/object",
			model: "dialog/model"
		}),
		isPublication() {
			return this.model === "publication"
		},
	},
	methods: {
		...mapMutations("dialog", ["SET_SHARE"]),
		createShare() {
			const url = `${this.model}/${this.target.id}/share/`;
			this.post(url, {title: this.title}).then(() => {
				if (this.success) {
					this.$store.dispatch("dialog/clearDialog")
					this.openSuccessSnack("Publication shared successfully")
					this.refreshMe()
				} else {
					this.openSnack("Publication could not be shared")
				}
			})
		}
	}
}
</script>

<style scoped>

</style>

<template>
	<v-card>
		<v-card-title>Covers</v-card-title>
		<v-card-text>
			<v-scale-transition>
				<v-col cols="12" v-if="coverUrl">
					<card-img :src="coverUrl" height="200" />
				</v-col>
			</v-scale-transition>
			<v-col cols="12" class="d-flex align-center pa-0">
				<file-field dense
					v-model="cover"
					icon="mdi-image-area-close"
					label="Community Cover"
					:errors="formErrors"
					:color="community.theme.color"
				/>
				<v-fab-transition>
					<v-btn
						:loading="posting"
						:color="community.theme.color"
						v-if="cover" icon
						class="ml-2" @click="addCover()"
					>
						<v-icon>mdi-upload</v-icon>
					</v-btn>
				</v-fab-transition>
			</v-col>
		</v-card-text>
		<v-card-text
			v-if="community.covers.length > 0"
			class="pa-2"
		>
			<div
				class="pa-1"
				v-for="item in community.covers"
				:key="item.id"
			>
				<card-img
					:src="item.image"
					height="200"
				>
					<v-chip v-if="item.is_active" x-small :color="theme.color">Active</v-chip>
					<v-btn v-else rounded small @click="setActive(item)">set as active</v-btn>
					<v-btn icon small @click="removeCover(item)" color="error"><v-icon small>mdi-delete</v-icon></v-btn>
					<template #info>
						Added {{$moment(item.created_at).fromNow()}} by {{item.created_by.name}}
					</template>
				</card-img>
			</div>
		</v-card-text>
		<v-card-text v-else>
			<v-alert
				:value="true"
				type="info"
				class="ma-0"
				dark
				:color="community.theme.color"
			>
				No covers uploaded yet.
			</v-alert>
		</v-card-text>
		<confirm-dialog @refresh="$emit('refresh')" />
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "CoversMod",
	mixins: [Snack, PostMixin, ConfirmDialogMixin],
	data: () => ({
		cover: null,
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		theme() {
			return this.community.theme;
		},
		coverUrl() {
			if (!this.cover) return null
			return URL.createObjectURL(this.cover)
		},
		activeCover() {
			return this.community.covers.find(cover => cover.is_active)
		},
	},
	watch: {
		community(v) {
			console.log(v)
		}
	},
	methods: {
		addCover() {
			const fd = new FormData()
			fd.append("image", this.cover)
			this.post(
				this.$util.format(
					this.$urls.cover.community,
					this.community.id
				),
				fd
			).then(() => {
				if (this.success) {
					this.$emit("refresh")
					this.openSuccessSnack("Cover uploaded successfully.")
					this.cover = null
				} else {
					this.openSnack("Cover upload failed. Try again.")
				}
			})
		},
		setActive(cover) {
			this.post(
				this.$util.format(
					this.$urls.cover.active,
					cover.id
				)
			).then(() => {
				if (this.success) {
					this.$emit("refresh")
				} else {
					this.openSnack("Failed to set active status.")
				}
			})
		},
		removeCover(item) {
			const url = this.$util.format(this.$urls.cover.detail, item.id)
			this.openConfirmDialog(
				"Are you sure you want to delete this cover image?",
				"Delete",
				url,
				["refresh"],
				"Cover removed successfully.",
				"Failed to remove the requested cover image."
			)
		}
	}
}
</script>

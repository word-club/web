<template>
	<v-card>
		<v-card-title>Covers</v-card-title>
		<v-card-text>
			<v-col cols="12" class="d-flex align-center pa-0">
				<file-field dense
					v-model="cover"
					icon="mdi-image-area-close"
					label="Community Cover"
					:errors="formErrors"
					:color="theme.color"
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
		<v-card-text class="d-flex flex-wrap align-center">
			<card-img
				v-for="item in covers"
				:key="item.id"
				:src="item.image"
				max-width="300"
			>
				<v-chip v-if="item.is_active" x-small :color="theme.color">Active</v-chip>
				<v-btn v-else rounded small @click="setActive(item)">set as active</v-btn>
			</card-img>
		</v-card-text>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "CommunityCovers",
	mixins: [Snack, PostMixin],
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
		covers() {
			return this.community.covers
		},
		activeCover() {
			return this.covers.find(cover => cover.is_active)
		},
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
		}
	}
}
</script>

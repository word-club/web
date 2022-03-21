<template>
	<v-card>
		<v-card-title>
			Avatars
		</v-card-title>
		<v-card-text>
			<v-scale-transition>
				<v-col cols="12" v-if="avatarUrl" class="d-flex justify-center align-center">
					<v-avatar size="200">
						<v-img :src="avatarUrl" />
					</v-avatar>
				</v-col>
			</v-scale-transition>
			<v-col cols="12" class="d-flex align-center pa-0">
				<file-field dense
					v-model="avatar"
					icon="mdi-image-filter-frames"
					label="Community Avatar"
					:errors="formErrors"
					:color="community.theme.color"
				/>
				<v-fab-transition>
					<v-btn
						:loading="posting"
						v-if="avatar" icon
						class="ml-2" :color="community.theme.color"
						@click="addAvatar()"
					>
						<v-icon>mdi-upload</v-icon>
					</v-btn>
				</v-fab-transition>
			</v-col>
		</v-card-text>
		<v-card-text
			v-if="avatars.length > 0"
			class="pa-2 d-flex flex-wrap align-center"
		>
			<card-img
				class="ma-1"
				v-for="item in avatars"
				:key="item.id"
				:src="item.image"
				max-width="200"
				height="200"
			>
				<v-chip v-if="item.is_active" :color="theme.color" x-small>Active</v-chip>
				<v-btn v-else rounded x-small @click="setActive(item)">set as active</v-btn>
				<v-btn icon small @click="removeAvatar(item)" color="error"><v-icon small>mdi-delete</v-icon></v-btn>
				<template #info>
					Added {{$moment(item.created_at).fromNow()}} by {{item.created_by.name}}
				</template>
			</card-img>
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
import Snack from "@/mixin/Snack.js";
import PostMixin from "@/mixin/PostMixin.js";
import ConfirmDialogMixin from "@/mixin/ConfirmDialogMixin.js";

export default {
	name: "AvatarsMod",
	mixins: [Snack, PostMixin, ConfirmDialogMixin],
	data: () => ({
		avatar: null
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		avatarUrl() {
			if (!this.avatar) return null
			return URL.createObjectURL(this.avatar)
		},
		avatars() {
			return this.community.avatars
		},
		theme() {
			return this.community.theme
		},
		activeAvatar() {
			return this.community.avatar
		},
	},
	methods: {
		addAvatar() {
			const fd = new FormData()
			fd.append("image", this.avatar)
			this.post(
				this.$util.format(
					this.$urls.avatar.community,
					this.community.id
				),
				fd
			).then(() => {
				if (this.success) {
					this.$emit("refresh")
					this.openSuccessSnack("Avatar uploaded successfully.")
					this.avatar = null
				} else {
					this.openSnack("Avatar upload failed. Try again.")
				}
			})
		},
		setActive(avatar) {
			this.post(
				this.$util.format(this.$urls.avatar.active, avatar.id)
			).then(() => {
				if (this.success) {
					this.$emit("refresh")
				} else {
					this.openSnack("Failed to set active status.")
				}
			})
		},
		removeAvatar(avatar) {
			const url = this.$util.format(this.$urls.avatar.detail, avatar.id)
			this.openConfirmDialog(
				"Are you sure you want to delete this avatar image?",
				"Delete",
				url,
				["refresh"],
				"Avatar removed successfully.",
				"Failed to remove avatar the requested avatar image."
			)
		}
	}
}
</script>

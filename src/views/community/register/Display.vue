<template>
	<v-card color="transparent" flat v-if="community">
		<v-card-text>
			<v-card flat :color="theme.color || 'primary'" dark class="pb-6">
				<v-card height="200"
					:color="theme.color || 'primary'" light flat
					class="d-flex justify-center align-center rounded pa-2"
				>
					<v-img v-if="cover || community.cover" :src="coverUrl || $link(community.cover.image)" height="100%" width="100%" />
					<v-card-actions v-else>
						<v-avatar class="ma-0">
							<v-icon dark>mdi-image-area</v-icon>
						</v-avatar>
						<v-card-title class="grey--text text--lighten-2">Set community cover image</v-card-title>
					</v-card-actions>
				</v-card>
				<v-card-text class="d-flex justify-center align-center">
					<v-avatar size="200" color="grey lighten-2">
						<v-img v-if="avatar || community.avatar" :src="avatarUrl || $link(community.avatar.image)" />
						<div v-else class="grey--text display-4">C</div>
					</v-avatar>
				</v-card-text>
				<v-card-title class="d-flex justify-center align-center">
					<v-icon>mdi-palette</v-icon>
					<div class="pb-1 pl-2">
						Set your community theme
					</div>
				</v-card-title>
			</v-card>
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<v-row class="ma-0 pa-0">
				<v-col cols="12" class="py-0 px-0">
					<v-subheader>Display Images</v-subheader>
					<v-divider class="mx-3"/>
				</v-col>
				<v-col cols="12" class="d-flex align-center">
					<file-field dense
						v-model="avatar"
						icon="mdi-image-filter-frames"
						label="Community Avatar"
						:errors="avatarFormErrors"
						:color="theme.color"
					/>
					<v-fab-transition>
						<v-btn
							:loading="adding"
							v-if="avatar" icon
							class="ml-2" :color="community.theme.color"
							@click="addAvatar"><v-icon>mdi-upload</v-icon></v-btn>
					</v-fab-transition>
				</v-col>
				<v-col cols="12" class="d-flex align-center">
					<file-field dense
						v-model="cover"
						icon="mdi-image-area-close"
						label="Community Cover"
						:errors="coverFormErrors"
						:color="theme.color"
					/>
					<v-fab-transition>
						<v-btn
							:loading="adding"
							:color="community.theme.color"
							v-if="cover" icon
							class="ml-2" @click="addCover"
						>
							<v-icon>mdi-upload</v-icon>
						</v-btn>
					</v-fab-transition>
				</v-col>
				<v-col cols="12" class="py-0 px-0">
					<v-subheader>Display Theme</v-subheader>
					<v-divider class="mx-3"/>
				</v-col>
				<v-col cols="12">
					<select-field dense
						v-model="theme.color"
						icon="mdi-format-color-fill"
						:items="$helper.colorsForSelect"
						label="Color"
						name="color"
						item-text="name"
						item-value="value"
						:color="theme.color"
						:errors="themeFormErrors"
					/>
				</v-col>
				<v-col cols="12" class="py-0 pt-3" />
				<v-col cols="12">
					<text-field
						v-model="theme.to_call_subscriber"
						icon="mdi-format-color-fill"
						label="Subscriber's Nickname"
						placeholder="What to call your subscribers? Provide an amazing nickname..."
						name="to_call_subscriber"
						counter="64" :color="theme.color"
						:errors="themeFormErrors"
					/>
				</v-col>
				<v-col cols="12">
					<text-field
						v-model="theme.state_after_subscription"
						icon="mdi-format-color-fill"
						label="State After Subscription"
						placeholder="What is the state do you expect your subscribers to be after subscription? Ex. Comfortably Numb"
						name="state_after_subscription"
						counter="64" :color="theme.color"
						:errors="themeFormErrors"
					/>
				</v-col>
				<v-fab-transition>
					<v-col v-if="isValid">
						<v-btn rounded :color="theme.color"
							dark @click="saveTheme"
						>
							Update Theme
						</v-btn>
					</v-col>
				</v-fab-transition>
			</v-row>
		</v-card-text>
		<div class="px-6"><v-divider /></div>
		<v-card-actions class="px-6">
			<v-spacer />
			<v-btn
				class="ma-1"
				depressed dark
				color="grey lighten-1"
				:to="{name: 'Community Rules'}"
				@click="skip"
			>
				Skip
			</v-btn>
			<v-btn
				class="ma-1"
				:color="theme.color || 'primary'"
				@click="next" dark
			>
				Next
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixin/Snack.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import CommunityProgress from "@/mixin/CommunityProgress.js";

export default {
	name: "Display",
	mixins: [Snack, CommunityProgress, PatchMixin],
	data: () => ({
		theme: {
			color: null,
			to_call_subscriber: null,
			state_after_subscription: null
		},
		avatar: null,
		adding: false,
		cover: null,
		themeFormErrors: {},
		avatarFormErrors: {},
		coverFormErrors: {},
		stateCode: "1",
		nextRoute: "Community Rules",
		requiredFields: ["avatar", "cover"],
		invalidMessage: "Community theme form is not valid."
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress"
		}),
		avatarUrl() {
			if (!this.avatar) return null
			return URL.createObjectURL(this.avatar)
		},
		coverUrl() {
			if (!this.cover) return null
			return URL.createObjectURL(this.cover)
		},
		isValid() {
			return this.theme.color !== null
				&& this.theme.to_call_subscriber !== null
				&& this.theme.state_after_subscription !== null
		}
	},
	created() {
		this.populateThemeFields()
	},
	methods: {
		populateThemeFields() {
			this.theme.color = this.community.theme.color
			this.theme.state_after_subscription = this.community.theme.state_after_subscription
			this.theme.to_call_subscriber = this.community.theme.to_call_subscriber
		},
		saveTheme() {
			this.patch(
				this.$util.format(
					this.$urls.community.updateTheme,
					this.community.theme.id
				),
				{ ...this.theme }
			).then(() => {
				if (this.success) {
					this.$helper.setCommunityInProgress(this.patchInstance)
					this.$store.dispatch("community/setInProgress", this.patchInstance)
					this.openSuccessSnack("Theme updated successfully.")
				} else {
					this.themeFormErrors = this.patchErrors
				}
			})
		},
		addAvatar() {
			this.adding = true
			const fd = new FormData()
			fd.append("image", this.avatar)
			this.post(
				this.$util.format(
					this.$urls.community.addAvatar,
					this.community.id
				),
				fd
			).then(() => {
				if (this.success) {
					this.$helper.setCommunityInProgress(this.postInstance)
					this.$store.dispatch("community/setInProgress", this.postInstance)
					this.openSuccessSnack("Avatar uploaded successfully.")
					this.avatar = null
				} else {
					this.avatarFormErrors = this.formErrors
					this.openSnack("Avatar upload failed. Try again.")
				}
			}).finally(() => {
				this.adding = false
			})
		},
		addCover() {
			this.adding = true
			const fd = new FormData()
			fd.append("image", this.cover)
			this.post(
				this.$util.format(
					this.$urls.community.addCover,
					this.community.id
				),
				fd
			).then(() => {
				if (this.success) {
					this.$helper.setCommunityInProgress(this.postInstance)
					this.$store.dispatch("community/setInProgress", this.postInstance)
					this.openSuccessSnack("Cover uploaded successfully.")
					this.cover = null
				} else {
					this.coverFormErrors = this.formErrors
					this.openSnack("Cover upload failed. Try again.")
				}
			}).finally(() => {
				this.adding = true
			})
		},
	}
}
</script>

<style scoped lang="scss">
::v-deep.v-avatar {
	margin-top: -70px;
}
</style>

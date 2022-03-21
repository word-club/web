<template>
	<v-card flat color="transparent">
		<v-card-title>Customize profile</v-card-title>
		<input
			v-show="false"
			id="avatar-input"
			ref="avatarInput"
			class="file-input"
			type="file"
			accept="image/*"
			@change="avatarInputChanged"
		>
		<input
			v-show="false"
			id="cover-input"
			ref="coverInput"
			class="file-input"
			type="file"
			accept="image/*"
			@change="coverInputChanged"
		>
		<v-card-text>
			<div class="overline pb-2">
				<div>profile information</div>
				<v-divider />
			</div>
			<div class="display-name">
				<div class="form-header">Display name (optional)</div>
				<div class="form-description">
					Set an awesome display name for your profile.
					Generally we display your unique username as your display text.
					But if you've set a display name, we'll use that instead.
				</div>
				<text-field
					v-model="profile.display_name"
					icon="mdi-account-box"
					label="Display name (optional)"
					counter="30" name="display_name"
					:errors="patchErrors"
					@change="patchAccount({profile: {display_name: profile.display_name}})"
				/>
			</div>
			<div class="user-bio">
				<div class="form-header">About (optional)</div>
				<div class="form-description">A brief description of yourself shown on your profile</div>
				<text-area
					v-model="profile.bio"
					icon="mdi-card-text"
					label="About (optional)"
					name="bio"
					:errors="patchErrors"
					@change="patchAccount({profile: {bio: profile.bio}})"
				/>
			</div>
			<div class="overline pb-2">
				<div>images</div>
				<v-divider />
			</div>
			<div class="avatar-banner">
				<div class="form-header">Avatar and banner image</div>
				<div class="form-description">Images must be .png or .jpg format</div>
				<div class="actions">
					<wc-avatar size="200"
						:color="avatarUrl ? '' : 'primary'"
						:src="avatarUrl"
						:text="user.username"
						span-class="full-width text-center display-3"
					/>
					<v-btn fab class="avatar-add" dark color="grey"
						@click="$refs.avatarInput.click()"
					>
						<v-icon>mdi-plus</v-icon>
					</v-btn>
					<div class="px-2"></div>
					<v-card class="full-width"
						height="200"
						:img="coverUrl|| ''"
					>
						<v-card-text>
							<v-chip small>Cover Image Preview Pane</v-chip>
						</v-card-text>
						<v-card-actions>
							<v-spacer />
							<v-btn dark fab large @click="$refs.coverInput.click()"><v-icon>mdi-plus-circle</v-icon></v-btn>
						</v-card-actions>
					</v-card>
				</div>
			</div>
			<div class="overline pb-2">
				<div>profile category</div>
				<v-divider />
			</div>
			<div class="profile-category">
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">NSFW</div>
						<div class="form-description">
							This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)
						</div>
					</div>
					<div>
						<v-switch inset v-model="profile.adult_content" color="primary"
							@change="patchAccount({profile: {adult_content: profile.adult_content}})"
						/>
					</div>
				</div>
			</div>
			<div class="overline pb-2">
				<div>advanced</div>
				<v-divider />
			</div>
			<div class="advanced">
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">Allow people to follow you</div>
						<div class="form-description">
							Followers will be notified about posts you make to your profile and see them in their home feed.
						</div>
					</div>
					<div>
						<v-switch inset v-model="profile.allow_follow" color="primary"
							@change="patchAccount({profile: {allow_follow: profile.allow_follow}})"
						/>
					</div>
				</div>
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">Content visibility</div>
						<div class="form-description">
							Posts to this profile can appear in <a href="">w/all</a> and your profile can be discovered in <a
								href="">/users</a>
						</div>
					</div>
					<div>
						<v-switch inset v-model="profile.content_visibility" color="primary"
							@change="patchAccount({profile: {content_visibility: profile.content_visibility}})"
						/>
					</div>
				</div>
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">Active in communities visibility</div>
						<div class="form-description">
							Show which communities I am active in on my profile
						</div>
					</div>
					<div>
						<v-switch inset v-model="profile.communities_visibility" color="primary"
							@change="patchAccount({profile: {communities_visibility: profile.communities_visibility}})"
						/>
					</div>
				</div>
			</div>
		</v-card-text>

		<v-card-actions class="pb-0 pt-4">
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import AvatarCoverMixin from "@/mixin/AvatarCoverMixin.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import AccountUpdate from "@/views/settings/mixins/AccountUpdate.js";

export default {
	name: "Profile",
	mixins: [AvatarCoverMixin, PatchMixin, AccountUpdate],
	data: () => ({
		profile: {
			bio: null,
			display_name: null,
			allow_follow: true,
			content_visibility: true,
			communities_visibility: true,
			adult_content: false
		}
	}),
	computed: {
		...mapGetters({
			user: "user/current"
		})
	},
	created() {
		this.populate()
		this.$store.dispatch("publication/setInView", null)
		this.$store.dispatch("community/setToView", null)
		this.$store.dispatch("user/setInView", this.user)
	},
	methods: {
		populate() {
			this.profile = {
				bio: this.user.profile.bio,
				display_name: this.user.profile.display_name,
				allow_follow: this.user.profile.allow_follow,
				content_visibility: this.user.profile.content_visibility,
				communities_visibility: this.user.profile.communities_visibility,
				adult_content: this.user.profile.adult_content
			}
		}
	}
}
</script>

<style scoped lang="scss">
.avatar-banner {
	.actions {
		display: flex;
		justify-items: start;
		align-items: center;
		position: relative;
		.avatar-add {
			position: absolute;
			top: 0;
		}
	}
}
</style>

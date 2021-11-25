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
				<div class="form-description">Set a display name. This does not change your username</div>
				<text-field
					v-model="profile.display_name"
					icon="mdi-account-box"
					label="Display name (optional)"
					counter="30" name="display_name"
					:errors="patchErrors"
				/>
			</div>
			<div class="user-bio">
				<div class="form-header">About (optional)</div>
				<div class="form-description">A brief description of yourself shown on your profile</div>
				<text-area
					v-model="profile.bio"
					icon="mdi-card-text"
					label="About (optional)"
					counter="200" name="bio"
					:errors="patchErrors"
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
					<v-avatar size="200"
						:color="avatarUrl ? '' : 'primary'"
					>
						<v-img v-if="avatarUrl" :src="avatarUrl" />
						<div v-else class="full-width text-center display-3">{{user.username[0].toUpperCase()}}</div>
					</v-avatar>
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
					<div><v-switch inset v-model="profile.adult_content" color="primary" /></div>
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
					<div><v-switch inset v-model="profile.allow_follow" color="primary" /></div>
				</div>
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">Content visibility</div>
						<div class="form-description">
							Posts to this profile can appear in <a href="">w/all</a> and your profile can be discovered in <a
								href="">/users</a>
						</div>
					</div>
					<div><v-switch inset v-model="profile.content_visibility" color="primary" /></div>
				</div>
				<div class="d-flex justify-space-between">
					<div>
						<div class="form-header">Active in communities visibility</div>
						<div class="form-description">
							Show which communities I am active in on my profile
						</div>
					</div>
					<div><v-switch inset v-model="profile.communities_visibility" color="primary" /></div>
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

export default {
	name: "Profile",
	mixins: [AvatarCoverMixin, PatchMixin],
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
	},
	methods: {}
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

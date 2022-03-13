<template>
	<v-card outlined
		class="cursor"
	>
		<v-card-actions class="pa-3 flex-wrap align-center">
			<v-avatar size="38"
				:color="color"
				class="mr-2"
			>
				<v-img v-if="currentUser && currentUser.avatar"
					:src="currentUser.avatar.image"
				/>
				<v-icon v-else dark>
					mdi-account-circle-outline
				</v-icon>
			</v-avatar>
			<v-responsive class="px-2 py-1"
				max-width="1200"
			>
				<v-chip
					class="full-width rounded"
					@click="toCreatePost($constants.PUBLICATION_TYPE.EDITOR)"
				>
					<v-icon size="22" class="">
						mdi-home
					</v-icon>
					<span class="px-2 weight-500 grey--text text--darken-1 px14">
						New Publication
					</span>
				</v-chip>
			</v-responsive>
			<v-btn icon v-if="smAndUp"
				@click="toCreatePost($constants.PUBLICATION_TYPE.MEDIA)"
			>
				<v-icon>mdi-image-outline</v-icon>
			</v-btn>
			<v-btn icon v-if="smAndUp"
				@click="toCreatePost($constants.PUBLICATION_TYPE.LINK)"
			>
				<v-icon>mdi-link-variant</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import ScreenSizeMixin from "@/mixin/ScreenSizeMixin.js";

export default {
	name: "AddPostBox",
	mixins: [ScreenSizeMixin],
	props: {
		color: {
			default: "primary lighten-1",
			required: false,
			type: String
		}
	},
	computed: {
		...mapGetters({
			currentUser: "user/current"
		}),
		getCommunityId() {
			if (this.$route.name.includes("Community")) {
				return this.$route.params.id
			} return undefined
		}
	},
	methods: {
		toCreatePost(type=this.$constants.PUBLICATION_TYPE.EDITOR) {
			let params = {
				type: type
			}
			if (this.getCommunityId) params["community"] = this.getCommunityId
			this.$router.push({
				name: "Submit",
				params: params
			})
		}
	}
}
</script>

<style scoped lang="scss">
//::v-deep.v-text-field--outlined fieldset {
//	border-color: #0078cd !important;
//}
.rounded {
	height: 36px;
}
</style>

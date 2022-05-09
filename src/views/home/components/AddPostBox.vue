<template>
	<v-card outlined>
		<v-card-actions class="pa-3 flex-wrap align-center">
			<wc-avatar size="38"
				:color="color"
				class="mr-2"
				:src="activeAvatar"
				icon="mdi-account-circle-outline"
				icon-color="white"
			/>
			<v-responsive class="px-2 py-1"
				max-width="1200"
			>
				<v-btn
					class="rounded"
					block
					depressed
					color="grey lighten-3"
					:to="submitRoute()"
				>
					<div class="full-width d-flex align-center">
						<v-icon size="22" color="grey darken-3">
							mdi-home
						</v-icon>
						<div class="px-2 weight-500 grey--text text--darken-1 px14">
							New Publication
						</div>
					</div>
				</v-btn>
			</v-responsive>
			<v-btn icon v-if="smAndUp"
				:to="submitRoute($constants.PUBLICATION_TYPE.MEDIA)"
			>
				<v-icon>mdi-image-outline</v-icon>
			</v-btn>
			<v-btn icon v-if="smAndUp"
				:to="submitRoute($constants.PUBLICATION_TYPE.LINK)"
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
				return this.$route.params.uniqueId
			} return undefined
		},
		activeAvatar() {
			if(!this.currentUser) return false
			return this.currentUser.avatar
		},
	},
	methods: {
		submitRoute(type=this.$constants.PUBLICATION_TYPE.EDITOR) {
			let params = {
				type: type
			}
			if (this.getCommunityId) params["community"] = this.getCommunityId
			return {
				name: "Submit",
				params: params
			}
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

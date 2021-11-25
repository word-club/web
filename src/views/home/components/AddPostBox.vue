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
					@click="toCreatePost"
				>
					<v-icon size="22" class="mb-1">
						mdi-home
					</v-icon>
					<span class="px-2 weight-500 grey--text text--darken-1 px14">
						New Publication
					</span>
				</v-chip>
			</v-responsive>
			<v-btn icon>
				<v-icon>mdi-image-outline</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-link-variant</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";

export default {
	name: "AddPostBox",
	mixins: [RouteMixin],
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
		})
	},
	methods: {}
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

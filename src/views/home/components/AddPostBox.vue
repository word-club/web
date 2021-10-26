<template>
	<v-card outlined
		class="cursor"
	>
		<v-card-title class="pa-3">
			<v-avatar size="38"
				:color="color"
				class="mr-2"
			>
				<v-img v-if="currentUser.avatar"
					:src="currentUser.avatar.image"
				/>
				<v-icon v-else>
					mdi-account-circle-outline
				</v-icon>
			</v-avatar>
			<v-responsive class="px-2 py-1"
				max-width="1200"
			>
				<v-text-field
					dense
					outlined hide-details
					placeholder="Create Post"
					full-width
					:color="color"
					@click="toCreatePost"
				>
					<template
						v-if="$route.path === '/'"
						#prepend-inner
					>
						<v-icon size="22">
							mdi-home
						</v-icon>
					</template>
				</v-text-field>
			</v-responsive>
			<v-btn icon>
				<v-icon>mdi-image-outline</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-link-variant</v-icon>
			</v-btn>
		</v-card-title>
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
			default: "primary",
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

<!--<style scoped lang="scss">-->
<!--::v-deep.v-text-field&#45;&#45;outlined fieldset {-->
<!--	border-color: #0078cd !important;-->
<!--}-->
<!--</style>-->

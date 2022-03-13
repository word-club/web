<template>
	<v-dialog max-width="600"
		:value="notFound.status"
		persistent
	>
		<v-card>
			<v-card-title class="d-flex align-center">
				<div>
					Start post with community
				</div>
				<v-spacer></v-spacer>
				<v-btn fab small @click="$emit('init')">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<div class="error--text px16">
					<span v-if="notFound.status === 404">
						Sorry, The requested community is not available in our server.
					</span>
					<span v-if="notFound.status === 403">
						Sorry, You've not yet subscribed for the requested community.
						Please subscribe the community before adding a publication for it.
					</span>
					<span v-if="notFound.status === 500">
						Sorry, your publication cannot be started with the requested community.
					</span>
				</div>
				<div class="pt-2 d-flex align-center">
					<v-btn color="primary" class="ma-1" :to="{name: 'Home'}">Home</v-btn>
					<v-btn color="success" class="ma-1" @click="$emit('init')">Clear Community</v-btn>
					<v-spacer/>
					<tooltip-icon-btn
						@click="$router.back()"
						tooltip="Go Back"
						icon="mdi-arrow-left"
						color="grey darken-3"
					/>
				</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "InitCommunityState",
	components: {
		TooltipIconBtn: () => import("@/components/utils/TooltipIconBtn")
	},
	computed: {
		...mapGetters({
			notFound: "notFoundState"
		})
	}
}
</script>

<style scoped>

</style>

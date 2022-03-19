<template>
	<v-card>
		<v-card-title>Manage Community Description</v-card-title>
		<v-card-text>
			<text-field
				label="Welcome Text"
				v-model="updatePayload.welcome_text"
				name="welcome_text"
				:errors="patchErrors"
				@change="patchCommunity()"
			/>
			<br>
			<text-area
				icon=""
				label="Description"
				v-model="updatePayload.description"
				name="description"
				:errors="patchErrors"
				@change="patchCommunity()"
			/>
			<br>
			<text-area
				icon=""
				label="Quote"
				v-model="updatePayload.quote"
				name="quote"
				:errors="patchErrors"
				@change="patchCommunity()"
			/>
			<br>
			<check-box>
				<v-checkbox
					label="View Globally"
					v-model="updatePayload.view_globally"
					@change="patchCommunity()"
				/>
			</check-box>
			<br>
			<check-box>
				<v-checkbox
					label="Allow publications with 18+ content."
					v-model="updatePayload.contains_adult_content"
					@change="patchCommunity()"
				/>
			</check-box>
		</v-card-text>
		<v-card-text>
			Be sure while updating the community information. It's your community and the stuff is global.
		</v-card-text>
	</v-card>
</template>

<script>
import PatchMixin from "@/mixin/PatchMixin.js";
import {mapGetters} from "vuex";
import FetchMixin from "@/mixin/FetchMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "Description",
	mixins: [PatchMixin, FetchMixin, Snack],
	data: () => ({
		updatePayload: {
			welcome_text: null,
			description: null,
			quote: null,
			view_globally: false,
			contains_adult_content: false
		},
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		})
	},
	created() {
		this.populate()
		this.clearToView = false
	},
	methods: {
		populate() {
			this.updatePayload = {
				welcome_text: this.community.welcome_text,
				description: this.community.description,
				quote: this.community.quote,
				view_globally: this.community.view_globally,
				contains_adult_content: this.community.contains_adult_content
			}
		},
		patchCommunity() {
			const url = this.$util.format(
				this.$urls.community.detail,
				this.community.id
			)
			this.patch(url, this.updatePayload).then(() => {
				if (this.patchSuccess) {
					this.fetchDetail("community")
					this.openSuccessSnack("Community description updated.")
				} else this.openSnack("Sorry, description update failed.")
			})
		}
	}
}
</script>

<style scoped>

</style>

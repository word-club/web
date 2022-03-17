<template>
	<v-card color="transparent" flat>
		<v-card-title>
			Manage Display Information
		</v-card-title>
		<v-card-text>
			<avatars @refresh="fetchDetail('community')" />
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<covers @refresh="fetchDetail('community')" />
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<v-card>
				<v-progress-linear indeterminate v-if="patching" height="6" :color="community.theme.color" />
				<v-card-title>Display Theme</v-card-title>
				<v-card-text>
					<v-col cols="12" class="pa-0 pb-8">
						<select-field dense
							v-model="theme.color"
							icon="mdi-format-color-fill"
							:items="$constants.COLORS"
							label="Color"
							name="color"
							item-text="name"
							item-value="value"
							:color="theme.color"
							:errors="patchErrors"
							@change="saveTheme()"
						/>
					</v-col>
					<v-col cols="12" class="pa-0 pb-1">
						<text-field
							v-model="theme.subscriber_nickname"
							icon="mdi-format-color-fill"
							label="Subscriber's Nickname"
							placeholder="What to call your subscribers? Provide an amazing nickname..."
							name="subscriber_nickname"
							counter="64" :color="theme.color"
							:errors="patchErrors"
							@change="saveTheme()"
						/>
					</v-col>
					<v-col cols="12" class="pa-0">
						<text-field
							v-model="theme.state_after_subscription"
							icon="mdi-format-color-fill"
							label="State After Subscription"
							placeholder="What is the state do you expect your subscribers to be after subscription? Ex. Comfortably Numb"
							name="state_after_subscription"
							counter="64" :color="theme.color"
							:errors="patchErrors"
							@change="saveTheme()"
						/>
					</v-col>
				</v-card-text>
			</v-card>
		</v-card-text>
		<div class="px-6"><v-divider /></div>
	</v-card>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";
import FetchMixin from "@/mixin/FetchMixin.js";
import Covers from "@/views/community/modCog/components/Covers.vue";
import Avatars from "@/views/community/modCog/components/Avatars.vue";

export default {
	name: "Display",
	components: {Avatars, Covers},
	mixins: [FetchMixin, Snack, PatchMixin],
	data: () => ({
		theme: {
			color: null,
			subscriber_nickname: null,
			state_after_subscription: null
		},
	}),
	computed: {
		...mapGetters({
			community: "community/inView"
		}),
		isValid() {
			return this.theme.color !== null
				&& this.theme.subscriber_nickname !== null
				&& this.theme.state_after_subscription !== null
		},
	},
	created() {
		this.toView = false
		this.populate()
	},
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
		populate() {
			this.theme.color = this.community.theme.color
			this.theme.state_after_subscription = this.community.theme.state_after_subscription
			this.theme.subscriber_nickname = this.community.theme.subscriber_nickname
		},
		saveTheme() {
			this.patch(
				this.$util.format(
					this.$urls.community.theme,
					this.community.id
				),
				{ ...this.theme }
			).then(() => {
				if (this.patchSuccess) {
					this.fetchDetail("community")
					this.openSuccessSnack("Theme updated successfully.")
				} else {
					this.openSnack("Sorry, theme update failed.")
				}
			})
		},
	}
}
</script>

<style scoped>

</style>

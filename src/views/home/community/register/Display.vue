<template>
	<v-card color="transparent" flat>
		<v-card-text>
			<v-card flat :color="theme.color" dark class="pb-6">
				<v-card height="200"
					:color="theme.color" light flat
					class="d-flex justify-center align-center rounded pa-2"
				>
					<v-img v-if="coverUrl" :src="coverUrl" height="100%" width="100%" />
					<v-card-actions v-else>
						<v-avatar class="ma-0">
							<v-icon dark>mdi-image-area</v-icon>
						</v-avatar>
						<v-card-title class="grey--text text--lighten-2">Set community cover image</v-card-title>
					</v-card-actions>
				</v-card>
				<v-card-text class="d-flex justify-center align-center">
					<v-avatar size="200" color="grey lighten-2">
						<v-img v-if="avatar" :src="avatarUrl" />
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
				<v-col cols="12">
					<file-field dense
						v-model="avatar"
						icon="mdi-image-filter-frames"
						label="Community Avatar"
						:errors="avatarFormErrors"
						:color="theme.color"
					/>
				</v-col>
				<v-col cols="12">
					<file-field dense
						v-model="cover"
						icon="mdi-image-area-close"
						label="Community Cover"
						:errors="coverFormErrors"
						:color="theme.color"
					/>
				</v-col>
				<v-col cols="12">
					<select-field dense
						v-model="theme.color"
						icon="mdi-format-color-fill"
						:items="colorsForSelect"
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
						:items="colorsForSelect"
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
						:items="colorsForSelect"
						label="State After Subscription"
						placeholder="What is the state do you expect your subscribers to be after subscription? Ex. Comfortably Numb"
						name="state_after_subscription"
						counter="64" :color="theme.color"
						:errors="themeFormErrors"
					/>
				</v-col>
			</v-row>
		</v-card-text>
		<div class="px-6"><v-divider /></div>
		<v-card-actions class="px-6">
			<v-spacer />
			<v-btn class="ma-1" color="grey lighten-1" depressed
				:to="{name: 'Community Rules'}" dark
			>
				Skip
			</v-btn>
			<v-btn class="ma-1" :color="theme.color"
				:to="{name: 'Community Rules'}" dark
			>
				Next
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import TextField from "@/components/form/TextField.vue";
import SelectField from "@/components/form/SelectField.vue";
import FileField from "@/components/form/FileField.vue";
import {mapGetters} from "vuex";

export default {
	name: "Display",
	components: {FileField, SelectField, TextField},
	data: () => ({
		theme: {
			color: "primary",
			to_call_subscriber: null,
			state_after_subscription: null
		},
		avatar: null,
		cover: null,
		themeFormErrors: {},
		avatarFormErrors: {},
		coverFormErrors: {},
		colorsForSelect: [
			{value: "primary", name: "Primary"},
			{value: "orange", name: "Orange"},
			{value: "red", name: "Red"},
			{value: "pink", name: "Pink"},
			{value: "teal", name: "Teal"},
			{value: "green", name: "Green"},
			{value: "indigo", name: "Indigo"},
			{value: "grey", name: "Grey"},
			{value: "deep-purple", name: "Purple"},
			{value: "amber", name: "Amber"},
		]
	}),
	computed: {
		...mapGetters({
			community: "community/inProgress",
		}),
		avatarUrl() {
			if (!this.avatar) return null
			return URL.createObjectURL(this.avatar)
		},
		coverUrl() {
			if (!this.cover) return null
			return URL.createObjectURL(this.cover)
		}
	}
}
</script>

<style scoped lang="scss">
::v-deep.v-avatar {
	margin-top: -70px;
}
</style>

<template>
	<v-app-bar
		app
		color="grey lighten-4"
		height="55"
		clipped-left
		clipped-right
	>
		<div class="d-flex align-center px-2">
			<v-avatar
				size="40"
				color="grey"
			/>
			<div class="px-2" />
			<h3 class="cursor"
				@click="toHome"
			>
				WordClub
			</h3>
		</div>
		<v-responsive
			v-if="$route.name"
			max-width="200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchCommunities"
				dense outlined
				hide-details
				:placeholder="placeHolder"
				color="primary"
			>
				<template
					#prepend-inner
				>
					<v-icon
						v-if="$route.name === 'Home'"
						size="22"
					>
						mdi-home
					</v-icon>
					<v-avatar
						v-if="$route.name.includes('User')"
						size="30"
						color="primary"
						class="mt-0 mb-2"
					>
						<v-img :src="userInView.avatar.image" />
					</v-avatar>
					<v-avatar
						v-if="$route.name.includes('Community')"
						size="30"
						:color="communityInView.theme.color"
						class="mt-0 mb-2"
					>
						<v-img :src="communityInView.avatar.image" />
					</v-avatar>
				</template>
			</v-text-field>
		</v-responsive>
		<v-responsive
			max-width="1200"
			height="100%"
			class="d-flex align-center justify-center px-2"
		>
			<v-text-field
				v-model="searchPublications"
				dense outlined
				hide-details
				placeholder="Search WordClub"
			>
				<template #prepend-inner>
					<v-icon size="22">
						mdi-magnify
					</v-icon>
				</template>
			</v-text-field>
		</v-responsive>
		<v-spacer />

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-thermostat
			</v-icon>
		</v-btn>

		<v-btn icon
			class="px-2"
			small
		>
			<v-icon size="20">
				mdi-ballot-recount
			</v-icon>
		</v-btn>

		<v-btn icon
			class="mx-2"
			small
			to="/submit"
		>
			<v-icon size="26">
				mdi-plus
			</v-icon>
		</v-btn>

		<v-badge
			color="primary lighten-1"
			overlap
		>
			<template #badge>
				<span class="font-weight-bold">55</span>
			</template>
			<v-btn icon
				class="px-2"
				small
			>
				<v-icon>
					mdi-bell-outline
				</v-icon>
			</v-btn>
		</v-badge>

		<div class="px-4" />
		<profile-drop />
	</v-app-bar>
</template>

<script>
import ProfileDrop from "@/components/utils/ProfileDrop.vue";
import RouteMixin from "@/mixin/RouteMixin.js";
import {mapGetters} from "vuex";
export default {
	name: "TheAppBar",
	components: {ProfileDrop},
	mixins: [RouteMixin],
	data: () => ({
		searchCommunities: "",
		searchPublications: ""
	}),
	computed: {
		...mapGetters({
			userInView: "user/inView",
			communityInView: "community/inView"
		}),
		placeHolder() {
			if (this.$route.name.includes("User")) {
				return "#/" + this.userInView.username
			}
			if (this.$route.name.includes("Community")) {
				return "#/" + this.communityInView.unique_id
			}
			return this.$route.name
		}
	},
	methods: {}
}
</script>

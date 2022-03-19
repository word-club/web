<template>
	<v-card color="transparent" flat>
		<v-card-title>
			Manage Display Information
		</v-card-title>
		<v-card-text>
			<avatars-mod @refresh="fetchDetail('community')" />
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<covers-mod @refresh="fetchDetail('community')" />
		</v-card-text>
		<v-divider class="mx-3"/>
		<v-card-text>
			<theme-mod @refresh="fetchDetail('community')" />
		</v-card-text>
		<div class="px-6"><v-divider /></div>
	</v-card>
</template>

<script>
import CoversMod from "@/views/community/modCog/components/Covers";
import AvatarsMod from "@/views/community/modCog/components/Avatars";
import FetchMixin from "@/mixin/FetchMixin.js";
import ThemeMod from "@/views/community/modCog/components/Theme";
import {mapMutations} from "vuex";

export default {
	name: "Display",
	components: {ThemeMod, AvatarsMod, CoversMod},
	mixins: [FetchMixin],
	methods: {
		...mapMutations("community", ["SET_TO_VIEW"]),
	},
	created() {
		this.clearToView = false
	}
}
</script>

<style scoped>

</style>

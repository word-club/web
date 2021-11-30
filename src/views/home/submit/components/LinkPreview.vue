<template>
	<v-card v-if="inProgress && inProgress.link"
		class="mb-6"
	>
		<v-card-text>
			<v-list-item>
				<v-list-item-avatar :color="theme.color">
					<v-img v-if="inProgress.link.image" :src="inProgress.link.image" />
					<div v-else class="white--text px22 mb-1 full-width text-center">{{inProgress.link.title[0].toUpperCase()}}</div>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>
						<a :href="inProgress.link.link" target="_blank">{{inProgress.link.title}}</a>
					</v-list-item-title>
					<v-list-item-subtitle>{{inProgress.link.description}}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "LinkPreview",
	props: {
		theme: {type: Object, required: true}
	},
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		})
	},
	created() {
	},
	methods: {}
}
</script>

<style scoped lang="scss">

</style>

<template>
	<v-card-text class="pa-2">
		<v-card>
			<v-card-title>{{link.title}}</v-card-title>
			<v-card-subtitle v-if="link.description">{{link.description}}</v-card-subtitle>
			<v-card-text class="px-0 pb-0" v-if="link.image">
				<v-img :src="link.image" height="200" />
				<v-list-item tile outlined
					:href="link.link"
					target="_blank"
					class="item-link"
				>
					<v-list-item-content class="py-10">
						<v-list-item-title class="px16 weight-500">
							{{link.title}}
						</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action>
						<v-btn small fab outlined depressed><v-icon>mdi-link</v-icon></v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-card-text>
			<v-card v-else flat
				color="grey lighten-3"
				class="rounded-t-0 d-flex justify-center align-center"
			>
				<v-list-item :href="link.link" target="_blank">
					<v-list-item-avatar
						size="80" color="white"
					>
						<wc-avatar
							size="80" color="white"
							:text="link.title"
							span-class="full-width text-center px22"
						/>
					</v-list-item-avatar>
					<v-list-item-title class="weight-400 px18 text-decoration-underline">{{link.title}}</v-list-item-title>
					<v-list-item-subtitle v-if="link.description">{{link.description}}</v-list-item-subtitle>
				</v-list-item>
			</v-card>
		</v-card>
	</v-card-text>
</template>

<script>
export default {
	name: "ItemLink",
	props: {link: {type: Object, default: () => {}}},
}
</script>

<style scoped lang="scss">
.item-link {
	background-color: #dadada;
}
.item-link:hover {
	background-color: whitesmoke;
}
</style>

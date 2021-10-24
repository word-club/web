<template>
	<v-card class="mx-auto transparent"
		flat
	>
		<v-card-text class="pa-0">
			<v-img src="https://imgsv.imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg"
				height="300"
			/>
		</v-card-text>
		<v-card-title class="pa-0 white">
			<v-card max-width="800"
				width="800"
				class="mx-auto"
				flat color="white"
			>
				<v-card-text class="pa-3 pt-0 pb-1 d-flex align-center"
					style="width: 100%"
				>
					<v-avatar
						class="community-avatar"
						size="80"
						color="teal"
					/>
					<div class="px-2" />
					<div class="px24">
						{{ community.name }}
					</div>
					<v-spacer />
					<div class="px-2" />
					<v-btn outlined
						color="teal"
						rounded
					>
						Join
					</v-btn>
					<div class="px-2" />
					<v-btn icon
						color="teal"
					>
						<v-icon>mdi-bell</v-icon>
					</v-btn>
				</v-card-text>
				<v-card-actions class="flex-wrap px14 weight-500 py-0">
					<div class="community-top-button ma-2 mb-0 cursor"
						:class="{'community-top-button-active': $route.name==='Community'}"
						@click="toCommunityDetail(community.id)"
					>
						Posts
					</div>
					<div class="community-top-button ma-2 mb-0 cursor"
						:class="{'community-top-button-active': $route.name==='Community Wiki'}"
						@click="toCommunityWiki(community.id)"
					>
						Wiki
					</div>
					<div class="community-top-button ma-2 mb-0 cursor"
						:class="{'community-top-button-active': $route.name==='Community Modmail'}"
						@click="toCommunityModmail(community.id)"
					>
						ModMail
					</div>
				</v-card-actions>
			</v-card>
		</v-card-title>
		<v-card-text class="pt-4">
			<v-card max-width="800"
				class="mx-auto"
				flat color="transparent"
			>
				<router-view />
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import RouteMixin from "@/mixin/RouteMixin.js";
export default {
	name: "Community",
	mixins: [RouteMixin],
	props: {},
	data: () => ({}),
	computed: {
		...mapGetters({
			community: "community/detail"
		})
	},
	methods: {}
}
</script>

<style scoped>
.community-avatar {
	border: 4px solid white !important;
	margin-top: -10px;
}
.px24 {
	font-size: 24px;
}
.community-top-button {
	padding: 0 6px;
	color: #666666;
}
.community-top-button:hover {
	color: #269687
}
.community-top-button-active {
	border-bottom: 3px solid #269687;
}
</style>

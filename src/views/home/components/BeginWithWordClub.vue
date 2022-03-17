<template>
	<v-card outlined>
		<v-img :src="phantomPlanetImg"
			height="40"
		/>
		<v-card-text class="avatar-line pt-0">
			<v-avatar size="80" class="logo">
				<v-img :src="require('@/assets/w_art.jpg')" />
			</v-avatar>
			<div class="home">
				Your personal WordClub frontpage. Come here to check in with your favorite communities
			</div>
		</v-card-text>
		<v-card-text class="pt-0">
			<v-btn rounded
				block depressed
				color="primary"
				:to="{name: 'Submit'}"
			>
				Create Post
			</v-btn>
			<div class="py-2" />
			<v-btn rounded
				block outlined
				class="primary--text"
				:to="{name: 'Register Community'}"
			>
				Create a Community
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "BeginWithWordClub",
	data: () => ({
		phantomPlanetImg: require("@/assets/phantomplanets.jpg")
	}),
}
</script>
<style scoped lang="scss">
.avatar-line {
	display: flex;
	align-items: center;
	margin-top: -20px;
	.home {
		padding-top: 30px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 14px;
		font-weight: 400;
	}
}
.logo {
	border: 3px solid #f2f7fe;
	background-color: whitesmoke;
}
</style>

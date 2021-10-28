<template>
	<v-card outlined
		max-width="350"
	>
		<v-img :src="communityCover"
			height="30"
		/>
		<v-card-text class="pa-3 d-flex align-center">
			<v-avatar color="orange"
				size="45"
			/>
			<div class="px-3 mt-1 px16 weight-500">
				#/TajMahalTheWonder
			</div>
		</v-card-text>
		<v-card-text class="pa-2">
			Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
		</v-card-text>
		<v-card-text class="d-flex align-center pa-3 weight-500">
			<div>
				<div class="px18">
					5.2m
				</div>
				<div class="px14">
					taj mahal wonderers
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					15.1k
				</div>
				<div class="px14">
					being quite literally awesome
				</div>
			</div>
		</v-card-text>
		<v-divider class="mx-3" />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created Jul 19, 2018
			</div>
		</v-card-text>
		<v-card-text class="pa-3">
			<v-btn
				block rounded
				outlined color="orange"
			>
				Join
			</v-btn>
		</v-card-text>
		<v-divider class="mx-3" />
		<v-card-text>
			<v-btn
				depressed
				small
				rounded
				block
			>
				<template #default>
					<div class="d-flex align-center justify-space-between px-4"
						style="width: 100%"
					>
						<div>Community options</div>
						<v-icon>mdi-chevron-down</v-icon>
					</div>
				</template>
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "CommunityPeek",
	props: {},
	data: () => ({
		communityCover: "https://www.gaonconnection.com/h-upload/2018/08/142057lsun8ytpjw37abf0qnrntgspzxa8sogd2800639.png"
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>

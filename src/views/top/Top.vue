<template>
	<v-card color="transparent" flat tile>
		<v-progress-linear v-if="loading" height="6" color="primary" indeterminate />
		<v-card-text class="d-flex justify-start align-center white px-3 pb-0 pt-3">
			<div class="tab-item"
				v-for="(item, index) in tabItems"
				:key="index" @click="$router.push({name: item.route})"
				:class="{
					'tab-item-active': $route.name === item.route
				}"
			>
				<div class="tab-text">
					{{ item.name }}
				</div>
				<v-scale-transition>
					<v-card color="primary lighten-1"
						v-if="$route.name === item.route" flat
						height="3" rounded
					/>
				</v-scale-transition>
			</div>
		</v-card-text>
		<v-scale-transition>
			<v-progress-linear v-if="loading" indeterminate height="6" rounded />
		</v-scale-transition>
		<div class="py-1" />
		<transition name="view">
			<router-view />
		</transition>
	</v-card>
</template>

<script>
export default {
	name: "Top",
	data: () => ({
		loading: false,
	}),
	computed: {
		tabItems() {
			return [
				{name: "Communities", route: "Top Communities"},
				{name: "Users", route: "Top Users"},
				{name: "Commentators", route: "Top Commentators"},
			]
		},
		administrationData() {
			return this.$helper.getAdministrationData()
		},
	},
	created() {
		this.fetchAdministrationDataIfNotPresent()
		this.fetchItems()
	},
	methods: {
		fetchAdministrationDataIfNotPresent() {
			this.loading = true
			console.log(this.administrationData)
			if (!this.administrationData) {
				this.$axios.get(this.$urls.administration.list)
					.then(response => {
						console.log(response)
						this.$helper.setAdministrationData(response)
					})
					.catch(() => {
						this.openSnack("Failed to fetch administration data")
					})
					.finally(() => {
						this.loading = false
					})
			}
		},
		fetchItems() {
			this.loading = true
			this.$axios.get(this.$urls.administration.top)
				.then(res => {
					this.$store.dispatch("setTop", res)
				})
				.finally(() => {
					this.loading = false
				})
		}
	}
}
</script>

<style scoped lang="scss">
.tab-item {
	cursor: pointer;
	padding: 0 5px 0 2px;
	.tab-text {
		font-size: 14px;
		text-transform: uppercase;
		font-weight: 500;
		padding: 0 5px;
	}
	.tab-text:hover {
		color: #1d1d1d;
	}
}
.tab-item-active {
	color: var(--primary);
	pointer-events: none !important;
}
</style>
<style lang="sass">
.border-bottom
	border-bottom: 1px solid rgb(0 0 0 / 12%)
.view-enter-active, .view-leave-active
	transition: opacity .6s ease-in-out, transform .6s ease
.view-enter-active
	transition-delay: .5s
.view-enter, .view-leave-to
	opacity: 0
.view-enter-to, .view-leave
	opacity: 1
</style>

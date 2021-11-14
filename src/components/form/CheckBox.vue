<template>
	<v-card rounded="xl"
		class="d-flex align-center justify-space-between px-5 outline"
		height="56" flat
	>
		<slot />
	</v-card>
</template>

<script>
export default {
	name: "CheckBox"
}
</script>

<style scoped lang="scss">
.outline {
	border: thin solid #a8a8a8;
	border-radius: 4px !important;
	::v-deep.v-input {
		width: 100%;
	}
}
.outline:hover {
	border: thin solid #494949;
}
::v-deep.v-input.v-input--is-label-active {
	.v-input__control {
		.v-input__slot {
			label {
				color: var(--primary) !important;
			}
		}
	}
}
</style>

<template>
	<div class="px-2">
		<v-card class="pa-6 mx-auto"
			color="transparent" flat
			max-width="800"
		>
			<div class="py-4" />
			<transition name="view">
				<router-view />
			</transition>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "RegisterCommunity",
}
</script>



<template>
	<v-tooltip bottom>
		<template #activator="{attrs, on}">
			<v-btn
				class="ma-1"
				:fab="fab" :icon="!fab"
				:height="size" :width="size"
				:color="color" :elevation="elevation"
				@click="$emit('click', $event)"
				v-bind="attrs" v-on="on" :dark="fab"
				:disabled="disabled"
			>
				<v-icon :size="iconSize">{{ icon }}</v-icon>
			</v-btn>
		</template>
		<span>{{tooltip}}</span>
	</v-tooltip>
</template>

<script>
export default {
	name: "TooltipIconBtn",
	props: {
		size: {type: String, default: "25"},
		icon: {type: String, required: true},
		color: {type: String, default: "grey"},
		tooltip: {type: String, required: true},
		disabled: {type: Boolean, default: false},
		iconSize: {type: String, default: "22"},
		fab: {type: Boolean, default: false},
		elevation: {type: String, default: "0"}
	}
}
</script>

<style scoped>

</style>

<template>
	<v-avatar
		:size="size"
		:color="color"
	>
		<v-img v-if="src" :src="$link(src)" />
		<span v-else :class="spanClass">{{text[0].toUpperCase()}}</span>
	</v-avatar>
</template>

<script>
export default {
	name: "WcAvatar",
	props: {
		size: {type: [Number, String], default: 20},
		color: {type: String, default: "primary"},
		src: {type: [String, Boolean], default: null},
		text: {type: String, default: ""},
		spanClass: {type: String, default: ""}
	}
}
</script>

<style scoped>

</style>

<template>
	<v-avatar
		v-bind="$attrs"
		v-on="$listeners"
	>
		<v-img v-if="src" :src="$link(src)" />
		<v-icon v-else-if="icon" :color="iconColor" :size="iconSize">{{icon}}</v-icon>
		<span v-else :class="spanClass" class="cursor">{{text[0].toUpperCase()}}</span>
	</v-avatar>
</template>

<script>
export default {
	name: "WcAvatar",
	props: {
		src: {type: [String, Boolean], default: null},
		icon: {type: String, default: null},
		iconColor: {type: String, default: null},
		iconSize: {type: String, default: null},
		text: {type: String, default: ""},
		spanClass: {type: String, default: ""}
	}
}
</script>

<style scoped>

</style>

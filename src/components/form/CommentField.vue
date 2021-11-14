<template>
	<v-textarea
		outlined
		:value="value"
		name="comment"
		prepend-inner-icon="mdi-comment-outline"
		placeholder="Give your thoughts..."
		@change="$emit('change', $event)"
		@keyup="$emit('keyup', $event)"
		@input="$emit('input', $event)"
	/>
</template>

<script>
export default {
	name: "CommentField",
	props: {
		value: {required: true}
	}
}
</script>

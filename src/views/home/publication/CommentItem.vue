<template>
	<v-list class="py-0">
		<v-list-item-group class="comment-item-wrapper">
			<v-list-item class="comment-item">
				<div v-if="index !== 0"
					class="top-field-line"
				/>
				<div class="bottom-field-line" />
				<v-list-item-avatar size="40"
					color="grey"
				/>
				<v-list-item-content class="pl-4">
					<v-list-item-subtitle class="d-flex align-center px14">
						<div>kiranparajuli589</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>6 minutes ago</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px16">
						Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.
					</v-list-item-title>
					<v-list-item-subtitle class="d-flex align-center">
						<v-btn icon
							small
						>
							<v-icon>mdi-chevron-up</v-icon>
						</v-btn>
						<div class="px-1">
							1.6k
						</div>
						<v-btn icon
							small
						>
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
						<v-btn small
							rounded depressed
							@click="addReply = !addReply"
						>
							<v-icon>mdi-reply-outline</v-icon>
							Reply
						</v-btn>
						<v-btn small
							text rounded
						>
							Give Award
						</v-btn>
						<v-btn small
							text rounded
						>
							Save
						</v-btn>
						<v-btn small
							text rounded
						>
							Report
						</v-btn>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<div
				v-if="addReply"
				class="field-wrapper"
			>
				<div class="field-line" />
				<comment-field v-model="reply"
					:reply="true"
				/>
			</div>
		</v-list-item-group>
		<v-list-item-group class="replies">
			<v-list-item v-for="n in 3"
				:key="n"
				class="comment-item reply"
			>
				<div v-if="n !== 1"
					class="top-field-line"
				/>
				<div v-if="n !== 3"
					class="bottom-field-line"
				/>
				<div
					class="bottom-end-line"
				/>
				<v-list-item-avatar size="40"
					color="grey"
				/>
				<v-list-item-content class="pl-3">
					<v-list-item-subtitle class="d-flex align-center px14">
						<div>kiranparajuli589</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>6 minutes ago</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px16">
						Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.
					</v-list-item-title>
					<v-list-item-subtitle class="d-flex align-center">
						<v-btn icon
							small
						>
							<v-icon>mdi-chevron-up</v-icon>
						</v-btn>
						<div class="px-1">
							1.6k
						</div>
						<v-btn icon
							small
						>
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
						<v-btn small
							text rounded
						>
							Give Award
						</v-btn>
						<v-btn small
							text rounded
						>
							Save
						</v-btn>
						<v-btn small
							text rounded
						>
							Report
						</v-btn>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
import CommentField from "@/components/form/_comment_field.vue";
export default {
	name: "CommentItem",
	components: {CommentField},
	props: {
		index: {type: Number, required: true}
	},
	data: () => ({
		addReply: false,
		reply: ""
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped lang="scss">
.replies {
	padding-left: 35px;
	.reply {
		border-left: 1px solid grey;
	}
}
.comment-item {
	overflow: hidden;
	position: relative;
	.top-field-line {
		position: absolute;
		height: 20px;
		width: 1px;
		background-color: grey;
		top: 0;
		left: 35px;
	}
	.bottom-field-line{
		position: absolute;
		height: calc(100% - 54px);
		top: 55px;
		left: 35px;
		width: 1px;
		background-color: grey;
	}
	.bottom-end-line {
		position: absolute;
		height: 20px;
		border-bottom-left-radius: 12px;
		top: 55px;
		left: 35px;
		width: 20px;
		border-left: 1px solid grey;
		border-bottom: 1px solid grey;
		background-color: transparent;
	}
}
.comment-item::after:nth-last-child(-n+1) {
	display: none;
}
.comment-text {
	white-space: normal
}
.field-wrapper {
	position: relative; padding-left: 35px;
	.field-line {
		position: absolute; top: 0; height: 100%; width: 1px; background-color: grey; z-index: 5
	}
}

</style>

<template>
	<v-list>
		<v-list-item-group>
			<v-list-item class="comment-item">
				<v-list-item-avatar size="40"
					color="grey"
				/>
				<v-list-item-content>
					<v-list-item-subtitle class="d-flex align-center px12">
						<div>kiranparajuli589</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>6 minutes ago</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px14">
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
				<comment-field :reply="true" />
			</div>
		</v-list-item-group>
		<v-list-item-group class="replies">
			<v-list-item class="comment-item reply">
				<v-list-item-avatar size="40"
					color="grey"
				/>
				<v-list-item-content>
					<v-list-item-subtitle class="d-flex align-center px12">
						<div>kiranparajuli589</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>6 minutes ago</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px14">
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
			<v-list-item class="comment-item reply">
				<v-list-item-avatar size="40"
					color="grey"
				/>
				<v-list-item-content>
					<v-list-item-subtitle class="d-flex align-center px12">
						<div>kiranparajuli589</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>6 minutes ago</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px14">
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
		</v-list-item-group>
	</v-list>
</template>

<script>
import CommentField from "@/components/form/_comment_field.vue";
export default {
	name: "CommentItem",
	components: {CommentField},
	props: {},
	data: () => ({
		addReply: false
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped lang="scss">
.replies {
	padding-left: 35px;
}
.reply {
	border-left: 2px solid grey;
}
.comment-item {
	overflow: hidden;
}
.comment-item::after {
	position: absolute;
	content: '';
	height: calc(100% - 80px);
	top: 55px;
	left: 35px;
	width: 2px;
	background-color: grey;
}
.comment-text {
	white-space: normal
}
.field-wrapper {
	position: relative; padding-left: 35px;
	.field-line {
		position: absolute; top: 0; height: 100%; width: 2px; background-color: grey; z-index: 5
	}
}
</style>

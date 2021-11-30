<template>
	<v-list class="py-0" flat>
		<v-dialog v-model="itemForShare" max-width="600"
			persistent transition="scale-transition"
		>
			<v-card color="primary" dark>
				<v-card-title>
					Share comment
					<v-spacer />
					<v-btn icon @click="itemForShare = null"><v-icon>mdi-close</v-icon></v-btn>
				</v-card-title>
				<v-card-text>
					<v-card>
						<v-card-title>Comment Item</v-card-title>
					</v-card>
				</v-card-text>
				<v-card-actions>
					<v-btn block>Share</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-list-item-group class="comment-item-wrapper">
			<v-list-item class="comment-item">
				<div v-if="replies.length" class="bottom-field-line" />
				<div
					class="bottom-end-line-outer"
				/>
				<v-list-item-avatar
					size="30" class="comment-avatar"
					color="grey"
				>
					<v-img v-if="comment.created_by.avatar" :src="$link(comment.created_by.avatar)" />
					<div class="full-width text-center px16 weight-500 white--text">{{ comment.created_by.username[0].toUpperCase() }}</div>
				</v-list-item-avatar>
				<v-list-item-content class="pl-4">
					<v-list-item-subtitle class="d-flex align-center px14">
						<div>{{ comment.created_by.username }}</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>{{$moment(comment.created_at).fromNow()}}</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px16">
						{{comment.comment}}
					</v-list-item-title>
					<v-list-item-subtitle class="d-flex align-center pt-2">
						<v-btn icon :color="comment.up_vote ? 'primary' : 'grey'"
							small @click="upVoteComment()"
						>
							<v-icon>mdi-chevron-up</v-icon>
						</v-btn>
						<div class="px-1">
							{{ comment.popularity }}
						</div>
						<v-btn icon :color="comment.down_vote ? 'primary' : 'grey'"
							small @click="downVoteComment()"
						>
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
						<v-btn
							small rounded depressed class="mx-1"
							@click="addReply = !addReply"
						>
							<v-icon>mdi-reply-outline</v-icon>
							Reply
						</v-btn>
						<v-btn
							small text rounded
							@click="itemForShare = comment"
						>
							Share
						</v-btn>
						<v-btn
							v-if="!isMyComment"
							small text rounded
							@click="saveComment()"
						>
							Save
						</v-btn>
						<v-btn v-if="!isMyComment"
							small text rounded
							@click="reportComment()"
						>
							Report
						</v-btn>
						<v-btn v-if="!isMyComment"
							small text rounded
							@click="hideComment()"
						>
							HIDE
						</v-btn>
						<v-btn v-if="isMyComment"
							text small rounded
							@click="initCommentEdit"
						>
							EDIT
						</v-btn>
						<v-btn v-if="isMyComment"
							text small rounded
							@click="initCommentDelete"
						>
							DELETE
						</v-btn>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-scale-transition>
				<v-list-item
					v-if="addReply"
					class="field-wrapper py-4 align-start"
				>
					<template #default>
						<div class="last-reply-line" />
						<div v-if="replies.length > 0" class="field-line" />
						<reply-field @init="$emit('init')"
							:comment="comment"
						/>
					</template>
				</v-list-item>
			</v-scale-transition>
		</v-list-item-group>
		<v-list-item-group class="replies">
			<v-list-item v-for="(reply, i) in replies"
				:key="i" class="comment-item"
				:class="{
					'reply': i + 1 !== replies.length,
					'last-reply': i + 1 === replies.length
				}"
			>
				<div v-if="i !== 0"
					class="top-field-line"
				/>
				<div v-if="i + 1 !== replies.length"
					class="bottom-field-line"
				/>
				<div
					class="bottom-end-line"
				/>
				<v-list-item-avatar size="30"
					color="grey" class="comment-avatar"
				>
					<v-img v-if="comment.created_by.avatar" :src="$link(comment.created_by.avatar)" />
					<div class="full-width text-center px16 weight-500 white--text">{{ comment.created_by.username[0].toUpperCase() }}</div>
				</v-list-item-avatar>
				<v-list-item-content class="pl-3">
					<v-list-item-subtitle class="d-flex align-center px14">
						<div>{{ reply.created_by.username }}</div>
						<div><v-icon>mdi-circle-small</v-icon></div>
						<div>{{$moment(reply.created_at).fromNow() }}</div>
					</v-list-item-subtitle>
					<v-list-item-title class="comment-text px16">
						{{reply.comment}}
					</v-list-item-title>
					<v-list-item-subtitle class="d-flex align-center">
						<v-btn icon :color="reply.up_vote ? 'primary' : 'grey'"
							small @click="upVoteComment(reply)"
						>
							<v-icon>mdi-chevron-up</v-icon>
						</v-btn>
						<div class="px-1">
							{{ reply.popularity }}
						</div>
						<v-btn icon
							small :color="reply.down_vote ? 'primary' : 'grey'"
							@click="downVoteComment(reply)"
						>
							<v-icon>mdi-chevron-down</v-icon>
						</v-btn>
						<v-btn
							small text rounded
							@click="itemForShare = reply"
						>
							Share
						</v-btn>
						<v-btn v-if="!isMyReply(reply)"
							small text rounded
							@click="saveComment(reply)"
						>
							Save
						</v-btn>
						<v-btn v-if="!isMyReply(reply)"
							small text rounded
							@click="reportComment(reply)"
						>
							Report
						</v-btn>
						<v-btn v-if="!isMyReply(reply)"
							small text rounded
							@click="hideComment(reply)"
						>
							HIDE
						</v-btn>
						<v-btn v-if="isMyReply(reply)"
							text small rounded
							@click="initReplyEdit"
						>
							EDIT
						</v-btn>
						<v-btn v-if="isMyReply(reply)"
							text small rounded
							@click="initReplyDelete"
						>
							DELETE
						</v-btn>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
import ReplyField from "@/components/form/ReplyField.vue";
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import CommentActions from "@/mixin/CommentActions.js";

export default {
	name: "CommentItem",
	components: {ReplyField},
	mixins: [PostMixin, Snack, CommentActions],
	props: {
		index: {type: Number, required: true},
		comment: {type: Object, required: true},
		count: {type: Number, required: true}
	},
	computed: {
		isMyComment() {
			return this.$helper.ifCurrentUserIs(this.comment.created_by)
		},
		replies() {
			return this.comment.replies
		}
	},
	methods: {
		isMyReply(reply) {
			return this.$helper.ifCurrentUserIs(reply.created_by)
		}
	}
}
</script>

<style scoped lang="scss">
$borderGrey: #cecece;
$borderRadius: 10px;
$leftPadding: 25px;

.replies {
	padding-left: $leftPadding;
	.reply {
		border-left: 2px solid $borderGrey;
	}
	.last-reply {
		border-left: 2px solid transparent;
	}
	.last-reply::after {
		position: absolute;
		content: "";
		top: 0; left: -2px;
		height: 100%;
		width: 20px;
		border-bottom-left-radius: $borderRadius;
		border-left: 2px solid $borderGrey;
		border-bottom: 2px solid $borderGrey;
	}
}
.comment-item {
	padding-left: 10px;
	position: relative;
	overflow: visible;
	.link-line {
		position: absolute;
		height: 35px;
		width: 35px;
		top: 20px; left: -1px;
		border-bottom-left-radius: 10px;
		border: 2px solid $borderGrey;
		border-top: none;
		border-right: none;

	}
	.top-link-line {
		position: absolute;
		height: 60px;
		width: 2px;
		background-color: $borderGrey;
		top: -24px;
		left: $leftPadding;
	}
	.top-field-line {
		position: absolute;
		height: 45px;
		width: 2px;
		background-color: $borderGrey;
		top: 0;
		left: $leftPadding;
	}
	.bottom-field-line{
		position: absolute;
		height: 60px;
		top: 50px;
		left: $leftPadding;
		width: 2px;
		background-color: $borderGrey;
	}
	.bottom-end-line {
		position: absolute;
		height: 30px;
		border-bottom-left-radius: $borderRadius;
		top: 45px;
		left: $leftPadding;
		width: 20px;
		border-left: 2px solid $borderGrey;
		border-bottom: 2px solid $borderGrey;
		background-color: transparent;
	}
	.bottom-end-line-outer {
		position: absolute;
		height: 33px;
		border-bottom-left-radius: $borderRadius;
		top: 50px;
		left: $leftPadding;
		width: 30px;
		border-left: 2px solid $borderGrey;
		border-bottom: 2px solid $borderGrey;
		background-color: transparent;
	}
}
.comment-avatar {
	margin: 0 0 30px;
}
.comment-item::after:nth-last-child(-n+1) {
	display: none;
}
.comment-text {
	white-space: normal
}
.field-wrapper {
	position: relative; padding-left: 25px;
	.field-line {
		position: absolute;
		top: 0; height: 100%;
		width: 2px; z-index: 5;
		background-color: $borderGrey;
	}
	.last-reply-line {
		position: absolute;
		top: -35px;
		height: 85px;
		width: 17px;
		z-index: 5;
		border: 2px solid $borderGrey;
		border-bottom-left-radius: 12px;
		border-top: none;
		border-right: none;
	}
}

</style>

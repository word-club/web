<template>
	<div class="full-width reply-box thin-scroll-bar">
		<text-area
			:id="`#reply-input-${this.comment.id}`"
			class="ml-4 reply-input" name="reply"
			v-model="reply" icon="mdi-reply"
			outlined label="REPLY" :counter="false"
			placeholder="Add your reply"
		/>
		<emoji-picker :search="search"
			@emoji="insert"
		>
			<div slot="emoji-invoker"
				slot-scope="{ events: { click: clickEvent } }"
				class="invoker"
				@click.stop="clickEvent"
			>
				<v-btn icon
					class="emoji-btn"
				>
					<v-icon :color="pickerColor">
						mdi-emoticon
					</v-icon>
				</v-btn>
			</div>
			<div slot="emoji-picker"
				slot-scope="{ emojis, insert }"
			>
				<div class="emoji-picker">
					<div class="pa-2 emoji-picker__search">
						<v-text-field v-model="search"
							type="text" dense
							hide-details outlined
							label="Search"
							placeholder="Search emojis"
						/>
					</div>
					<div>
						<div v-for="(emojiGroup, category) in emojis"
							:key="category"
						>
							<h5 class="pa-2">
								{{ category }}
							</h5>
							<v-divider />
							<div class="pa-2 emojis">
								<span
									v-for="(emoji, emojiName) in emojiGroup"
									:key="emojiName"
									:title="emojiName"
									@click="insert(emoji)"
								>{{ emoji }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</emoji-picker>
		<v-fab-transition>
			<v-btn v-if="reply" class="ml-4 mt-2" color="primary" @click="addReply">Reply</v-btn>
		</v-fab-transition>
	</div>
</template>

<script>
import PostMixin from "@/mixin/PostMixin.js";
import Snack from "@/mixin/Snack.js";
import EmojiPicker from "vue-emoji-picker";

export default {
	name: "ReplyField",
	mixins: [PostMixin, Snack],
	props: {
		comment: {type:Object, required: true}
	},
	components: {
		EmojiPicker
	},
	data: () => ({
		search: "",
		pickerColor: "grey",
		reply: null
	}),
	methods: {
		addReply() {
			this.post(
				this.$util.format(this.$urls.comment.reply, this.comment.id),
				{ comment: this.reply }
			).then(() => {
				if(this.success) {
					this.$emit("init")
					this.reply = null
				}
			})
		},
		insert(emoji) {
			const replyTextarea = document.querySelector(`#reply-input-${this.comment.id}`)
			if (replyTextarea) {
				const cursorPosition = replyTextarea.selectionStart

				if (cursorPosition === this.reply.length) {
					this.reply += emoji
				} else {
					const firstPart = this.comment.substring(0, cursorPosition)
					const secondPart = this.comment.substring(cursorPosition, this.reply.length)
					this.reply = firstPart + emoji + secondPart
				}
			}
		},
	}
}
</script>

<style scoped lang="scss">
.reply-box {
	position: relative;

	.reply-input {
		border-radius: 4px;
	}

	.clear-button {
		position: absolute;
		right: 7px !important;
		top: 81px !important;
	}

	.invoker {
		position: absolute;
		right: 7px;
		top: 7px;
	}

	.emoji-picker {
		position: absolute;
		top: 55px !important;
		right: 5px !important;
		z-index: 1;
		border: 1px solid #ccc;
		width: 15rem;
		height: 20rem;
		overflow: scroll;
		box-sizing: border-box;
		border-radius: 4px;
		background: aliceblue;
		box-shadow: 1px 1px 8px #c7dbe6;

		.emoji-picker__search {
			display: flex;
		}

		.emoji-picker__search > input {
			flex: 1;
			border-radius: 10rem;
			border: 1px solid #ccc;
			padding: 0.5rem 1rem;
			outline: none;
		}

		h5 {
			margin-bottom: 0;
			color: #b1b1b1;
			text-transform: uppercase;
			font-size: 0.8rem;
			cursor: default;
		}

		.emojis {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			span {
				padding: 0.2rem;
				cursor: pointer;
				border-radius: 8px;
				font-size: 20px;
			}

			span:hover {
				background: #ececec;
				cursor: pointer;
			}
		}

		.emojis:after {
			content: "";
			flex: auto;
		}
	}
}
</style>

<template>
	<div v-if="publication" class="comment-box">
		<Mentionable
			:keys="['@']"
			:items="mentionList"
			insert-space
		>
			<v-textarea
				:id="`comment-input-${this.publication.id}`"
				outlined hide-details="auto"
				v-model="comment" name="comment"
				prepend-inner-icon="mdi-comment-outline"
				placeholder="Give your thoughts..."
				@change="$emit('change', $event)"
				@keyup="$emit('keyup', $event)"
				@input="$emit('input', $event)"
				@focus="pickerColor = 'primary'"
				@blur="pickerColor = 'grey'" class="full-width"
				:error-messages="formErrors['comment']"
				autofocus
			/>
			<template #no-result>
				<div class="dim">
					Hmm...no peoples to mention.
				</div>
			</template>

			<template #item-@="{ item }">
				<div class="user">
					{{ item.value }}
					<span class="dim">
						({{ item.name }})
					</span>
				</div>
			</template>

		</Mentionable>
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
			<v-btn color="primary"
				class="mt-2" v-if="comment"
				@click="addComment"
			>
				Add Comment
			</v-btn>
		</v-fab-transition>
	</div>
</template>

<script>
import EmojiPicker from "vue-emoji-picker";
import PostMixin from "@/mixin/PostMixin.js";
import { Mentionable } from "vue-mention"

export default {
	name: "CommentField",
	mixins: [PostMixin],
	components: {
		EmojiPicker,
		Mentionable
	},
	props: {
		publication: {type: Object, default: () => {}},
		reply: {type: Object, default: () => {}}
	},
	data: () => ({
		search: "",
		comment: "",
		pickerColor: "grey",
		mentionList: []
	}),
	created() {
		this.$axios.get("mention-list/")
			.then(res => {
				console.log(res)
				this.mentionList = res
			})
	},
	methods: {
		addComment() {
			this.post(
				this.$util.format(this.$urls.comment.add, this.publication.id),
				{ comment: this.comment }
			).then(() => {
				if(this.success) {
					this.$emit("init")
					this.comment = null
				}
			})
		},
		insert(emoji) {
			const commentTextarea = document.querySelector(`#comment-input-${this.publication.id}`)
			if (commentTextarea) {
				const cursorPosition = commentTextarea.selectionStart
				if (cursorPosition === this.comment.length) {
					this.comment += emoji
				} else {
					const firstPart = this.comment.substring(0, cursorPosition)
					const secondPart = this.comment.substring(cursorPosition, this.comment.length)
					this.comment = firstPart + emoji + secondPart
				}
			}
		},
	}
}
</script>
<style>
.dim {
	color: #666;
}

.tooltip {
	display: block !important;
	z-index: 10000;
}

.tooltip .tooltip-inner {
	background: black;
	color: white;
	border-radius: 16px;
	padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
	width: 0;
	height: 0;
	border-style: solid;
	position: absolute;
	margin: 5px;
	border-color: black;
	z-index: 1;
}

.tooltip[x-placement^="top"] {
	margin-bottom: 5px;
	margin-left: 40px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
	border-width: 5px 5px 0 5px;
	border-left-color: transparent !important;
	border-right-color: transparent !important;
	border-bottom-color: transparent !important;
	bottom: -5px;
	left: calc(50% - 5px);
	margin-top: 0;
	margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
	margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
	border-width: 0 5px 5px 5px;
	border-left-color: transparent !important;
	border-right-color: transparent !important;
	border-top-color: transparent !important;
	top: -5px;
	left: calc(50% - 5px);
	margin-top: 0;
	margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
	margin-left: 15px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
	border-width: 5px 5px 5px 0;
	border-left-color: transparent !important;
	border-top-color: transparent !important;
	border-bottom-color: transparent !important;
	left: -5px;
	top: calc(50% - 5px);
	margin-left: 0;
	margin-right: 0;
}

.tooltip[x-placement^="left"] {
	margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
	border-width: 5px 0 5px 5px;
	border-top-color: transparent !important;
	border-right-color: transparent !important;
	border-bottom-color: transparent !important;
	right: -5px;
	top: calc(50% - 5px);
	margin-left: 0;
	margin-right: 0;
}

.tooltip.popover .popover-inner {
	background: #f9f9f9;
	color: black;
	padding: 12px;
	border-radius: 5px;
	box-shadow: 0 5px 12px rgba(0, 0, 0, .1);
}

.tooltip.popover .popover-arrow {
	border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
	visibility: hidden;
	opacity: 0;
	transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
	visibility: visible;
	opacity: 1;
	transition: opacity .15s;
}

.mention-item {
	padding: 4px 10px;
	border-radius: 4px;
}

.mention-selected {
	background: rgb(192, 250, 153);
}
</style>
<style lang="scss" scoped>
.comment-box {
	position: relative;
	.comment-input {
		border-radius: 4px;
	}
	.clear-button {
		position:absolute;
		right: 7px !important;
		top: 81px !important;
	}
	.comment-btn {
		position: absolute;
		top: 44px !important;
		right: 4px !important;
	}
	.invoker {
		position:absolute;
		right: 7px; top: 7px;
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

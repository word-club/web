<template>
	<v-card width="100%"
		flat tile
	>
		<div class="comment-label">
			Add your comment
		</div>
		<bubble-menu
			v-if="editor"
			class="bubble-menu"
			:tippy-options="{ duration: 100 }"
			:editor="editor"
		>
			<button :class="{ 'is-active': editor.isActive('bold') }"
				@click="editor.chain().focus().toggleBold().run()"
			>
				Bold
			</button>
			<button :class="{ 'is-active': editor.isActive('italic') }"
				@click="editor.chain().focus().toggleItalic().run()"
			>
				Italic
			</button>
			<button :class="{ 'is-active': editor.isActive('strike') }"
				@click="editor.chain().focus().toggleStrike().run()"
			>
				Strike
			</button>
			<button :class="{ 'is-active': editor.isActive('code') }"
				@click="editor.chain().focus().toggleCode().run()"
			>
				Code
			</button>
		</bubble-menu>
		<floating-menu
			v-if="editor"
			class="floating-menu"
			:tippy-options="{ duration: 100 }"
			:editor="editor"
		>
			<button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
				@click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
			>
				H1
			</button>
			<button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
				@click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
			>
				H2
			</button>
			<button :class="{ 'is-active': editor.isActive('bulletList') }"
				@click="editor.chain().focus().toggleBulletList().run()"
			>
				List
			</button>
			<button :class="{ 'is-active': editor.isActive('blockquote') }"
				@click="editor.chain().focus().toggleBlockquote().run()"
			>
				Quote
			</button>
			<button @click="addImage">
				Image
			</button>
		</floating-menu>
		<editor-content :editor="editor"
			class="comment-editor"
		/>
		<v-card-actions class="pt-0 px-5">
			<v-spacer />
			<v-btn rounded small
				depressed color="grey"
				dark @click="addComment"
			>
				<div class="font-weight-bold">
					Comment
				</div>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-2"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Image from "@tiptap/extension-image"
import Typography from "@tiptap/extension-typography"
import { SmilieReplacer } from "./SmilieReplacer.ts"

export default {
	name: "CommentField",
	components: {
		EditorContent,
		BubbleMenu,
		FloatingMenu,
	},
	props: {
		reply: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			editor: null,
			label: false
		}
	},
	mounted() {
		this.editor = new Editor({
			content: "",
			extensions: [
				StarterKit,
				Typography,
				SmilieReplacer,
				Placeholder.configure({
					placeholder: "Give your thoughts..."
				}),
				Image.configure({
					HTMLAttributes: {
						class: "publication-image-url",
					},
				}),
			],
		})
	},
	beforeUnmount() {
		this.editor.destroy()
	},
	methods: {
		addComment() {
			console.log(this.editor.getJSON())
		},
		addImage() {
			const url = window.prompt("URL")

			if (url) {
				this.editor.chain().focus().setImage({ src: url }).run()
			}
		},
	},
}
</script>
<style lang="scss">
.comment-label {
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	left: 25px;
	top: 5px;
	background-color: white;
	z-index: 1;
	padding: 0 4px;
}
.comment-editor {
	padding: 12px;
	.ProseMirror {
		min-height: 150px;
		border: 1px solid grey;
		border-radius: 4px;
		padding: 6px 0;
		> * + * {
			margin-top: 0.75em;
		}
		li > p {
			margin: 0;
			padding: 0 !important;
		}
		li::marker {
			font-size: large;
			color: #adb5bd;
		}

		h1, h2, p {
			padding: 0 1rem;
		}
		blockquote {
			margin: 1rem;
			p {
				padding: 0;
				color: grey;
				ul {
					li {
						p {
							color: black;
						}
					}
				}
			}
		}
		p {
			margin: 6px 0;
		}
		h1, h2 {
			margin: 10px 0;
		}

		ul, ol {
			padding: 0 2rem;
		}

		blockquote {
			padding-left: 1rem;
			border-left: 2px solid rgba(#0D0D0D, 0.1);
		}
	}
}

.bubble-menu {
  display: flex;
  background-color: #0D0D0D;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
	transition: ease-in-out;
  display: flex;
  background-color: #0D0D0D10;
  padding: 0.2rem;
	margin-left: 150px;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty::before {
	content: attr(data-placeholder);
	float: left;
	color: #adb5bd;
	pointer-events: none;
	height: 0;
}
.publication-image-url {
	height: auto;
	max-width: 100%;
	margin: 10px 0;
	//object-fit: contain;
	//overflow: hidden;
}
</style>

<template>
	<v-card
		class="full-width"
		flat tile
	>
		<div
			class="tiptap-label"
		>
			Comment
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
		</bubble-menu>
		<floating-menu
			v-if="editor"
			class="floating-menu"
			:tippy-options="{ duration: 100 }"
			:editor="editor"
		>
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
			class="tiptap-editor"
		/>
	</v-card>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-2"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Image from "@tiptap/extension-image"
import Typography from "@tiptap/extension-typography"
import { SmilieReplacer } from "@/tiptap/SmilieReplacer.js"

export default {
	name: "TipTapEditor",
	components: {
		EditorContent,
		BubbleMenu,
		FloatingMenu,
	},
	props: {
		publication: {
			default: null,
			required: false,
		},
		comment: {
			default: null,
			required: false,
		},
		reply: {
			default: false,
			required: false,
			type: Boolean
		}
	},
	emits: ["update"],
	data() {
		return {
			editor: null,
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
					placeholder: "Add your comment"
				}),
				Image.configure({
					HTMLAttributes: {
						class: "publication-image-url",
					},
				}),
			],
			onUpdate: () => {
				this.$emit("update", this.editor.getHTML())
			}
		})
	},
	beforeUnmount() {
		this.editor.destroy()
	},
	methods: {
		addImage() {
			const url = window.prompt("Add an image URL")

			if (url) {
				this.editor.chain().focus().setImage({ src: url }).run()
			}
		},
	},
}
</script>
<style lang="scss">
@use "sass:math";

.tiptap-label {
	position: absolute;
	font-size: 12px;
	font-weight: bold;
	left: 25px; top: 5px;
	background-color: white;
	z-index: 1; padding: 0 4px;
}
.tiptap-editor {
	padding: 12px;
	.ProseMirror-focused {
		border: 2px solid var(--primary) !important;
	}
	.ProseMirror {
		min-height: 150px;
		border: 1px solid grey;
		border-radius: 4px;
		padding: 6px 0;
		> * + * {
			margin-top: 1em;
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
	background-color: rgb(227, 227, 227);
	padding: 0 5px;
	border-radius: 4px;
	box-shadow: 1px 4px 6px #dedede;


	button {
		border: none;
		font-size: 1rem;
		font-weight: 500;
		padding: 0 5px;
		opacity: 0.6;
		height: 30px;
		&:hover,
		&.is-active {
			opacity: 1;
		}
	}
}

.floating-menu {
	display: flex;
	background-color: rgb(227, 227, 227);
	padding: 0 5px;
	margin-left: 110px;
	border-radius: 4px;
	box-shadow: 1px 4px 6px #dedede;
	button {
		border: none;
		background: none;
		font-size: 1rem;
		font-weight: 500;
		opacity: 0.6;
		height: 30px;
		padding: 0 5px;

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
}
</style>

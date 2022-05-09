<template>
	<v-card tile flat>
		<v-card-text v-for="(block, index) in content.blocks"
			:key="index" class="px-2 py-0"
		>
			<template
				v-if="block.type === 'header'"
			>
				<h1 v-if="block.data.level === 3"
					:class="{
						'text-left': checkAlignmentTune(block.tunes, 'left'),
						'text-right': checkAlignmentTune(block.tunes, 'right'),
						'text-center': checkAlignmentTune(block.tunes, 'center'),
					}"
				>
					{{block.data.text}}
				</h1>
				<h2 v-else
					:class="{
						'text-left': checkAlignmentTune(block.tunes, 'left'),
						'text-right': checkAlignmentTune(block.tunes, 'right'),
						'text-center': checkAlignmentTune(block.tunes, 'center'),
					}"
				>
					{{block.data.text}}
				</h2>
			</template>
			<template
				v-if="block.type === 'image'"
			>

				<card-img height="300" :src="block.data.file.url" class="rounded-t" />
				<v-card outlined v-if="block.data.caption" class="rounded-t-0">
					<v-card-subtitle class="px16 weight-500 grey--text text--darken-2">{{block.data.caption}}</v-card-subtitle>
				</v-card>
			</template>
			<template
				v-if="block.type === 'paragraph'"
			>
				<p v-html="block.data.text" class="px16"
					:class="{
						'text-left': checkAlignmentTune(block.tunes, 'left'),
						'text-right': checkAlignmentTune(block.tunes, 'right'),
						'text-center': checkAlignmentTune(block.tunes, 'center'),
					}"
				/>
			</template>
			<template v-if="block.type === 'embed'">
				<v-card
					v-if="block.data.service === 'twitter'"
					class="mx-auto" flat
				>
					<Tweet :id="block.data.source.split('/').slice(-1)[0]" />
				</v-card>
				<v-card v-else-if="block.data.service === 'youtube'" width="100%" height="320">
					<iframe :src="block.data.embed" height="320" width="100%" allowfullscreen class="wc-iframe" />
				</v-card>
			</template>
			<template
				v-if="block.type === 'quote'"
			>
				<div class="quote-item">
					<div class="quote-text">{{block.data.text}}</div>
					<div class="quote-caption">{{block.data.caption}}</div>
				</div>
			</template>
			<template
				v-if="block.type === 'list'"
			>
				<v-list dense class="pa-0">
					<v-list-item v-for="(item, index) in block.data.items"
						:key="index"
					>
						<v-list-item-icon>
							<v-icon size="8">mdi-circle</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{item}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</template>
		</v-card-text>
	</v-card>
</template>

<script>
import {Tweet } from "vue-tweet-embed"

export default {
	name: "ItemContent",
	components: {
		Tweet,
	},
	data: () => ({
		iframes: [],
	}),
	props: {
		content: {type:Object, default: () => {}},
	},
	methods: {
		checkAlignmentTune(tunes, alignment) {
			if (tunes) {
				const alignmentTune = tunes.alignmentTune
				if (alignmentTune) return alignmentTune.alignment === alignment
				else return false
			} return false
		}
	}
}
</script>
<style lang="scss">
.wc-iframe {
	border: none;
}
.cdx-marker {
	background: grey;
	color: white;
	border-radius: 2px;
	padding-left: 2px;
	padding-right: 2px;
}
.quote-item {
	border-left: 3px solid #2196F3;
	padding: 10px 20px;
	background: #d6effb;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	.quote-text {
		font-size: 1.3rem;
		padding: 20px 0;
	}
	.quote-caption {
		font-size: .875rem;
		font-weight: 500;
		padding-left: 20px;
		position: relative;
	}
	.quote-caption::before {
		position: absolute;
		content: '';
		top: 11px;
		left: 0;
		width: 10px;
		height: 2px;
		background: #2d7696;
	}
}
</style>

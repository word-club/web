<template>
	<div class="submit-tab">
		<div v-for="(item, index) in tabItems"
			:key="index"
			class="submit-tab-item"
			:class="{
				'submit-tab-item-active': item.active,
				'submit-tab-item-disabled': item.disabled
			}"
			@click="setActiveTab(item)"
		>
			<v-icon class="submit-tab-item-icon"
				:color="item.active ? theme.color : ''"
			>
				{{ item.icon }}
			</v-icon>
			<div class="submit-tab-item-title"
				v-if="$vuetify.breakpoint.width > 300"
				:class="item.active ? `${theme.color}--text`: ''"
			>
				{{ item.title }}
			</div>
			<v-scale-transition>
				<v-card
					flat :color="theme.color" v-if="item.active"
					class="submit-tab-item-active-line rounded-b-0 rounded-tl-xl rounded-tr-xl"
				/>
			</v-scale-transition>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "SubmitTab",
	props: {
		payload: {type: Object, default: () => {}},
		theme: {type: Object, default: () => ({color: "primary"})}
	},
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		}),
		publicationTypes() {
			return this.$constants.PUBLICATION_TYPE
		},
		tabItems() {
			return [
				{
					type: "editor", title: "Post", icon: "mdi-post",
					active: this.payload.type === this.publicationTypes.EDITOR,
					to: {name: "Submit", params: {type: this.publicationTypes.EDITOR}},
					disabled: this.inProgress && this.inProgress.type !== this.publicationTypes.EDITOR
				},
				{
					type: "media", title: "Media", icon: "mdi-image-size-select-actual",
					active: this.payload.type === this.publicationTypes.MEDIA,
					to: {name: "Submit", params: {type: this.publicationTypes.MEDIA}},
					disabled: this.inProgress && this.inProgress.type !== this.publicationTypes.MEDIA
				},
				{
					type: "link", title: "Link", icon: "mdi-link-variant",
					active: this.payload.type === this.publicationTypes.LINK,
					to: {name: "Submit", params: {type: this.publicationTypes.LINK}},
					disabled: this.inProgress && this.inProgress.type !== this.publicationTypes.LINK
				},
				{
					type: "poll", title: "Poll", icon: "mdi-chart-box-outline",
					disabled: true, active: false,
					to: {name: "Submit", params: {type: this.publicationTypes.POLL}},
				},
			]
		},
	},
	methods: {
		setActiveTab(item) {
			this.$emit("setType", item.type)
			this.$router.push(item.to)
		},
	}
}
</script>

<style scoped lang="scss">
.submit-tab {
	display: flex;
	.submit-tab-item:nth-child(1) {
		border-top-left-radius: 4px;
		border-left: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(2) {
		border-left: 1px solid #bbbbbb;
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(3) {
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:nth-child(4) {
		border-top-right-radius: 4px;
		border-right: 1px solid #bbbbbb;
	}
	.submit-tab-item:hover {
		background-color: #e7e7e7;
	}
	.submit-tab-item-active {
		border-bottom: none !important;
	}
	.submit-tab-item-disabled {
		pointer-events: none;
		cursor: not-allowed !important;
	}
	.submit-tab-item {
		position: relative;
		border-top: 1px solid #bbbbbb;
		border-bottom: 1px solid #bbbbbb;
		cursor: pointer;
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 55px;
		.submit-tab-item-active-line {
			position: absolute;
			width: 100%;
			height: 4px;
			bottom: 0;
		}
		.submit-tab-item-icon {
			color: grey;
		}
		.submit-tab-item-title {
			padding: 0 6px;
			color: grey;
			font-weight: 600;
		}
	}
}
</style>

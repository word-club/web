<template>
	<v-card class="mx-auto transparent"
		max-width="750"
		flat
	>
		<v-card-text />
		<v-card-title class="px-0 pb-3">
			<div>Create post</div>
			<v-spacer />
			<v-btn
				text rounded
				color="primary"
			>
				<span class="px14">DRAFTS</span>
				<span class="ma-1 pa-1 primary white--text rounded">7</span>
			</v-btn>
		</v-card-title>
		<v-divider />
		<v-row class="ma-0 pa-0">
			<v-col cols="6"
				class="px-0"
			>
				<community-autocomplete
					v-model="post.community"
					:errors="errors"
				/>
			</v-col>
			<v-col cols="12"
				class="pa-0"
			>
				<v-card
					elevation="0"
					color="grey lighten-4"
					width="100%"
					class="pa-0"
				>
					<div class="submit-tab">
						<div v-for="(item, index) in items"
							:key="index"
							class="submit-tab-item"
							:class="{
								'submit-tab-item-active': item.active
							}"
							@click="setActiveTab(item)"
						>
							<v-icon class="submit-tab-item-icon">
								{{ item.icon }}
							</v-icon>
							<div class="submit-tab-item-title">
								{{ item.title }}
							</div>
							<v-scale-transition>
								<div
									v-if="item.active"
									class="submit-tab-item-active-line"
								/>
							</v-scale-transition>
						</div>
					</div>
					<v-card flat
						class="rounded-t-0"
					>
						<v-row class="ma-0 pa-0">
							<v-col cols="12">
								<text-field
									v-model="post.title"
									label="Title"
									name="title"
									icon="mdi-format-title"
									:errors="errors"
								/>
							</v-col>
							<v-scale-transition>
								<v-col v-if="files.length"
									cols="12"
								>
									<v-row
										class="ma-0 pa-0"
									>
										<v-col v-for="(item, index) in fileUrls"
											:key="index"
											cols="2"
										>
											<card-image max-width="200"
												contain
												height="100"
												:src="item"
											>
												<v-btn class="clear-btn"
													icon small
													@click="removeFile(item, index)"
												>
													<v-icon small>
														mdi-close
													</v-icon>
												</v-btn>
											</card-image>
										</v-col>
									</v-row>
								</v-col>
							</v-scale-transition>
							<v-fade-transition>
								<v-col
									v-if="activeTabItem.title === 'Post'"
									cols="12 pa-0"
								>
									<tip-tap-editor placeholder="Give your thoughts..." />
								</v-col>
								<v-col v-else-if="activeTabItem.title === 'Images/Videos'"
									cols="12"
									@dragover.prevent @drop.prevent
								>
									<v-card
										:min-height="files.length ? 100 : 200" flat
										class="d-flex align-center justify-center primary-border"
										@drop="dragFile"
									>
										<input
											v-show="false"
											id="file-input"
											ref="fileInput"
											class="file-input"
											type="file"
											multiple
											accept="image/*,.webm,.mp4,.mpeg,.flv,.mov,.MOV"
											@change="fileInputChanged"
										>
										<div class="weight-500 primary--text">
											Drag and drop images or
										</div>
										<div class="px-2">
											<v-btn outlined
												color="primary"
												rounded class="weight-700"
												@click="$refs.fileInput.click()"
											>
												Upload
											</v-btn>
										</div>
									</v-card>
								</v-col>
								<v-col
									v-else-if="activeTabItem.title === 'Link'"
									cols="12"
								>
									<text-field
										v-model="post.link"
										label="Link Url"
										icon="mdi-link"
										name="link" :dense="false"
										:errors="errors"
									/>
								</v-col>
								<v-col
									v-else
								>
									<v-card flat
										class="primary-border"
									>
										<v-card-title>Poll Submit Center</v-card-title>
									</v-card>
								</v-col>
							</v-fade-transition>
							<v-col cols="12">
								<v-combobox
									v-model="post.tags"
									:items="hashtags.results"
									label="Select hashtags or create a new one"
									prepend-inner-icon="mdi-tag-outline"
									multiple clearable
									chips small-chips
									deletable-chips
									outlined dense
									hide-details="auto"
									:error-messages="errors['tag']"
									color="primary"
								/>
							</v-col>
						</v-row>
						<v-divider class="mx-2" />
						<v-card-actions>
							<v-spacer />
							<v-btn rounded
								depressed color="grey lighten-2"
								class="weight-600 grey--text text--darken-3"
							>
								Save as Draft
							</v-btn>
							<v-btn rounded
								dark depressed
								color="primary"
								class="weight-600"
							>
								Publish
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-card>
			</v-col>
		</v-row>
		<v-card-text />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import CardImage from "@/components/utils/CardImage.vue";
import TipTapEditor from "@/components/utils/TiptapEditor.vue";

export default {
	name: "Submit",
	components: {
		TipTapEditor,
		CardImage,
		TextField: () => import("@/components/form/_text_field.vue"),
		CommunityAutocomplete: () => import("@/components/form/_community_autocomplete.vue")
	},
	props: {},
	data: () => ({
		tab: null,
		items: [
			{title: "Post", icon: "mdi-post", active: true},
			{title: "Images/Videos", icon: "mdi-image-size-select-actual", active: false},
			{title: "Link", icon: "mdi-link-variant", active: false},
			{title: "Poll", icon: "mdi-chart-box-outline", active: false},
		],
		post: {
			community: null,
			title: null,
			link: null,
			tags: [],
		},
		files: [],
		fileUrls: [],
		totalSize: null
	}),
	computed: {
		...mapGetters({
			errors: "publication/formErrors",
			tagFormErrors: "hashtag/formErrorList",
			hashtags: "hashtag/list"
		}),
		activeTabItem() {
			return this.items.find(item => item.active === true)
		}
	},
	methods: {
		removeFile(item, index) {
			this.files.splice(index, 1)
			this.fileUrls.splice(index, 1)
			this.totalSize -= item.size
		},
		addTargetFilesToList(filesList) {
			filesList.forEach(file => {
				this.files.push(file)
				this.fileUrls.push(URL.createObjectURL(file))
				this.totalSize += file.size
			})
		},
		fileInputChanged(e) {
			const filesList = Array.from(e.target.files)
			this.addTargetFilesToList(filesList)
		},
		setActiveTab(item) {
			this.items.forEach(item => {
				item.active = false
			})
			item.active = true
		},
		dragFile(e) {
			const filesList = Array.from(e.dataTransfer.files)
			this.addTargetFilesToList(filesList)
		}
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
		.submit-tab-item-icon { color: var(--primary) !important; }
		.submit-tab-item-title { color : var(--primary) !important; }
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
			background-color: var(--primary);
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
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
.clear-btn {
	position: absolute;
	right: 4px;
	top: 4px;
	z-index: 1;
}
.primary-border {
	border: 2px solid var(--primary);
	background-color: whitesmoke;
}
</style>

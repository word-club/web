<template>
	<div>
		<v-scale-transition>
			<v-col v-if="files.length"
				cols="12"
			>
				<v-row
					class="ma-0 pa-0"
				>
					<v-col v-for="(item, index) in fileUrls"
						:key="index"
						cols="4"
					>
						<card-img max-width="400"
							contain
							height="150"
							:src="item"
						>
							<div class="d-flex">
								<v-btn class="clear-btn"
									icon color="error"
									@click="removeFile(item, index)"
								>
									<v-icon>mdi-close-circle</v-icon>
								</v-btn>
								<v-btn class="post-btn"
									icon color="success"
									@click="postImage(item, index)"
									:disabled="!payload.title"
								>
									<v-icon>mdi-check-circle</v-icon>
								</v-btn>
							</div>
						</card-img>
					</v-col>
				</v-row>
			</v-col>
		</v-scale-transition>
		<v-card
			:min-height="files.length ? 100 : 200" flat
			class="d-flex align-center justify-center flex-wrap"
			:class="theme.color+'-border'"
			@drop="dragFile"
		>
			<input
				v-show="false"
				id="file-input"
				ref="fileInput"
				class="file-input"
				type="file"
				multiple
				accept="image/*"
				@change="fileInputChanged"
			>
			<div class="weight-500 text-center"
				:class="theme.color + '--text'"
			>
				Drag and drop images or
			</div>
			<div class="px-2">
				<v-btn outlined
					:color="theme.color"
					rounded class="weight-700"
					@click="$refs.fileInput.click()"
				>
					Upload
				</v-btn>
			</div>
		</v-card>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import PostMixin from "@/mixin/PostMixin.js";
import FilesMixin from "@/mixin/FilesMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "SubmitMedia",
	mixins: [PostMixin, FilesMixin, Snack],
	props: {
		theme: {type: Object, required: true},
		payload: {type: Object, required: true},
	},
	computed: {
		...mapGetters({
			inProgress: "publication/inProgress"
		})
	},
	methods: {
		postImage(item, index) {
			const id = this.inProgress.id
			const url = this.$util.format(this.$urls.publication.addImage, id)
			const fd = this.$helper.createFormData({image: this.files[index]})
			this.post(url, fd).then(() => {
				if (this.success) {
					this.removeFile(item, index)
					this.$emit("refresh")
				} else {
					this.openSnack("Sorry, something went wrong.")
				}
			})
		},
	}
}
</script>

<style scoped lang="scss">

</style>

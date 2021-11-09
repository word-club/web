<template>
	<v-combobox
		v-model="tags"
		outlined :label="label"
		prepend-inner-icon="mdi-pound" multiple
		:items="hashtags"
		item-value="id"
		item-text="tag"
	>
		<template v-slot:selection="data">
			<v-chip
				:key="JSON.stringify(data.item)"
				v-bind="data.attrs"
				:input-value="data.selected"
				:disabled="data.disabled"
				@click:close="data.parent.selectItem(data.item)"
				close
			>
				<v-avatar
					class="accent white--text"
					left size="10"
					v-text="data.item.tag.slice(0, 1).toUpperCase()"
				/>
				<span class="weight-500 grey--text text--darken-2">{{ data.item.tag }}</span>
			</v-chip>
		</template>
	</v-combobox>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "TagField",
	props: {
		label: {type: String, default: "Add hashtags"},
	},
	data: () => ({
		tags: []
	}),
	computed: {
		...mapGetters({
			hashtags: "hashtag/list"
		})
	},
	tags(val, prev) {
		if (val.length === prev.length) return

		this.tags = val.map(v => {
			if (typeof v === "string") {
				v = {
					text: v,
					color: this.colors[this.nonce - 1],
				}

				this.items.push(v)
				// call hashtag post api here

				this.nonce++
			}

			return v
		})
	},
}
</script>

<style scoped lang="scss">

</style>

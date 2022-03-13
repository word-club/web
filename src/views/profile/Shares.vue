<template>
	<div>
		<v-card v-if="!shares.length"
			height="86vh" flat
		>
			<v-card-title class="empty-content">
				hmm... looks like you haven't shared anything yet
			</v-card-title>
		</v-card>
		<div v-for="item in shares"
			:key="item.id"
			class="pb-4"
		>
			<v-card outlined>
				<v-card-title class="share-title">
					<div>{{item.title}}</div>
					<v-menu bottom nudge-bottom="40" nudge-left="60">
						<template #activator="{on, attrs}">
							<v-btn icon
								v-on="on"
								v-bind="attrs"
							>
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</template>
						<v-list dense>
							<v-list-item>
								<v-list-item-icon><v-icon color="primary">mdi-pencil</v-icon></v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>
										Edit
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<v-divider />
							<v-list-item>
								<v-list-item-icon><v-icon color="error">mdi-delete</v-icon></v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title>
										Delete
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-card-title>
				<v-divider />
				<v-card-text>
					<publication-instance
						v-if="item.publication"
						:publication="item.publication"
					/>
					<comment-instance v-else :comment="item.comment" />
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Shares",
	computed: {
		...mapGetters({
			user: "user/inView"
		}),
		shares() {
			if (!this.user && !this.user.my_shares) return []
			return this.user.my_shares
		},
	}
}
</script>

<style scoped lang="scss">
.share-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>

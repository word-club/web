<template>
	<v-card outlined>
		<v-card-title class="about-community"
			:class="community.theme.color"
		>
			<div class="about-community--title">
				About Community
			</div>
			<v-menu bottom nudge-bottom="30">
				<template #activator="{on, attrs}">
					<v-btn
						v-if="isCommunityManager"
						icon small dark
						v-bind="attrs" v-on="on"

					>
						<v-icon>mdi-dots-horizontal</v-icon>
					</v-btn>
				</template>
				<v-list dense outlined>
					<v-list-item
						@click="$router.push({name: 'Community MOD Settings Reports'})"
					>
						<v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>MOD Tools</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-card-title>
		<v-card-text class="pa-3">
			<div class="about-community--quote"
				v-if="community.description"
			>
				{{ community.description }}
			</div>
			<text-area
				v-else
				v-model="description"
				name="description"
				label="Community Quote"
				icon="mdi-format-quote-close"
				counter="256"
			/>
			<v-btn block
				dark
				v-if="description"
				@click="patchQuote"
				:color="community.theme.color"
			>
				Update
			</v-btn>
		</v-card-text>
		<v-card-text class="d-flex align-center pa-3 weight-500 justify-space-between">
			<div>
				<div class="px18">
					{{ community.subscriptions.subscribers }}
				</div>
				<div class="px14">
					{{ community.theme.to_call_subscriber }}
				</div>
			</div>
			<div class="px-1" />
			<div>
				<div class="px18">
					{{ community.subscriptions.notification_disables }}
				</div>
				<div class="px14">
					{{ community.theme.state_after_subscription }}
				</div>
			</div>
		</v-card-text>
		<v-divider />
		<v-card-text class="pa-3 d-flex align-center">
			<v-icon>
				mdi-routes-clock
			</v-icon>
			<div class="px-2 px16 weight-500">
				Created {{ $moment(community.date_of_registration).fromNow() }}
			</div>
		</v-card-text>
		<v-card-text class="pa-3">
			<v-btn
				block rounded
				:color="community.theme.color"
				depressed dark
			>
				Create Post
			</v-btn>
		</v-card-text>
		<v-divider />
		<v-card-text>
			<v-btn
				depressed small
				rounded block
				@click="options = !options"
			>
				<template #default>
					<div class="d-flex align-center justify-space-between px-4"
						style="width: 100%"
					>
						<div>Community options</div>
						<v-icon>mdi-chevron-down</v-icon>
					</div>
				</template>
			</v-btn>
		</v-card-text>
		<v-slide-y-transition>
			<v-card-actions v-if="options">
				<v-card outlined class="full-width" rounded="lg">
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-eye-outline</v-icon></v-list-item-icon>
						<v-list-item-content><v-list-item-title>Community Theme</v-list-item-title></v-list-item-content>
						<v-list-item-action>
							<v-switch :color="community.theme.color" v-model="seeTheme" />
						</v-list-item-action>
					</v-list-item>
				</v-card>
			</v-card-actions>
		</v-slide-y-transition>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import UserRoles from "@/mixin/UserRoles.js";
import PatchMixin from "@/mixin/PatchMixin.js";
import Snack from "@/mixin/Snack.js";

export default {
	name: "AboutCommunity",
	mixins: [UserRoles, PatchMixin, Snack],
	data: () => ({
		description: null,
		options: false,
		seeTheme: true
	}),
	computed: {
		...mapGetters({
			community: "community/inView",
			currentUser: "user/current"
		})
	},
	methods: {
		patchQuote() {
			this.patch(this.$util.format(this.$urls.community.detail, this.community.id), {
				description: this.description
			}).then(() => {
				if (this.patchSuccess) this.openSuccessSnack("Community quote updated!")
				else this.openSnack("Community quote update failed.")
			})
		}
	}
}
</script>

<style scoped lang="scss">
.about-community {
	padding: 6px 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: whitesmoke;
	&--title {
		font-size: 16px;
		font-weight: 500;
	}
}
</style>

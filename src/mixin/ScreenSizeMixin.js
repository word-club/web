const ScreenSizeMixin = {
	computed: {
		xs() {
			return this.$vuetify.breakpoint.xs
		},
		md() {
			return this.$vuetify.breakpoint.md
		},
		smAndDown() {
			return this.$vuetify.breakpoint.smAndDown
		},
		smAndUp() {
			return this.$vuetify.breakpoint.smAndUp
		},
		mdAndUp() {
			return this.$vuetify.breakpoint.mdAndUp
		},
		lgAndUp() {
			return this.$vuetify.breakpoint.lgAndUp
		},
		viewportWidth() {
			return this.$vuetify.breakpoint.width
		}
	},
	methods: {}
}

export default ScreenSizeMixin

const ScreenSizeMixin = {
	computed: {
		xs() {
			return this.$vuetify.breakpoint.xs
		},
		sm() {
			return this.$vuetify.breakpoint.sm
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

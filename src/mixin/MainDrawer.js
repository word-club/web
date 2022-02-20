import {mapMutations} from "vuex";

const MainDrawer = {
	computed: {
		mainDrawer: {
			get() {
				return this.$store.getters.mainDrawerState
			},
			set(v) {
				this.SET_DRAWER_STATE(v)
			}
		},
	},
	methods: {
		...mapMutations(["SET_DRAWER_STATE"]),
	},
}

export default MainDrawer

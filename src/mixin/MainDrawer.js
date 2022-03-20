import {mapMutations} from "vuex";

const MainDrawer = {
	computed: {
		drawer: {
			get() {
				return this.$store.getters.drawerState
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

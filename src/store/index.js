import Vue from "vue"
import Vuex from "vuex"

import snack from "@/store/modules/snack"
import community from "@/store/modules/community"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	  snack,
		community
	}
})

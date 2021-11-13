import Vue from "vue"
import Vuex from "vuex"

import snack from "@/store/modules/snack"
import community from "@/store/modules/community"
import publication from "@/store/modules/publication"
import hashtag from "@/store/modules/hashtag"
import user from "@/store/modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loginDialog: false
	},
	getters: {
		loginState: state => state.loginDialog
	},
	mutations: {
		SET_LOGIN_STATE: (state, value) => state.loginDialog = value
	},
	actions: {
		setLoginState({commit}, value) {
			commit("SET_LOGIN_STATE", value)
		}
	},
	modules: {
		snack,
		community,
		publication,
		hashtag,
		user
	}
})

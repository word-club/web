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
		loginDialog: false,
		draftDialog: false,
	},
	getters: {
		loginState: state => state.loginDialog,
		draftState: state => state.draftDialog,
	},
	mutations: {
		SET_LOGIN_STATE: (state, value) => state.loginDialog = value,
		SET_DRAFT_STATE: (state, value) => state.draftDialog = value
	},
	actions: {
		setLoginState({commit}, value) {
			commit("SET_LOGIN_STATE", value)
		},
		setDraftState({commit}, value) {
			commit("SET_DRAFT_STATE", value)
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

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
		auth: { state: false, mode: null },
		draftDialog: false,
		ruleDialog: false,
		rule: null,
	},
	getters: {
		authMode: state => state.auth,
		draftState: state => state.draftDialog,
		ruleState: state => state.ruleDialog,
		ruleInEdit: state => state.rule
	},
	mutations: {
		SET_AUTH_MODE: (state, value) => state.auth = value,
		SET_DRAFT_STATE: (state, value) => state.draftDialog = value,
		SET_RULE_STATE: (state, value) => state.ruleDialog = value,
		SET_RULE_IN_EDIT: (state, value) => state.rule = value
	},
	actions: {
		setAuthMode({commit}, value) {
			commit("SET_AUTH_MODE", value)
		},
		setDraftState({commit}, value) {
			commit("SET_DRAFT_STATE", value)
		},
		setRuleState({commit}, value) {
			commit("SET_RULE_STATE", value)
		},
		setRuleInEdit({commit}, value) {
			commit("SET_RULE_IN_EDIT", value)
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

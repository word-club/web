import Vue from "vue"
import Vuex from "vuex"

import snack from "@/store/modules/snack"
import community from "@/store/modules/community"
import publication from "@/store/modules/publication"
import user from "@/store/modules/user"
import comment from "@/store/modules/comment"
import confirmDialog from "@/store/modules/confirmDialog"
import dialog from "@/store/modules/dialog.js"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		auth: { state: false, mode: null, next: null },
		draftDialog: false,
		ruleDialog: false,
		rule: null,
		top: {}, sidebar: null,
		drawer: null,
		notFound: {dialog: false, status: null},

	},
	getters: {
		sidebarState: state => state.sidebar,
		drawerState: state => state.drawer,
		topItems: state => state.top,
		authMode: state => state.auth,
		draftState: state => state.draftDialog,
		ruleState: state => state.ruleDialog,
		ruleInEdit: state => state.rule,
		notFoundState: state => state.notFound,
	},
	mutations: {
		SET_AUTH_MODE: (state, value) => state.auth = value,
		SET_DRAFT_STATE: (state, value) => state.draftDialog = value,
		SET_RULE_STATE: (state, value) => state.ruleDialog = value,
		SET_RULE_IN_EDIT: (state, value) => state.rule = value,
		SET_TOP: (state, value) => state.top = value,
		SET_SIDEBAR_STATE: (state, value) => state.sidebar = value,
		SET_DRAWER_STATE: (state, value) => state.drawer = value,
		SET_NOT_FOUND: (state, value) => state.notFound = value
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
		},
		setTop({commit}, value) {
			commit("SET_TOP", value)
		},
		setNotFound({commit}, {dialog = false, status = null} = {}) {
			commit("SET_NOT_FOUND", {
				dialog, status
			})
		},
	},
	modules: {
		snack, community,
		publication,
		user, comment,
		confirmDialog,
		dialog
	}
})

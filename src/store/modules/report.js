const state = {
	dialog: false,
	model: null,
	object: null
}

const getters = {
	dialog: state => state.dialog,
	model: state => state.model,
	object: state => state.object
}

const mutations = {
	SET_DIALOG(state, dialog) {
		state.dialog = dialog
	},
	SET_MODEL(state, model) {
		state.model = model
	},
	SET_OBJECT(state, object) {
		state.object = object
	}
}

const actions = {
	clearReport({ commit }) {
		commit("SET_DIALOG", false)
		commit("SET_MODEL", null)
		commit("SET_OBJECT", null)
	},
	setReportInView({ commit }, { model, object }) {
		commit("SET_DIALOG", true)
		commit("SET_MODEL", model)
		commit("SET_OBJECT", object)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

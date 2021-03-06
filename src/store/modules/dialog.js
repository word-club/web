const state = {
	report: false,
	share: false,
	model: null,
	object: null,
	mod: false
}

const getters = {
	report: state => state.report,
	share: state => state.share,
	model: state => state.model,
	object: state => state.object,
	mod: state => state.mod
}

const mutations = {
	SET_REPORT(state, report) {
		state.report = report
	},
	SET_SHARE(state, share) {
		state.share = share
	},
	SET_MODEL(state, model) {
		state.model = model
	},
	SET_OBJECT(state, object) {
		state.object = object
	},
	SET_MOD(state, mod) {
		state.mod = mod
	}
}

const actions = {
	clearDialog({ commit }) {
		commit("SET_REPORT", false)
		commit("SET_SHARE", false)
		commit("SET_MODEL", null)
		commit("SET_OBJECT", null)
		commit("SET_MOD", false)
	},
	setReportInView({ commit }, { model, object }) {
		commit("SET_REPORT", true)
		commit("SET_SHARE", false)
		commit("SET_MODEL", model)
		commit("SET_OBJECT", object)
		commit("SET_MOD", false)
	},
	setShareInView({ commit }, { model, object }) {
		commit("SET_REPORT", false)
		commit("SET_SHARE", true)
		commit("SET_MODEL", model)
		commit("SET_OBJECT", object)
		commit("SET_MOD", false)
	},
	setReportForAdminInView({ commit }, { model, object }) {
		commit("SET_REPORT", true)
		commit("SET_SHARE", false)
		commit("SET_MODEL", model)
		commit("SET_OBJECT", object)
		commit("SET_MOD", true)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

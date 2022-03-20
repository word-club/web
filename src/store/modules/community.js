const state = {
	communities: [],
	toView: null,
	toEdit: null,
	createInProgress: null,
}

const mutations = {
	SET_TO_VIEW: (state, value) => state.toView = value,
	SET_IN_PROGRESS: (state, value) => state.createInProgress = value,
}

const getters = {
	list: state => state.communities,
	inView: state => state.toView,
	toEdit: state => state.toEdit,
	inProgress: state => state.createInProgress,
}

const actions = {
	setInProgress({commit}, value) {
		commit("SET_IN_PROGRESS", value)
	},
	setToView({commit}, value) {
		commit("SET_TO_VIEW", value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

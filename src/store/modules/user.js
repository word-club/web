const state = {
	users: null,
	currentUser: null,
	inView: null,
	inEdit: null
}

const getters = {
	list: state => state.users,
	inView: state => state.inView,
	current: state => state.currentUser,
	inEdit: state => state.inEdit,
}

const mutations = {
	SET_CURRENT_USER: (state, value) => state.currentUser = value,
	SET_TO_VIEW: (state, value) => state.inView = value
}

const actions = {
	setCurrentUser({commit}, value) {
		commit("SET_CURRENT_USER", value)
	},
	setInView({commit}, value) {
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

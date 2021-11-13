const state = {
	users: null,
	currentUser: {},
	inView: null,
	inEdit: null
}

const getters = {
	list: state => state.users,
	inView: state => state.inView,
	current: state => state.currentUser,
	inEdit: state => state.inEdit,
}

const actions = {}

const mutations = {}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

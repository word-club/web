const state = {
	hashtags: []
}

const getters = {
	list: state => state.hashtags,
}

const actions = {}

const mutations = {
	SET_LIST: (state, value) => state.hashtags = value
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

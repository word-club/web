const state = {
	hashtags: {},
	formErrors: {}
}

const getters = {
	list: state => state.hashtags,
	formErrorList: state => state.formErrors
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

const state = {
	hashtags: [
		{id: 1, tag: "Programming"},
		{id: 2, tag: "Vuetify"},
		{id: 3, tag: "Vue"},
		{id: 4, tag: "Design"},
	],
	errors: {}
}

const getters = {
	list: state => state.hashtags,
	errorList: state => state.errors
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

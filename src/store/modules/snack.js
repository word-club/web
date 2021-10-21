const state = {
	snack: false,
	color: "",
	text: "",
	timeout: 3000
}

const mutations = {
	SET_SNACK(state, value) {
		state.snack = value
	},
	SET_SNACK_TEXT(state, value) {
		state.color = value
	},
	SET_SNACK_COLOR(state, value) {
		state.text = value
	},
	SET_SNACK_TIMEOUT(state, value) {
		state.timeout = value
	}
}

const getters = {
	state: state => state.snack,
	text: state => state.text,
	color: state => state.color,
	timeout: state => state.timeout
}

const actions = {
	setState({commit}, value) {
		commit("SET_SNACK", value)
	},
	setText({commit}, value) {
		commit("SET_SNACK_TEXT", value)
	},
	setColor({commit}, value) {
		commit("SET_SNACK_COLOR", value)
	},
	setTimeout({commit}, value) {
		commit("SET_SNACK_TIMEOUT", value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

const state = {
	snack: false,
	color: "",
	text: "",
	timeout: 3000,
	multiline: false,
}

const mutations = {
	SET_SNACK: (state, value) => state.snack = value,
	SET_TEXT: (state, value) => state.text = value,
	SET_COLOR: (state, value) => state.color = value,
	SET_TIMEOUT: (state, value) => state.timeout = value,
	SET_LINE: (state, value) => state.multiline = value
}

const getters = {
	state: state => state.snack,
	text: state => state.text,
	color: state => state.color,
	timeout: state => state.timeout,
	multiline: state => state.multiline
}

const actions = {
	setState({commit}, state) {
		commit("SET_SNACK", state)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

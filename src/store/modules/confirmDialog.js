const state = {
	dialog: false,
	message: null,
	method: null,
	url:  null,
	payload: null,
	params: null,
	successMessage: null,
	failureMessage: null,
	successEvents: []
}

const getters = {
	dialogState: state => state.dialog,
	dialogMessage: state => state.message,
	dialogMethod: state =>  state.method,
	dialogUrl: state => state.url,
	dialogSuccessEvents: state => state.successEvents,
	dialogSuccessMessage: state => state.successMessage,
	dialogFailureMessage:  state => state.failureMessage,
	dialogPayload: state => state.payload,
	dialogParams: state => state.params
}

const mutations = {
	SET_DIALOG: (state, value) => state.dialog = value,
	SET_MESSAGE: (state, value) => state.message = value,
	SET_METHOD: (state, value) => state.method = value,
	SET_URL: (state, value) => state.url = value,
	SET_SUCCESS_EVENTS: (state, value) => state.successEvents = value,
	SET_SUCCESS_MESSAGE: (state, value) => state.successMessage = value,
	SET_FAILURE_MESSAGE: (state, value) => state.failureMessage = value,
	SET_PAYLOAD: (state, value) => state.payload = value,
	SET_PARAMS: (state, value) => state.params = value,
	CLOSE: (state) => {
		state.dialog = false
		state.message = null
		state.method = null
		state.url =  null
		state.successMessage = null
		state.failureMessage = null
		state.successEvents = []
	}
}

const actions = {
	setDialog({commit}, v) {
		commit("SET_DIALOG", v)
	},
	setDialogMessage({commit}, v) {
		commit("SET_MESSAGE", v)
	},
	setMethod({commit}, v) {
		commit("SET_METHOD", v)
	},
	setUrl({commit}, v) {
		commit("SET_URL", v)
	},
	setSuccessMessage({commit}, v) {
		commit("SET_SUCCESS_MESSAGE", v)
	},
	setSuccessEvents({commit},v)  {
		commit("SET_SUCCESS_EVENTS", v)
	},
	setFailureMessage({commit}, v) {
		commit("SET_FAILURE_MESSAGE", v)
	},
	setPayload({commit}, v) {
		commit("SET_PAYLOAD", v)
	},
	setParams({commit}, v) {
		commit("SET_PARAMS", v)
	},
	close({commit}) {
		commit("CLOSE")
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

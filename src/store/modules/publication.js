const urls = require("@/urls.json").publication
import axios from "@/axios";
const _ = require("lodash");


const state = {
	publications: { results: [] },
	toView: null,
	toEdit: null,
	createInProgress: null,
	filterset: {}
}

const mutations = {
	SET_LIST: (state, value) => state.publications = value,
	SET_FOR_EDIT: (state, value) => state.toEdit = value,
	SET_TO_VIEW: (state, value) => state.toView = value,
	SET_IN_PROGRESS: (state, value) => state.createInProgress = value,
	SET_FILTERSET: (state, value) => state.filterset = value
}

const getters = {
	list: state => state.publications,
	inView: state => state.toView,
	toEdit: state => state.toEdit,
	inProgress: state => state.createInProgress,
}

const actions = {
	filter({commit}, payload) {
		return axios.getWithPayload(urls.list, payload)
			.then(res => {
				if (!_.isEqual(state.publications.results, res.results))
					commit("SET_LIST", res)
			})
	},
	setInProgress({commit}, value) {
		commit("SET_IN_PROGRESS", value)
	},
	setInView({commit}, value) {
		commit("SET_TO_VIEW", value)
	},
	setFilterset({commit}, value) {
		commit("SET_FILTERSET", value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

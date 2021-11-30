const urls = require("@/urls.json").comment
import axios from "@/axios";

const state = {
	comments: {},
	comment: {}
}

const getters = {
	list: (state) => state.comments,
	detail: (state) => state.comment
}

const mutations = {
	SET_LIST: (state, value) => state.comments = value,
	SET_DETAIL: (state, value) => state.comment = value
}

const actions = {
	setComments({commit}, value) {
		commit("SET_LIST", value)
	},
	setComment({commit}, value) {
		commit("SET_DETAIL", value)
	},
	filter({commit}, payload) {
		return axios.getWithPayload(urls.list, payload)
			.then(res => {
				commit("SET_LIST", res)
			})
	},
}

export default {
	namespaced: true,
	state, getters, mutations, actions
}

const util = require("util")
import urls from "@/urls.json"
import $axios from "@/axios.js"

const communityUrls = urls.community

const state = {
	communities: {},
	community: {},
	formErrors: {}
}

const mutations = {
	SET_COMMUNITIES(state, value) {
		state.communities = value
	},
	SET_COMMUNITY(state, value) {
		state.community = value
	},
	SET_FORM_ERRORS(state, value) {
		state.formErrors = value
	}
}

const getters = {
	list: state => state.communities,
	detail: state => state.community,
	formErrorList: state => state.formErrors
}

const actions = {
	clearFormErrors({commit}) {
		commit("SET_FORM_ERRORS", {})
	},
	async filter({commit}, payload) {
		try {
			const response = await $axios.getWithPayload(communityUrls.list, payload)
			commit("SET_COMMUNITIES", response)
			return true
		} catch {
			return false
		}
	},
	async fetchDetail({commit}, id) {
		try {
			const response = await $axios.get(util.format(communityUrls.detail, id))
			commit("SET_COMMUNITY", response)
			return true
		} catch {
			return false
		}
	},
	async create({commit}, body) {
		try {
			await $axios.post(communityUrls.list, body)
			return true
		} catch (e) {
			if (parseInt(e.response.status.toString()) === 400) {
				commit("SET_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},
	async patch({commit}, id, body) {
		try {
			await $axios.patch(util.format(communityUrls.detail, id), body)
			return true
		} catch (e) {
			if (parseInt(e.response.status.toString()) === 400) {
				commit("SET_FORM_ERRORS", e.response.data)
			}
			return false
		}
	},
	async delete({commit}, {id: id}) {
		try {
			await $axios.delete(util.format(communityUrls.detail, id))
			return true
		} catch (e) {
			return false
		}
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}


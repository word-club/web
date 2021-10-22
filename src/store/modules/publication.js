import $axios from "@/axios"
const urls = require("@/urls.json")


const state = {
	publications: {},
	publicationForEdit: {},
	publicationInProgress: {},
	formErrors: {}
}

const mutations = {
	SET_PUBLICATIONS(state, value) {
		state.publications = value
	},
	SET_PUBLICATION_FOR_EDIT(state, value) {
		state.publicationForEdit = value
	},
	SET_PUBLICATION_IN_PROGRESS(state, value) {
		state.publicationInProgress = value
	},
	SET_FORM_ERRORS(state, value) {
		state.formErrors = value
	}
}

const getters = {
	list: state => state.publications,
	forEdit: state => state.publicationForEdit,
	inProgress: state => state.publicationInProgress,
	formErrors: state => state.formErrors
}

const actions = {
	async filter({ commit }, payload) {
		try {
			commit("SET_PUBLICATIONS", await $axios.getWithPayload(urls.publication.list))
			return true
		} catch {
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

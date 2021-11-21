const urls = require("@/urls.json").publication
import axios from "@/axios";

const state = {
	publications: { results: []},
	drafts: {},
	toView: null,
	toEdit: null,
	createInProgress: null
}

const mutations = {
	SET_LIST: (state, value) => state.publications = value,
	SET_FOR_EDIT: (state, value) => state.toEdit = value,
	SET_TO_VIEW: (state, value) => state.toView = value,
	SET_IN_PROGRESS: (state, value) => state.createInProgress = value,
	SET_DRAFTS: (state, value) => state.drafts = value,
	REMOVE_DRAFT_ITEM(state, ID) {
		const toRemove = state.drafts.results.find(item => item.id === ID)
		const index = state.drafts.results.indexOf(toRemove)
		state.drafts.results.splice(index, 1)
		state.drafts.count --
	},
	REMOVE_IMAGE_ITEM(state, draftId, imageId) {
		const draft = state.drafts.results.find(item=>item.id === draftId)
		const toRemove = draft.images.find(item => item.id === imageId)
		const index = draft.images.indexOf(toRemove)
		draft.images.splice(index, 1)
	}
}

const getters = {
	list: state => state.publications,
	inView: state => state.toView,
	toEdit: state => state.toEdit,
	inProgress: state => state.createInProgress,
	draftList: state => state.drafts
}

const actions = {
	filter({commit}, payload) {
		return axios.getWithPayload(urls.list, payload)
			.then(res => {
				commit("SET_LIST", res)
			})
	},
	setDrafts({commit}, value) {
		commit("SET_DRAFTS", value)
	},
	setInProgress({commit}, value) {
		commit("SET_IN_PROGRESS", value)
	},
	removeDraftItem({commit}, ID) {
		commit("REMOVE_DRAFT_ITEM", ID)
	},
	removeImageItem({commit}, draftId, itemId) {
		commit("REMOVE_IMAGE_ITEM", draftId, itemId)
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

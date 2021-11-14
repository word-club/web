const state = {
	publications: [],
	drafts: {},
	toView: {
		id: 5896,
		community: {
			id: 5896,
			unique_id: "TajMahalWonderers",
			name: "Taj Mahal Wonderers",
			quote: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.",
			timestamp: "2021-10-21T22:07:24.169676+05:45",
			theme: {
				color: "teal"
			},
			settings: {
				what_to_call_subscribers: "taj mahal wonderers",
				feeling_after_subscribing: "being quite literally awesome"
			},
			avatar: {
				image: "https://images7.alphacoders.com/803/803146.jpg"
			},
			cover: {
				image: "https://cdn.onlyinyourstate.com/wp-content/uploads/2016/01/15435913689_373933d80f_k.jpg"
			},
		},
		created_by: {
			username: "kiranparajuli589"
		},
		timestamp: "2021-10-21T22:07:24.169676+05:45",
		title: "The first trailer for the film adaptation Uncharted",
		content: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." +
			" Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum" +
			" id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis " +
			"quis ac lectus.",
		image: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/11/Harry-Potter-wand-Harry-Potter-Movies.jpg"
	},
	toEdit: null,
	createInProgress: null
}

const mutations = {
	SET_LIST: (state, value) => state.publications = value,
	SET_FOR_EDIT: (state, value) => state.toEdit = value,
	SET_TO_VIEW: (state, value) => state.toView = value,
	SET_IN_PROGRESS: (state, value) => state.createInProgress = value,
	SET_DRAFTS: (state, value) => state.drafts = value,
	ADD_TO_DRAFTS(state, value) {
		state.drafts.results.push(value)
	},
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
	setDrafts({commit}, value) {
		commit("SET_DRAFTS", value)
	},
	setInProgress({commit}, value) {
		commit("SET_IN_PROGRESS", value)
	},
	addToDraft({commit}, value) {
		commit("ADD_TO_DRAFTS", value)
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

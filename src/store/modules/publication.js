import $axios from "@/axios"
const urls = require("@/urls.json")


const state = {
	publications: {},
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
	toEdit: {},
	errors: {},
	createInProgress: {}
}

const mutations = {
	SET_PUBLICATIONS: (state, value) => state.publications = value,
	SET_PUBLICATION_FOR_EDIT: (state, value) => state.toEdit = value,
	SET_PUBLICATION_IN_PROGRESS: (state, value) => state.createInProgress = value,
	SET_FORM_ERRORS: (state, value) => state.errors = value
}

const getters = {
	list: state => state.publications,
	inView: state => state.toView,
	toEdit: state => state.toEdit,
	inProgress: state => state.createInProgress,
	errorList: state => state.errors
}

const actions = {
	async filter({ commit }, payload) {
		try {
			commit("SET_PUBLICATIONS", await $axios.getWithPayload(urls.publication.list, payload))
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

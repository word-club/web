import $axios from "@/axios"
const urls = require("@/urls.json")


const state = {
	publications: {},
	publicationInView: {
		id: 5896,
		community: {
			id: 5896,
			unique_id: "TajMahalWonderers",
			name: "Taj Mahal Wonderers",
			quote: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.",
			timestamp: "2021-10-21T22:07:24.169676+05:45",
			theme: {
				color: "teal"
			}
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
	inView: state => state.publicationInView,
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

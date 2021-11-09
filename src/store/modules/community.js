const util = require("util")
import urls from "@/urls.json"
import $axios from "@/axios.js"

const communityUrls = urls.community

const state = {
	communities: {},
	toView: {
		id: 5896,
		unique_id: "TajMahalWonderers",
		name: "Taj Mahal Wonderers",
		quote: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.",
		timestamp: "2021-10-21T22:07:24.169676+05:45",
		theme: {
			color: "teal"
		},
		subscribers: {
			count: "52000"
		},
		notifiedSubscribers: {
			count: 15120
		},
		settings: {
			what_to_call_subscribers: "taj mahal wonderers",
			feeling_after_subscribing: "being quite literally awesome"
		},
		avatar: {
			image: "https://1.bp.blogspot.com/-VCNd1oYfks8/XwL4UH4oJ2I/AAAAAAAARYA/1QiUS2b7Aq4iFQkZlHCe0ZMjhOIUSUzEgCLcBGAsYHQ/s1600/Lord%2BShiva%2BChildhood.jpg"
		},
		cover: {
			image: "https://cdn.onlyinyourstate.com/wp-content/uploads/2016/01/15435913689_373933d80f_k.jpg"
		},
		rules: [
			"Remember the human",
			"Behave like you would in real life",
			"Look for the original source of content",
			"Search for duplicates before posting",
			"Read the community rules"
		],
		moderators: [
			{username: "kiran589", role: { position: "mod", president: true}},
			{username: "gallowBoob", role: { position: "mod", vc: true}},
			{username: "Meraria01", role: { position: "mod"}},
			{username: "hercs247", role: { position: "mod"}},
			{username: "BotDefense", role: { position: "mod"}},
			{username: "Sunkisty", role: { position: "mod"}},
			{username: "Tornado9797", role: { position: "mod"}},
		]
	},
	toEdit: {},
	errors: {},
	createInProgress: {
		unique_id: "TajMahalWonderers",
	}
}

const mutations = {
	SET_COMMUNITIES: (state, value) => state.communities = value ,
	SET_COMMUNITY_TO_VIEW: (state, value) => state.toView = value ,
	SET_FORM_ERRORS: (state, value) => state.formErrors = value
}

const getters = {
	list: state => state.communities,
	inView: state => state.toView,
	toEdit: state => state.toEdit,
	errorList: state => state.errors,
	inProgress: state => state.createInProgress
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
			commit("SET_COMMUNITY_TO_VIEW", response)
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
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}


const state = {
	newCount: 0,
	notifications: {
		unseen_count: 0,
		count: 0,
		results: [],
	}
}

const getters = {
	list: state => state.notifications
}

const mutations = {
	UPDATE_NEW_COUNT(state) {
		state.newCount ++
	},
	SET_LIST(state, payload) {
		state.notifications = payload
	},
	ADD_NOTIFICATION(state, notification) {
		state.notifications.results.push(notification)
		state.notifications.unseen_count++
	},
	REMOVE_NOTIFICATION(state, notification) {
		if (!notification.seen)
			state.notifications.unseen_count--
		state.notifications.splice(state.notifications.indexOf(notification), 1)
	}
}

const actions = {
	set({ commit }, {list, update}) {
		if (update) commit("UPDATE_NEW_COUNT")
		commit("SET_LIST", list)
	},
	add({ commit }, notification) {
		commit("ADD_NOTIFICATION", notification)
	},
	remove({ commit }, notification) {
		commit("REMOVE_NOTIFICATION", notification)
	},
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

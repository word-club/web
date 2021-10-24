const state = {
	users: {},
	userInView: {
		id: 5896,
		username: "kiranparajuli589",
		email: "kiranparajuli589@gmail.com",
		profile: {
			bio: "Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
			birth_date: "1999-10-21",
			timestamp: "2020-10-21T22:07:24.169676+05:45",
			is_authorized: true,
			authorized_at: "2021-5-21T22:07:24.169676+05:45",
		},
		active_avatar: {
			id: 1,
			image: "https://yt3.ggpht.com/a-/AAuE7mDGQh9L3n_EULfeZEO9rs_JR4BY376CSrlxdw=s900-mo-c-c0xffffffff-rj-k-no",
			active: true,
			timestamp: "2020-10-21T22:07:24.169676+05:45",
		},
		active_cover: {
			id: 1,
			image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=1200&auto=webp&quality=75",
			active: true,
			timestamp: "2020-10-21T22:07:24.169676+05:45",
		},
		avatars: [
			{
				id: 1,
				image: "https://yt3.ggpht.com/a-/AAuE7mDGQh9L3n_EULfeZEO9rs_JR4BY376CSrlxdw=s900-mo-c-c0xffffffff-rj-k-no",
				active: true,
				timestamp: "2020-10-21T22:07:24.169676+05:45",
			},
			{
				id: 2,
				image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2019/03/avatar-movie-sam-worthington.jpg",
				active: false,
				timestamp: "2020-10-21T22:07:24.169676+05:45",
			}
		],
		covers: [
			{
				id: 1,
				image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=1200&auto=webp&quality=75",
				active: true,
				timestamp: "2020-10-21T22:07:24.169676+05:45",
			},
			{
				id: 2,
				image: "https://assets1.ignimgs.com/2019/05/16/avatar-thumbnail1-1558036693141.jpg?width=1280",
				active: false,
				timestamp: "2020-10-21T22:07:24.169676+05:45",
			}
		],
		followers: [
			{ id: 1, user: { username: "ABCTopUser"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 2, user: { username: "NotABOt58"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 3, user: { username: "PsycoKiller"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 4, user: { username: "DwayneJohnson"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
		],
		followings: [
			{ id: 1, user: { username: "ABCTopUser"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 2, user: { username: "NotABOt58"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 3, user: { username: "PsycoKiller"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
			{ id: 4, user: { username: "DwayneJohnson"}, timestamp: "2020-10-21T22:07:24.169676+05:45",  },
		],
		last_active_at: "2020-10-20:30:24.169676+05:45",
	},
	userInEdit: {},
	formErrors: {}
}

const getters = {
	list: state => state.users,
	inView: state => state.userInView,
	inEdit: state => state.userInEdit,
	formErrorList: state => state.formErrors
}

const actions = {}

const mutations = {}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

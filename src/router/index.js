import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		components: {
			default: () => import("@/views/home/Home"),
			sidebar: () => import("@/views/home/Sidebar")
		},
		meta: {
			home: true
		}
	},
	{
		path: "/submit",
		name: "Submit",
		components: {
			default: () => import("@/views/home/submit/Submit"),
			sidebar: () => import("@/views/home/submit/Sidebar")
		},
		meta: {
			home: true
		}
	},
	{
		path: "/publication/:id",
		name: "Publication",
		components: {
			default: () => import("@/views/home/publication/Publication"),
			sidebar: () => import("@/views/home/publication/Sidebar")
		},
		meta: {
			home: true
		}
	},
	{
		path: "/community/:uniqueId",
		components: {
			default: () => import("@/views/home/community/Community"),
			sidebar: () => import("@/views/home/community/Sidebar")
		},
		children: [
			{
				path: "publications",
				component: () => import("@/views/home/community/PostsList"),
				name: "Community",
				meta: {
					home: true
				},
			},
			{
				path: "wiki",
				component: () => import("@/views/home/community/WikiPage"),
				name: "Community Wiki",
				meta: {
					home: true
				},
			},
			{
				path: "modmail",
				component: () => import("@/views/home/community/ModMail"),
				name: "Community Modmail",
				meta: {
					home: true
				},
			},
		],
	},
	{
		path: "/user/:username",
		components: {
			default: () => import("@/views/home/user/User"),
			sidebar: () => import("@/views/home/user/Sidebar")
		},
		children: [
			{
				path: "",
				component: () => import("@/views/home/user/Overview"),
				name: "User Overview",
				meta: {
					home: true
				},
			},
			{
				path: "posts",
				component: () => import("@/views/home/user/Posts"),
				name: "User Posts",
				meta: {
					home: true
				},
			},
			{
				path: "comments",
				component: () => import("@/views/home/user/Comments"),
				name: "User Comments",
				meta: {
					home: true
				},
			},
			{
				path: "awards",
				component: () => import("@/views/home/user/AwardsReceived"),
				name: "User Awards",
				meta: {
					home: true
				},
			},
		],
	},
	{
		path: "/profile",
		components: {
			default: () => import("@/views/home/profile/Profile.vue"),
			sidebar: () => import("@/views/home/profile/Sidebar")
		},
		children: [
			{
				path: "",
				component: () => import("@/views/home/user/Overview"),
				name: "Profile Overview",
				meta: {
					home: true
				},
			},
			{
				path: "posts",
				component: () => import("@/views/home/user/Posts"),
				name: "Profile Posts",
				meta: {
					home: true
				},
			},
			{
				path: "comments",
				component: () => import("@/views/home/user/Comments"),
				name: "Profile Comments",
				meta: {
					home: true
				},
			},
			{
				path: "saved",
				component: () => import("@/views/home/profile/Saved"),
				name: "Profile Saved",
				meta: {
					home: true
				},
			},
			{
				path: "saved",
				component: () => import("@/views/home/profile/Hidden"),
				name: "Profile Hidden",
				meta: {
					home: true
				},
			},
			{
				path: "up-voted",
				component: () => import("@/views/home/profile/UpVoted"),
				name: "Profile Upvoted",
				meta: {
					home: true
				},
			},
			{
				path: "down-voted",
				component: () => import("@/views/home/profile/DownVoted"),
				name: "Profile Downvoted",
				meta: {
					home: true
				},
			},
			{
				path: "awards-received",
				component: () => import("@/views/home/profile/AwardsReceived"),
				name: "Profile Awards Received",
				meta: {
					home: true
				},
			},
			{
				path: "awards-given",
				component: () => import("@/views/home/profile/AwardsGiven"),
				name: "Profile Awards Given",
				meta: {
					home: true
				},
			},
		],
	},
	{
		path: "notifications",
		component: () => import("@/views/home/notification/Notification"),
		name: "Notification",
		meta: {
			home: true
		},
	},
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router

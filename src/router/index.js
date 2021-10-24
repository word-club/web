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
		path: "/community/:id",
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
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router

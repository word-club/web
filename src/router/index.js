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
		path: "/communitiy/:id",
		name: "Communitiy",
		components: {
			default: () => import("@/views/home/community/Community"),
			sidebar: () => import("@/views/home/community/Sidebar")
		},
		meta: {
			home: true
		}
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router

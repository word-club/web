import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		components: {
			default: () => import("@/views/home/Home")
		},
		meta: {
			home: true
		}
	},
	{
		path: "/communities",
		name: "Communities",
		components: {
			default: () => import("@/views/home/Communities.vue")
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

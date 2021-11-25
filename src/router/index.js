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
		path: "/submit/:toEdit?",
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
		path: "/register-community",
		name: "Register Community",
		components: {
			default: () => import("@/views/home/community/RegisterCommunity"),
			sidebar: () => import("@/views/home/community/RegisterSidebar")
		},
		meta: {
			home: true
		},
		children: [
			{
				path: "mainframe",
				name: "Community Mainframe",
				component: () => import("@/views/home/community/register/Mainframe")
			},
			{
				path: "display",
				name: "Community Display",
				component: () => import("@/views/home/community/register/Display")
			},
			{
				path: "rules",
				name: "Community Rules",
				component: () => import("@/views/home/community/register/Rules")
			},
			{
				path: "hashtags",
				name: "Community Hashtags",
				component: () => import("@/views/home/community/register/Hashtags")
			},
			{
				path: "authorization/:code?",
				name: "Community Authorization",
				component: () => import("@/views/home/community/register/Authorization")
			},
			{
				path: "administration",
				name: "Community Administration",
				component: () => import("@/views/home/community/register/Administration")
			}
		]
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
		meta: {
			home: true
		},
		children: [
			{
				path: "publications",
				name: "Community Detail",
				component: () => import("@/views/home/community/PostsList")
			},
			{
				path: "wiki",
				name: "Community Detail Wiki",
				component: () => import("@/views/home/community/WikiPage")
			},
			{
				path: "modmail",
				name: "Community Detail Modmail",
				component: () => import("@/views/home/community/ModMail")
			},
		],
	},
	{
		path: "/user/:username",
		components: {
			default: () => import("@/views/home/user/User"),
			sidebar: () => import("@/views/home/user/Sidebar")
		},
		meta: {
			home: true
		},
		children: [
			{
				path: "",
				name: "User Overview",
				component: () => import("@/views/home/user/Overview"),
			},
			{
				path: "posts",
				name: "User Posts",
				component: () => import("@/views/home/user/Posts")
			},
			{
				path: "comments",
				name: "User Comments",
				component: () => import("@/views/home/user/Comments")
			}
		],
	},
	{
		path: "/profile",
		components: {
			default: () => import("@/views/home/profile/Profile"),
			sidebar: () => import("@/views/home/profile/Sidebar")
		},
		meta: {
			home: true
		},
		children: [
			{
				path: "home",
				name: "Profile Overview",
				component: () => import("@/views/home/user/Overview")
			},
			{
				path: "recent",
				name: "Profile Recent",
				component: () => import("@/views/home/profile/Recent")
			},
			{
				path: "posts",
				name: "Profile Posts",
				component: () => import("@/views/home/user/Posts")
			},
			{
				path: "comments",
				name: "Profile Comments",
				component: () => import("@/views/home/user/Comments")
			},
			{
				path: "saved",
				name: "Profile Saved",
				component: () => import("@/views/home/profile/Saved")
			},
			{
				path: "saved",
				name: "Profile Hidden",
				component: () => import("@/views/home/profile/Hidden")
			},
			{
				path: "up-voted",
				name: "Profile Upvoted",
				component: () => import("@/views/home/profile/UpVoted")
			},
			{
				path: "down-voted",
				name: "Profile Downvoted",
				component: () => import("@/views/home/profile/DownVoted")
			},
			{
				path: "shares",
				name: "Profile Shared",
				component: () => import("@/views/home/profile/Shares")
			}
		],
	},
	{
		path: "/settings",
		component: () => import("@/views/home/settings/Settings"),
		name: "User Settings",
		meta: { profile_settings: true },
		children: [
			{
				path: "account",
				name: "User Settings Account",
				component: () => import("@/views/home/settings/Account"),
			},
			{
				path: "profile",
				name: "User Settings Profile",
				component: () => import("@/views/home/settings/Profile"),
			},
			{
				path: "subscriptions",
				name: "User Settings Subscriptions",
				component: () => import("@/views/home/settings/Subscription"),
			},
			{
				path: "communities",
				name: "User Settings Communities",
				component: () => import("@/views/home/settings/Communities"),
			},
			{
				path: "notifications",
				name: "User Settings Notifications",
				component: () => import("@/views/home/settings/Notifications"),
			},
			{
				path: "messaging",
				name: "User Settings Messaging",
				component: () => import("@/views/home/settings/Messaging"),
			}
		]
	},
	{
		path: "/notifications",
		name: "Notification",
		component: () => import("@/views/home/notification/Notification"),
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

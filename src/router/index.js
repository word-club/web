import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/filter="
	},
	{
		path: "/filter=:sortBy?",
		name: "Home",
		components: {
			default: () => import("@/views/home/Home"),
			sidebar: () => import("@/views/home/Sidebar")
		},
		meta: {
			sidebar: true
		}
	},
	{
		path: "/top",
		name: "Top",
		components: {
			default: () => import("@/views/top/Top"),
			sidebar: () => import("@/views/home/Sidebar")
		},
		meta: {
			sidebar: true
		},
		children: [
			{
				path: "communities",
				name: "Top Communities",
				component: () => import("@/views/top/Communities")
			},
			{
				path: "users",
				name: "Top Users",
				component: () => import("@/views/top/Users")
			},
			{
				path: "commentators",
				name: "Top Commentators",
				component: () => import("@/views/top/Commentators")
			}
		]
	},
	{
		path: "/submit/:toEdit?",
		name: "Submit",
		components: {
			default: () => import("@/views/submit/Submit"),
			sidebar: () => import("@/views/submit/Sidebar")
		},
		meta: {
			drawer_free: true,
			sidebar: true,
			login_required: true
		}
	},
	{
		path: "/register-community",
		name: "Register Community",
		components: {
			default: () => import("@/views/community/RegisterCommunity"),
			sidebar: () => import("@/views/community/RegisterSidebar")
		},
		meta: {
			sidebar: true,
			login_required: true
		},
		children: [
			{
				path: "mainframe",
				name: "Community Mainframe",
				component: () => import("@/views/community/register/Mainframe")
			},
			{
				path: "display",
				name: "Community Display",
				component: () => import("@/views/community/register/Display")
			},
			{
				path: "rules",
				name: "Community Rules",
				component: () => import("@/views/community/register/Rules")
			},
			{
				path: "hashtags",
				name: "Community Hashtags",
				component: () => import("@/views/community/register/Hashtags")
			},
			{
				path: "authorization/:code?",
				name: "Community Authorization",
				component: () => import("@/views/community/register/Authorization")
			},
			{
				path: "administration",
				name: "Community Administration",
				component: () => import("@/views/community/register/Administration")
			}
		]
	},
	{
		path: "/publication/:id/:view?/:sortCommentBy?",
		name: "Publication",
		components: {
			default: () => import("@/views/publication/Publication"),
			sidebar: () => import("@/views/publication/Sidebar")
		},
		meta: {
			sidebar: true
		}
	},
	{
		path: "/community/:id",
		components: {
			default: () => import("@/views/community/Community"),
			sidebar: () => import("@/views/community/Sidebar")
		},
		meta: {
			sidebar: true
		},
		children: [
			{
				path: "publications",
				name: "Community Detail",
				component: () => import("@/views/community/PostsList")
			},
			{
				path: "wiki",
				name: "Community Detail Wiki",
				component: () => import("@/views/community/WikiPage")
			},
			{
				path: "modmail",
				name: "Community Detail Modmail",
				component: () => import("@/views/community/ModMail")
			},
		],
	},
	{
		path: "/user/:username",
		components: {
			default: () => import("@/views/user/User"),
			sidebar: () => import("@/views/user/Sidebar")
		},
		meta: {
			sidebar: true
		},
		children: [
			{
				path: "",
				name: "User Overview",
				component: () => import("@/views/user/Overview"),
			},
			{
				path: "posts",
				name: "User Posts",
				component: () => import("@/views/user/Posts")
			},
			{
				path: "comments",
				name: "User Comments",
				component: () => import("@/views/user/Comments")
			}
		],
	},
	{
		path: "/profile",
		components: {
			default: () => import("@/views/profile/Profile"),
			sidebar: () => import("@/views/profile/Sidebar")
		},
		meta: {
			sidebar: true,
			login_required: true
		},
		children: [
			{
				path: "home",
				name: "Profile Overview",
				component: () => import("@/views/user/Overview")
			},
			{
				path: "recent",
				name: "Profile Recent",
				component: () => import("@/views/profile/Recent")
			},
			{
				path: "posts",
				name: "Profile Posts",
				component: () => import("@/views/user/Posts")
			},
			{
				path: "comments",
				name: "Profile Comments",
				component: () => import("@/views/user/Comments")
			},
			{
				path: "saved",
				name: "Profile Saved",
				component: () => import("@/views/profile/Saved")
			},
			{
				path: "saved",
				name: "Profile Hidden",
				component: () => import("@/views/profile/Hidden")
			},
			{
				path: "up-voted",
				name: "Profile Upvoted",
				component: () => import("@/views/profile/UpVoted")
			},
			{
				path: "down-voted",
				name: "Profile Downvoted",
				component: () => import("@/views/profile/DownVoted")
			},
			{
				path: "shares",
				name: "Profile Shared",
				component: () => import("@/views/profile/Shares")
			}
		],
	},
	{
		path: "/settings",
		component: () => import("@/views/settings/Settings"),
		name: "User Settings",
		meta: {
			user_settings: true,
			drawer_free: true,
			login_required: true
		},
		children: [
			{
				path: "account",
				name: "User Settings Account",
				component: () => import("@/views/settings/Account"),
			},
			{
				path: "profile",
				name: "User Settings Profile",
				component: () => import("@/views/settings/Profile"),
			},
			{
				path: "subscriptions",
				name: "User Settings Subscriptions",
				component: () => import("@/views/settings/Subscription"),
			},
			{
				path: "communities",
				name: "User Settings Communities",
				component: () => import("@/views/settings/Communities"),
			},
			{
				path: "notifications",
				name: "User Settings Notifications",
				component: () => import("@/views/settings/Notifications"),
			},
			{
				path: "messaging",
				name: "User Settings Messaging",
				component: () => import("@/views/settings/Messaging"),
			}
		]
	},
	{
		path: "/notifications",
		name: "Notification",
		component: () => import("@/views/notification/Notification"),
		meta: {
			sidebar: true,
			login_required: true
		},
	},
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
	mode: "history"
})

export default router

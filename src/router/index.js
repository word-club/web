import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/filter/"
	},
	{
		path: "/filter/:sortBy?",
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
		path: "/submit/type/:type/edit/:toEdit?/community/:community?",
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
				path: "",
				name: "Register Community",
				component: () => import("@/views/community/register/Mainframe")
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
		path: "/community/:uniqueId",
		components: {
			default: () => import("@/views/community/Community"),
			sidebar: () => import("@/views/community/Sidebar")
		},
		children: [
			{
				path: "publications",
				name: "Community Detail",
				component: () => import("@/views/community/PostsList"),
				meta: {
					sidebar: true
				},
			},
			{
				path: "wiki",
				name: "Community Detail Wiki",
				component: () => import("@/views/community/WikiPage"),
				meta: {
					sidebar: true
				},
			},
			{
				path: "modmail",
				name: "Community Detail Modmail",
				component: () => import("@/views/community/ModMail"),
				meta: {
					sidebar: true
				},
			},
			{
				path: "mod-setting",
				name: "Community MOD Settings",
				component: () => import("@/views/community/ModSettings"),
				meta: {
					drawer_free: true,
					login_required: true,
					community_mod: true
				},
				children: [
					{
						name: "Community MOD Settings Reports",
						path: "reports",
						component: () => import("@/views/community/modCog/Report")
					},
					{
						name: "Community MOD Settings Spam",
						path: "spam",
						component: () => import("@/views/community/modCog/Spam")
					},
					{
						name: "Community MOD Settings Edited",
						path: "edited",
						component: () => import("@/views/community/modCog/Edited")
					},
					{
						name: "Community MOD Settings Banned",
						path: "banned",
						component: () => import("@/views/community/modCog/Banned")
					},
					{
						name: "Community MOD Settings Muted",
						path: "muted",
						component: () => import("@/views/community/modCog/Muted")
					},
					{
						name: "Community MOD Settings Approved",
						path: "approved",
						component: () => import("@/views/community/modCog/Approved")
					},
					{
						name: "Community MOD Settings Moderators",
						path: "moderators",
						component: () => import("@/views/community/modCog/Moderators")
					},
					{
						name: "Community MOD Settings Grant UF",
						path: "grant-user-flair",
						component: () => import("@/views/community/modCog/GrantUserFlair")
					},
					{
						name: "Community MOD Settings Emojis",
						path: "emojis",
						component: () => import("@/views/community/modCog/Emojis")
					},
					{
						name: "Community MOD Settings User Flair",
						path: "user-flair",
						component: () => import("@/views/community/modCog/UserFlair")
					},
					{
						name: "Community MOD Settings Post Flair",
						path: "post-flair",
						component: () => import("@/views/community/modCog/PostFlair")
					},
					{
						name: "Community MOD Settings Rules",
						path: "rules",
						component: () => import("@/views/community/modCog/Rules")
					},
					{
						name: "Community MOD Settings Removal Reasons",
						path: "removal-reasons",
						component: () => import("@/views/community/modCog/RemovalReasons")
					},
					{
						name: "Community MOD Settings Content Control",
						path: "content-control",
						component: () => import("@/views/community/modCog/ContentControl")
					},
					{
						name: "Community MOD Settings Automod",
						path: "automod",
						component: () => import("@/views/community/modCog/Automod")
					},
					{
						name: "Community MOD Settings Scheduled Post",
						path: "scheduled-post",
						component: () => import("@/views/community/modCog/ScheduledPost")
					},
					{
						name: "Community MOD Settings Event",
						path: "event",
						component: () => import("@/views/community/modCog/Event")
					},
					{
						name: "Community MOD Settings Email",
						path: "email",
						component: () => import("@/views/community/modCog/Email")
					},
					{
						name: "Community MOD Settings Chat",
						path: "chat",
						component: () => import("@/views/community/modCog/Chat")
					},
					{
						name: "Community MOD Settings Traffic",
						path: "traffic-stat",
						component: () => import("@/views/community/modCog/TrafficStat")
					},
					{
						name: "Community MOD Settings Log",
						path: "mod-log",
						component: () => import("@/views/community/modCog/ModLog")
					},
					{
						name: "Community MOD Settings Help Center",
						path: "mod-help-center",
						component: () => import("@/views/community/modCog/ModHelpCenter")
					},
					{
						name: "Community MOD Settings Guidelines",
						path: "mod-guidelines",
						component: () => import("@/views/community/modCog/ModGuideline")
					},
					{
						name: "Community MOD Settings Support",
						path: "mod-support",
						component: () => import("@/views/community/modCog/ModSupport")
					},
					{
						name: "Community MOD Settings Contact",
						path: "contact-wordclub",
						component: () => import("@/views/community/modCog/ContactWordclub")
					},
					{
						path: "display",
						name: "Community MOD Settings Display",
						component: () => import("@/views/community/modCog/Display")
					},
					{
						path: "description",
						name: "Community MOD Settings Description",
						component: () => import("@/views/community/modCog/Description")
					},
					{
						path: "authorization/:code?",
						name: "Community MOD Settings Authorization",
						component: () => import("@/views/community/register/Authorization")
					},
				]
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
	{
		name: "Site Administration",
		path: "/site-administration",
		component: () => import("@/views/siteAdmin/SiteAdmin")
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
})

export default router

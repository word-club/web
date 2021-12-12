const AppTopStyle = {
	methods: {
		setAppBarTopStyle() {
			let appBar, appContainer, sidebars, appBarHeight
			do {
				appBar = document.querySelector(".the-app-bar")
				appContainer = document.querySelector(".app-container")
				sidebars = document.querySelectorAll(".home-sidebar>div")
				appBarHeight = (appBar) ? appBar.clientHeight : 0
			} while(appBar)
			appContainer.style.paddingTop = this.$util.format("%dpx", appBarHeight)
			if(sidebars.length) {
				sidebars.forEach(sidebar => {
					sidebar.style.paddingTop = this.$util.format("%dpx", appBarHeight)
				})
			}
		},
	}
}

export default AppTopStyle

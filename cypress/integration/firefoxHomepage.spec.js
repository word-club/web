describe("With firefox browser", () => {
	before(() => {
		cy.interceptFilter()
	})
	it("should open homepage on firefox the browser", {
		browser: "firefox",
		viewportHeight: 600,
		viewportWidth: 400
	}, () => {
		cy.visit("/")
		cy.wait("@list")
		cy.get(".the-app-bar--site-title")
			.should("be.visible")
			.and("have.text", "WordClub")
	})
})

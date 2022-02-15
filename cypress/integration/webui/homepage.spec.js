describe("The Homepage", () => {
	it("should display the homepage", () => {
		cy.visit("/")
		cy.get(".the-app-bar--site-title")
			.should("be.visible")
			.and("contain", "WordClub")
	})
})

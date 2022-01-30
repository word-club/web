describe("Homepage", () => {
	it("should display the homepage", () => {
		cy.visit("/");
		cy.get('.v-toolbar__content > :nth-child(1) > .cursor')
			.should("be.visible")
			.and("contain", "WordClub");
	})
})

describe("The Homepage", () => {
	it("should fail with element not found", () => {
		cy.visit("/")
		cy.get("#site-titlee")
			.should("be.visible")
			.and("have.text", "WordClub")
	})
})

describe("Demonstrates slow selectors", () => {
	it("should wait for slow loading elements", () => {
		cy.visit("/")
		cy.get("#publication-1")
			.should("be.visible")
			.within(() => {
				cy.contains("Welcome to the WordClub")
					.should("be.visible")
			})
	})
})

describe("Demonstrates slow selectors", () => {
	it("should wait for slow loading elements", () => {
		cy.visit("/")
		cy.get("#publication-10")
			.should("be.visible")
			.within(() => {
				cy.contains("Radioactivity is a boon")
					.should("be.visible")
			})
	})
})

describe("My First Test", () => {
	it("Visits the Educative Homepage", () => {
		cy.visit("https://www.educative.io")

		cy.contains("Explore Courses & Paths").click()

		// Should be on a new URL which includes '/explore'
		cy.url().should("include", "/explore")
	})
})

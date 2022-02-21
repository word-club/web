describe("My First Test", () => {
	it("should visit the Educative individual learner page", () => {
		cy.visit("https://www.educative.io")

		cy.contains("I'm an individual").click()

		// Should be on a new URL which includes '/individual-learner'
		cy.url().should("include", "/individual-learner")
	})
})

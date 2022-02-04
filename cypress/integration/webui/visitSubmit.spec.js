describe("Visit submit", () => {
	describe("unauthenticated feature", () => {
		it("should not allow unauthenticated routes to submit page", () => {
			cy.visit("/#/submit")
			cy.get(".auth-card")
				.should("be.visible")
			cy.contains("Login to WordClub")
				.should("be.visible")
			cy.get("Create post")
				.should("not.exist")
		})
	})

	describe("authenticated feature", () => {
		before(() => {
			cy.fixture("loginResponse").then(data => {
				window.localStorage.setItem("word-club-session", JSON.stringify(data))
			})
			cy.interceptFilter()
		})

		it("should allow authenticated route to submit page", () => {
			cy.visit("/#/submit")
			cy.get(".auth-card")
				.should("not.exist")
			cy.contains("Create post")
				.should("be.visible")
		})
	})
})

describe("Visit submit", () => {
	describe("unauthenticated feature", () => {
		it("should not allow unauthenticated routes to submit page", () => {
			cy.visit("/#/submit/type/editor/edit/community/")
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
			cy.intercept({
				method: "GET",
				url: Cypress.env("BACKEND_URL") + "/api/subscribed-community/filter/",
			}, {
				statusCode: 200,
				body: []
			}).as("subscribedCommunity")
		})

		it("should allow authenticated route to submit page", () => {
			cy.visit("/#/submit/type/editor/edit/community/")
			cy.get(".auth-card")
				.should("not.exist")
			cy.contains("Create post")
				.should("be.visible")
		})
	})
})

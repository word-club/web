describe("Visit submit", () => {
	const actor = {
		username: "alice",
		password: "XYBV123456789!@#"
	}
	it("should not allow unauthenticated routes to submit page", () => {
		cy.visit("/#/submit")
		cy.get(".auth-card")
			.should("be.visible")
		cy.contains("Login to WordClub")
			.should("be.visible")
		cy.get("Create post")
			.should("not.exist")
	})

	it("should allow authenticated route to submit page", () => {
		cy.deleteUserIfPresent(actor.username)
		cy.createUser(actor)
		cy.backendRequest({
			method: "POST",
			url: "login/",
			body: actor,
			as: "aliceLogin"
		})
		cy.get("@aliceLogin").then(response => {
			localStorage.setItem("word-club-api-access-token", response.body.token)
			localStorage.setItem("word-club-api-current-user", JSON.stringify(response.body.data))
		})
		cy.visit("/#/submit")
		cy.get(".auth-card")
			.should("not.exist")
		cy.contains("Create post")
			.should("be.visible")
	})
})

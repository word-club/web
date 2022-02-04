describe("Upvote Feature", () => {
	context("add upvote", () => {
		it("should increase the reaction count by 1 on a successful user upvote", () => {
			let upvoteCount = 0;
			const upVoteUrl = Cypress.env("BACKEND_HOST") + "/publication/10/upvote"

			// watch for the request under test progress
			cy.interceptFilter()
			cy.intercept("POST", upVoteUrl).as("upvote");

			cy.visit("/")
			cy.wait("@list")
				.its("response.statusCode")
				.should("eq", 200)

			// get the current reaction count
			cy.get("#publication-10")
				.within(() => {
					cy.get(".upvote-action").click()
					cy.get(".reaction-count")
						.then($count => {
							upvoteCount = parseInt($count.text());
						})
				})

			// wait for browser xhr to finish
			cy.wait("@upvote")
				.its("response.status")
				.should("eq", 200);

			// assert the refreshed reaction count
			cy.get("#publication-10")
				.within(() => {
					cy.get(".reaction-count")
						.then(($reactionsCount) => {
							const expectedCount = upvoteCount + 1
							const actualCount = parseInt($reactionsCount.text())
							expect(expectedCount).to.eq(actualCount)
						})
				})
		})
		it("another test case goes here", () => {})
	})
	context("another test context goes here", () => {})
})

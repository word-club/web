describe("Upvote Feature", () => {
	// actor we shall play around with throughout the test
	const actor = {
		first_name: "Alice", username: "alice",
		password: "XYBV123456789!@#",
	}
	context("add upvote", () => {
		before(() => {
			// stub necessary api routes involved
			cy.interceptBackend({ url: "s/publication/*", as: "list" })
			cy.interceptBackend({ url: "me/", as: "refreshMe" })
			cy.interceptBackend({ method: "POST", url: "publication/10/up-vote/", as: "upvote"})

			// seed a user in the backend
			cy.deleteUserIfPresent(actor)
			cy.createUser(actor)

			// a programmatic login
			cy.backendRequest({
				method: "POST", url: "login/",
				body: {
					username: actor.username,
					password: actor.password
				}, as: "login"
			})
			cy.get("@login").then(response => {
				console.log(response)
				// visits the homepage with the login data
				// substitution in the browser localStorage
				cy.mockLogin({
					token: response.body.token,
					user: response.body.data
				})
				cy.wait("@list")
			})
		})
		it("should increase the reaction count by 1 on a successful user upvote", () => {
			let upvoteCount = 0;

			// selectors that we need for the test
			const selectors = {
				targetPublication: "#publication-10",
				reactionsCount: ".reactions-count",
				upvoteButton: ".upvote-action"
			}

			// get the current reaction count of the  target  publication
			cy.get(selectors.targetPublication)
				.within(() => {
					cy.get(selectors.reactionsCount)
						.then($count => {
							upvoteCount = parseInt($count.text());
							cy.log(`Upvote count before click is ${$count.text()}`)
						})
					cy.get(selectors.upvoteButton).click()
				})
			// wait for browser XHRs to finish
			cy.wait("@upvote")
				.its("response.statusCode")
				.should("eq", 201)
			cy.wait("@refreshMe")
				.its("response.statusCode")
				.should("eq", 200)
			cy.wait("@list")
				.its("response.statusCode")
				.should("eq", 200)

			// assert the refreshed reaction count
			cy.get(selectors.targetPublication)
				.within(() => {
					cy.get(selectors.reactionsCount)
						.then(($reactionsCount) => {
							// should be one greater than the previous count
							const expectedCount = upvoteCount + 1
							const actualCount = parseInt($reactionsCount.text())
							expect(expectedCount).to.eq(actualCount)
						})
				})
		})
		it("another test case goes here", () => {
		})
	})
	context("another test context goes here", () => {
	})
})

import PostList from "./../../fixtures/postList.json"

describe("demonstrates xpath selector", () => {
	before(() => {
		const filterUrl = "s/publication/*"
		// stubbing the filter API hit at homepage mount
		cy.intercept({
			method: "GET",
			url: Cypress.env("BACKEND_URL") + filterUrl
		}, {
			statusCode: 200,
			body: PostList
		})
			.as("list")
	})
	it("should show correct number of publications", () => {
		cy.visit("/")
		cy.wait("@list").its("response.statusCode").should("eq", 200)
		cy.xpath("//div[@class='publication-list']")
			.should("be.visible")
			.within(() => {
				cy.xpath("//div[contains(@class, 'publication-item')]")
					.should("be.visible")
					.and("have.length", PostList.count)
			})
	})
})

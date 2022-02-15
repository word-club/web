import PostList from "../../fixtures/postList.json";

describe("demonstrates xpath selector", () => {
	before(() => {
		cy.interceptFilter()
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

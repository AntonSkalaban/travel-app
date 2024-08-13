describe("TourePage e2e", () => {
  it("shuld show toure cards", () => {
    cy.visit("/en/toure");

    cy.get("[data-testid='search-input']");

    cy.get('[data-testid="search-input"]').type("alaska");
    cy.get('[data-testid="search-input"]').should("have.value", "alaska");
    cy.get('[data-testid="suggestions-list"] li')
      .contains("Alaska")
      .should("be.visible");
    cy.get('[data-testid="search-input"]').trigger("keydown", { key: "Enter" });

    cy.url().should("include", "?q=alaska");

    cy.get("toure-card").find("h4");
  });
});

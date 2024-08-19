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

    cy.get("[data-testid='toure-card']").find("h4").should("contain", "Alaska");
  });

  it("shuld has infinity scroll", () => {
    cy.visit("/en/toure");

    cy.get("[data-testid='toure-card']")
      .should("have.length", 3)
      .then(() => {
        cy.scrollTo("bottom");

        cy.wait(2000);

        cy.get("[data-testid='toure-card']").should(
          "have.length.greaterThan",
          3,
        );
      });
  });
});

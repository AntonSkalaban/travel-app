describe("HomePage e2e", () => {
  it("HomeHeader", () => {
    cy.visit("/");

    cy.get("[data-testid='header-btn']").click();

    cy.url().should("include", "/toure");
  });

  it("Testimonies", () => {
    cy.visit("/");

    cy.get("[data-testid='btn-prev-slide']")
      .should("exist")
      .should("be.disabled");

    cy.get("[data-testid='btn-next-slide']")
      .should("exist")
      .should("not.be.disabled");

    cy.get("[data-testid='btn-next-slide']").click();
    cy.get("[data-testid='btn-next-slide']").should("be.disabled");
  });

  it("quick-booking-modla", () => {
    cy.visit("/");

    cy.get("[data-testid='booking-modal']").should("not.exist");

    cy.get("[data-testid='quick-booking-btn']").click();

    cy.get("[data-testid='booking-modal']").should("exist");
  });
});

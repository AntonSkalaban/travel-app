describe("CategorySection e2e", () => {
  it("Should have slider", () => {
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

  it("Should have quick-booking-modla", () => {
    cy.visit("/");

    cy.get("[data-testid='booking-modal']").should("not.exist");

    cy.get("[data-testid='quick-booking-btn']").click();

    cy.get("[data-testid='booking-modal']").should("exist");
  });
});

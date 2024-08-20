describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should submit the form successfully", () => {
    cy.get('form[data-testid="subscribe-form"]').within(() => {
      cy.get('input[name="email"]').type("test@example.com");
      cy.get("button").click();
      cy.get("button").should("be.disabled");
    });
  });

  it("should display validation errors", () => {
    cy.get('form[data-testid="subscribe-form"]').within(() => {
      cy.get("button").click();
    });

    cy.get('[data-testid="error-msg"]').should("be.visible");
  });
});

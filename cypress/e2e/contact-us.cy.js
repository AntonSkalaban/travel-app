describe("ContactUs e2e", () => {
  beforeEach(() => {
    cy.visit("/en/contact-us");
  });

  it("ContactUsForm error", () => {
    cy.get('[data-testid="form-error"]').should("not.exist");
    cy.get('[data-testid="contact-us-btn"]').click();
    cy.get('[data-testid="form-error"]').should("exist");
  });

  it("ContactUsForm success", () => {
    cy.get('[data-testid="form-error"]').should("not.exist");
    cy.get('[data-testid="fullName-input"]').type("John Sina");
    cy.get('[data-testid="email-input"]').type("test@example.com");
    cy.get('[data-testid="message-input"]').type("Hello world!");

    cy.get('[data-testid="contact-us-btn"]').click();
    cy.get('[data-testid="form-error"]').should("not.exist");
  });
});

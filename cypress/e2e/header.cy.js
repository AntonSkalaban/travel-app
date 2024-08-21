describe("Header e2e", () => {
  it("Nav", () => {
    cy.visit("/en");

    cy.get('div[data-testid="nav-container"]').within(() => {
      cy.get('a[href="/en"]').should("have.css", "color", "rgb(124, 106, 70)");
      cy.get('a[href="/en/rooms"]').should("have.css", "color", "rgb(0, 0, 0)");

      cy.get('a[href="/en/rooms"]').click();
      cy.get('a[href="/en/rooms"]').should(
        "have.css",
        "color",
        "rgb(124, 106, 70)",
      );
      cy.get('a[href="/en"]').should("have.css", "color", "rgb(0, 0, 0)");
      cy.url().should("include", "/rooms");
    });
  });

  it("LangSwitcher", () => {
    cy.visit("/en");

    cy.get('div[data-testid="nav-container"]').within(() => {
      cy.get('a[href="/en"]').should("exist");
      cy.get('a[href="/ru"]').should("not.exist");

      cy.get('button[data-testid="toggle-btn"]').click();

      cy.get('a[href="/ru"]').should("exist");
      cy.get('a[href="/en"]').should("not.exist");
      cy.url().should("include", "/ru");
    });
  });
});

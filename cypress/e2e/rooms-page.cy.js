describe("Rooms page", () => {
  it("Should scroll to cards", () => {
    cy.visit("/en/rooms");

    cy.spy(window, "scroll");

    cy.get('[data-testid="scroll-btn"]').should("exist");

    cy.get('[data-testid="scroll-btn"]').click();
    cy.get('[data-testid="rooms-list"]').should("be.visible");
  });

  it("Video", () => {
    cy.visit("/en/rooms");

    cy.get('[data-testid="video-btn"]').click();
    cy.get('[data-testid="video"]').should("have.prop", "paused", false);

    cy.get('[data-testid="video-btn"]').click();
    cy.get('[data-testid="video"]').should("have.prop", "paused", true);
  });
});

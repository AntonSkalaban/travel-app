describe("RoomPage e2e", () => {
  it("RoomsReservation", () => {
    cy.visit("/en/rooms/1");

    cy.get("[data-testid='reservation-btn']").click();

    cy.get("[data-testid='reservation-modal']").should("exist");
  });

  it("RoomImagesViewer", () => {
    cy.visit("/en/rooms/1");

    cy.get("[data-testid='big-img-container']").should("exist");
    cy.get("[data-testid='small-img-container']").should("exist");
  });
});

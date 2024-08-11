describe("CategorySection e2e", () => {
  it("Should have slider", () => {
    cy.visit("/");

    const prevBtn =  cy.get("[data-testid='btn-prev-slide']");
   
    prevBtn.should("exist").should("be.disabled");

    const nextBtn = cy.get("[data-testid='btn-next-slide']");

    nextBtn.should("exist").should("not.be.disabled");

    nextBtn.click();
    nextBtn.should("be.disabled");
  });

  it("Should have quick-booking-modla", () => {
    cy.visit("/");
    
    const bookingModal = cy.get("[data-testid='booking-modal']");

    bookingModal.should("not.exist");

    const quickBookingBtn = cy.get("[data-testid='quick-booking-btn']");
  
    quickBookingBtn.click();

    bookingModal.should("exist");
  });
});





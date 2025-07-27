describe('template spec', () => {
  it('passes', () => {
    cy.visit('/contact')
    cy.get('[data-testid="contactID"]').click();
    cy.contains('Home Component')
  })
})
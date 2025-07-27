describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Greeting').click()
    cy.contains('Welcome to ramesh')
  })
})
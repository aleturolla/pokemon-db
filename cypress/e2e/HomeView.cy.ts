// https://on.cypress.io/api

describe('HomeView', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Pokémon DB')
  })
})

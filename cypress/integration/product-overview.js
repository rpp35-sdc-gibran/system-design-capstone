const {
  default: createTypography,
} = require('@mui/material/styles/createTypography');

describe('User can change size option', () => {
  it('vists the home page', () => {
    cy.visit('http://localhost:8080/');
    cy.get('select').first().select('S');
    cy.get('select').first().next().children().should('have.length', 16);
  });
});

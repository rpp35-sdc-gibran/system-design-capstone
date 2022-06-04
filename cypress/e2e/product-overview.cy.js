/// <reference types="Cypress" />
import '@testing-library/cypress/add-commands';

const {
   default: createTypography,
} = require('@mui/material/styles/createTypography');

describe('User can load the page', () => {
   it('vists the home page', () => {
      cy.visit('/');
      cy.contains('Newest Products');
      cy.findAllByTestId('product-card').should('exist');
   });
   it('navigates to product page when product name is clicked', () => {
      cy.visit('/');
      cy.get('.product-card-name').first().click();
      cy.get('.product-productoverview').should('exist');
   });
});

describe('User can scroll to different modules', () => {
   it('loads related items when is in viewport', () => {
      cy.visit('/');
      cy.get('.product-card-name').first().click();
      cy.get('.product-productoverview').should('exist');
      cy.get('.product-related-items').scrollIntoView();
      cy.get('.product-carousel').should('exist');
   });
});

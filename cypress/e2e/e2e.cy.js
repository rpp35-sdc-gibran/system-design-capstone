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

   it('navigates between different products', () => {
      cy.visit('/');
      cy.findByLabelText('go to next product').click();
      cy.findByLabelText('go to next product')
         .click()
         .then(($product) => {
            cy.get('.product-card-name').first().should('not.equal', $product);
         });
   });
   it('allows user to navigate to other page', () => {
      it;
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

describe('User can interact with elements on product page', () => {
   it('allows user to add items to cart', () => {
      cy.visit('/');
      cy.get('.product-card-name').first().click();
      cy.findByTestId('select-size').select(1);
      cy.findByTestId('select-quantity').select(1);
      cy.findByLabelText('add item to cart').click();
      cy.findByText('Item has been added to your cart!').should('be.visible');
   });
   it('allows user to enter a question', () => {
      cy.visit('/');
      cy.get('.product-card-name').first().click();
      cy.get('.product-questions-answers').scrollIntoView();
      cy.findByText('Add a Question +').click();
   });
});

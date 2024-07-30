import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Amazon homepage', () => {
  cy.visit('/');
});

Then('I should see the cart icon', () => {
  cy.get('#nav-cart').should('exist');
});

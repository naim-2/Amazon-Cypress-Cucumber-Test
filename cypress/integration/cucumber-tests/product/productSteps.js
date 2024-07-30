import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Amazon homepage', () => {
  cy.visit('/');
});

When('I search for {string}', (searchTerm) => {
  cy.get('#twotabsearchtextbox').type(searchTerm);
  cy.get('#nav-search-submit-button').click();
});

When('I click on the first product', () => {
  cy.get('.s-main-slot .s-result-item').first().click();
});

Then('I should see the product title', () => {
  cy.get('.s-title-instructions-style').should('exist');
});

Then('the product price should be displayed', () => {
  cy.get('.a-price').should('exist');
});

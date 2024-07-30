import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Amazon homepage', () => {
  cy.visit('/');
});

When('I search for {string}', (searchTerm) => {
  cy.get('#twotabsearchtextbox').type(searchTerm);
  cy.get('#nav-search-submit-button').click();
});

Then('I should see search results for {string}', (searchTerm) => {
  cy.get('.s-main-slot').should('exist');
  cy.get('.s-main-slot').contains(searchTerm);
});

import { BASE_URL } from "../../src/api/exchanges";

Cypress.Commands.add("getExchanges", (data) => {
  const emptyResponse = data?.emptyResponse;
  if (emptyResponse) {
    cy.intercept(`${BASE_URL}/exchanges?per_page=10`, []).as("getExchanges");
  } else {
    cy.intercept(`${BASE_URL}/exchanges?per_page=10`).as("getExchanges");
  }
  cy.visit("/");
});

Cypress.Commands.add("getExchangeDetails", () => {
  cy.intercept(`${BASE_URL}/exchanges/binance`).as("getExchangeDetails");
  cy.visit("/exchanges/binance");
});

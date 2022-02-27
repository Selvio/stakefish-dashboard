export const getExchangesAlias = "@getExchanges";
export const getExchangeDetailsAlias = `@getExchangeDetails`;

describe("Home page", () => {
  it("renders spinner while fetching and hide it after api call response", () => {
    cy.getExchanges();
    cy.get("[data-testid='spinner']");
    cy.wait(getExchangesAlias);
    cy.get("[data-testid='spinner']").should("have.length", 0);
  });
  it("renders no data available message if api call returns empty array", () => {
    cy.getExchanges({ emptyResponse: true });
    cy.wait(getExchangesAlias);
    cy.contains("No data available");
  });
  it("renders exchanges list", () => {
    cy.getExchanges();
    cy.wait(getExchangesAlias).then((data) => {
      const exchanges = data?.response?.body || [{}];
      const firstExchangeName = exchanges[0].name;
      cy.get("tr").contains(firstExchangeName);
      cy.get("tr").should("have.length", exchanges.length + 1);
    });
  });
  it("renders official website link", () => {
    cy.getExchanges();
    cy.wait(getExchangesAlias).then((data) => {
      const exchanges = data?.response?.body || [{}];
      const firstExchangeUrl = exchanges[0].url;
      cy.get("tr").first().get(`a[href='${firstExchangeUrl}']`);
    });
  });
  it("details button redirect to details page", () => {
    cy.getExchanges();
    cy.wait(getExchangesAlias).then((data) => {
      const exchanges = data?.response?.body || [{}];
      const firstExchange = exchanges[0];
      const detailsUrl = `/exchanges/${firstExchange.id}`;
      cy.get("tr").first().get(`a[href='${detailsUrl}']`).click();
      cy.url().should("include", detailsUrl);
      cy.get("h1").contains(firstExchange.name);
    });
  });
});

describe("Details page", () => {
  it("displays exchange info", () => {
    cy.getExchangeDetails();
    cy.wait(getExchangeDetailsAlias).then((data) => {
      const exchange = data?.response?.body || {};
      const exchangeName = exchange.name;
      const exchangeCountry = exchange.country;
      cy.contains(exchangeName);
      cy.contains(exchangeCountry);
    });
  });
  it("back button on details page redirects to homepage", () => {
    cy.getExchangeDetails();
    cy.wait(getExchangeDetailsAlias);
    cy.contains("Back").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

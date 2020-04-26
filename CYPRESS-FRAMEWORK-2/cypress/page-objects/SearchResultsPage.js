import BasePage from "./BasePage";

export default class SearchResultsPage extends BasePage {

    static displayResults() {
        cy.get('h2').as('Title')
        cy.get('@Title').contains('Search Results')
    }
}
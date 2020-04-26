describe('Search Test', () => {

    let searchText = 'Hello world'

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into search box and submit via pressing enter key', () => {
        cy.get('#searchTerm').type(`${searchText}{enter}`)
    })

    it('Should show search results page', () => {
        cy.get('h2').contains('Search Results:').should('be.visible')
        //cy.xpath('/html/body/div[1]/div[2]/div/text()').should('', `No results were found for the query: ${searchText}`)

    })


})

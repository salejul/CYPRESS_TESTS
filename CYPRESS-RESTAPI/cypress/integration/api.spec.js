describe('REST API TEST', () => {
    it('API TEST - Validate Headers', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('Pokemon')
        cy.get('@Pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })

    it('API TEST - Validate Status Code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/20').as('Pokemon')
        cy.get('@Pokemon').its('status').should('eq', 200)
    })

    it('API TEST - Validate Name Value', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('Pokemon')
        cy.get('@Pokemon').its('body').should('include', { name: 'pikachu', height: 4, id: 25, order: 35 })
    })

    it('API TEST - Validate Negative Status Code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/1000',
            failOnStatusCode: false

        }).as('Pokemon')
        cy.get('@Pokemon').its('status').should('eq', 404)
    })

})

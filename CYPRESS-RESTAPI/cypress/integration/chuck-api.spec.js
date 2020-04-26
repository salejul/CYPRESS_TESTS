describe('REST API TESTS', () => {

    before(() => {
        cy.request('https://api.chucknorris.io/jokes/random').as('Random')
    })

    it('API TEST - Validate Headers', () => {
        cy.get('@Random').its('headers').its('content-type').should('include', 'application/json;charset=UTF-8')
        cy.get('@Random').its('status').should('eq', 200)
        cy.get('@Random').its('body').should('include', { icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png" })
    })
})

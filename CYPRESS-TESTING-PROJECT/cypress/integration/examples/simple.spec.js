describe('Browser actions', () => {
    it('Should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('Before reload.')
        cy.reload()
        cy.log('After reload.')
    })

    it('Should click the Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    })

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })


})

describe('Challenge time!', () => {
    it('Should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
    })

    it('Should click the Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    })

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its("length").should('eq', 11)
    })

    it('Should click the Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').should('have.text', 'Poetry')
    })

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 19)
    })

    it('Should click the Olio link', () => {
        cy.get('a').contains('Olio').click()
    })

    it('Should verify the correct price', () => {
        cy.get('.price_color').contains('23.88')
    })
})









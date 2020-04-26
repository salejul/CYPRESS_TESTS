describe('Keys and select simulation', () => {
    it('Should simulate some actions', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')

        cy.get('#tried-test-cafe').click()
        cy.get('span').type('{rightarrow}{rightarrow}{leftarrow}')
    })

    it('Should select the select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')
    })
})

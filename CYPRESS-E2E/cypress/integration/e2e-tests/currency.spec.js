describe('Purchase Foreign Currency Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.login('username', 'password')
    })

    it('Should purchase foreign currency', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('JPY')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()


    })

    it('Should display correct amount', () => {
        cy.get('#pc_conversion_amount').should('be.visible').and('contain.text', '80385.85 yen (JPY) = 1000.00 U.S. dollar (USD)')

    })
})

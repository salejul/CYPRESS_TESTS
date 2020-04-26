describe('Transfer Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.login('username', 'password')
    })

    it('Should make transfer', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').select('4')
        cy.get('#tf_toAccountId').select('3')
        cy.get('#tf_amount').type('10000')
        cy.get('#tf_description').type('This is how we roll')
        cy.get('#btn_submit').click()
    })

    it('Should verify the transfer', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Loan')
        cy.get('#tf_toAccountId').should('have.value', 'Savings')
        cy.get('#tf_amount').should('have.value', '10000')
        cy.get('#tf_description').should('have.value', 'This is how we roll')
        // cy.get('#btn_submit').click()
        // cy.get('#board-content').should('be.visible')
        // cy.get('.alert-success').should('be.disabled')
    })
})
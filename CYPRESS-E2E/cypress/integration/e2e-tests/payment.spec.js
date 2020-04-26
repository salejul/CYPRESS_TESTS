describe('New Payment Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.login('username', 'password')
    })

    it('Should send a new payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('5')
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2020-01-19 {enter}')
        cy.get('#sp_description').type('Some desc.')
        cy.get('#pay_saved_payees').click()
    })

    it('Should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain.text', 'successfully submitted')
    })


})
describe('New Payee Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.login('username', 'password')

        //can be done with fixture as well
    })

    it('Should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('My address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Some descriptive details')
        cy.get('#add_new_payee').click()
    })

    it('Success message is properly displayed', () => {
        cy.get('#alert_content').should('be.visible').and('contain.text', 'The new payee Name was successfully created.')
    })


})

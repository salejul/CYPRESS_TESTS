export default class AccountLinks {

    static clickSummaryTab() {
        cy.get('#account_summary_tab').click()
    }

    static clickActivityTab() {
        cy.get('#account_activity_tab').click()
    }

    static clickTransferFundsTab() {
        cy.get('#transfer_funds_tab').click()
    }

    static clickPayBillsTab() {
        cy.get('#pay_bills_tab').click()
    }

    static clickMoneyMapTab() {
        cy.get('#money_map_tab').click()
    }

    static clickOnlineStatementsTab() {
        cy.get('#online_statements_tab').click()
    }
}
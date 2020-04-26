export default class BasePage {

    static pause(time) {
        cy.wait(time * 1000)
    }
}
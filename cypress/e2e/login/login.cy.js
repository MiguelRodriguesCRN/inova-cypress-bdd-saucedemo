/// <reference types="cypress" />

context('Acesso a pagina de Login', () =>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });

    afterEach(() => {
        cy.clearAllSessionStorage({log: true})
        cy.screenshot()
    });

    it('Login Válido', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should("contain","Products")

    });

})
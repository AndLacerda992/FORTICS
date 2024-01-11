  import { gn } from '../variaveis';

describe('Teste login', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

    it('Entrar', () => {
        cy.visit(gn.url)
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('login', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit(gn.url);
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click();
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click();
        cy.get('.svg-inline--fa').click();
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .btn_secondary').click();
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .btn_secondary').click();
        cy.get('.btn_action').click();
        cy.get('[data-test="firstName"]').type('Anderson ');
        cy.get('[data-test="lastName"]').type('Lacerda');
        cy.get('[data-test="postalCode"]').type('02464090');
        cy.get('.btn_primary').click();
        cy.get('.btn_action').click();
        /* ==== End Cypress Studio ==== */
    });
})

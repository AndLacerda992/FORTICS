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
    /* ==== End Cypress Studio ==== */
    });
})

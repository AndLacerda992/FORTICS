  import { gn } from '../variaveis';

describe('Teste login', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

    it('Entrar', () => {
        cy.visit(gn.url)
    })

    it('login standard', function() {  
        // Realizando acesso a pagina saucedemo     
        cy.visit(gn.url);

        // Realizando login com usuario disponibilizado
        cy.get('#user-name').type('standard_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    })

    it('login problem', function() {  
        // Realizando acesso a pagina saucedemo     
        cy.visit(gn.url);

        // Realizando login com usuario apresentando problema nas imagens de anuncio
        cy.get('#user-name').type('problem_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.screenshot('Evidencia homepage');
    })

    it('login locked', function() {  
        // Realizando acesso a pagina saucedemo     
        cy.visit(gn.url);

        // Realizando login com usuario bloqueado
        cy.get('#user-name').type('locked_out_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]')
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.screenshot('Evidencia Login');

    })
})

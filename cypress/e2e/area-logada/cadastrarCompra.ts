import { gn } from '../global/variaveis';

describe('Teste compra', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

   
    /* ==== Test Created with Cypress Studio ==== */
    it('Adicionar carrinho de compra', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit(gn.url);
              
        cy.get('btn_primary btn_inventory').click();
        cy.get('svg-inline--fa fa-shopping-cart fa-w-18 fa-3x').click();

    /* ==== Continue comprando ==== */

        cy.get('//*[@id="cart_contents_container"]/div/div[2]/a[1]').click();
        cy.get('btn_secondary btn_inventory/a[1]').click();
        cy.get('svg-inline--fa fa-shopping-cart fa-w-18 fa-3x').click();
        cy.get('btn_action checkout_button').click();
        
    /* ==== Preenchendo Dados ==== */    
        
        cy.get('#first-name').type('Anderson',{ force: true });
        cy.get('#last-name').type('Lacerda',{ force: true });
        cy.get('#postal-code').type('02464090', {force: true});
        cy.get('//*[@id="checkout_info_container"]/div/form/div[2]/input').click();
        cy.get('btn_action cart_button').click();
         
    });

})

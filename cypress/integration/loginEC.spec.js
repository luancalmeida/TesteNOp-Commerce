/// <reference types="cypress" />

import Login from '../support/pages/Login'



describe('Teste Login', () => {
    Login.acessarLogin();
    


    it('Login e compras', () => {
        
        Login.digitarLogin();

        //buscar itens
        Login.itensTs();

        //adicinar items camisa e calça
        Login.adicinarCamisa();

        
        Login.adicionarCalca();

        //confirmar e validar compras no carrinho
        Login.ConfirmarEValidarCart();

        //escolher transporte
        cy.get('#shippingoption_1').click()
        cy.get('#shipping-method-buttons-container > .button-1').click()

        //Escolher pagamento

        cy.get('#paymentmethod_0').click()
        cy.get('#payment-method-buttons-container > .button-1').click()

        //Confirmar dados
        cy.get('#payment-info-buttons-container > .button-1').click()

        //Confirmar pagamento
        cy.get('#confirm-order-buttons-container > .button-1').click()

        



    });
});
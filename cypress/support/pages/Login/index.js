//ação de interação da pg
const elem = require('./elements').Elementos;

class Login{
    acessarLogin(){
        before(() => {
            cy.visit('https://demo.nopcommerce.com/')
        });
    }

    digitarLogin(){
        cy.get(elem.botãoLogin).click()
        cy.get(elem.id).type('an.almeida@gmail.com')
        cy.get(elem.senha).type('Sudar1234a!')

        cy.get(elem.confirmarLogin).click()
    }
    itensTs(){
        cy.get(elem.btMenu).click()
        cy.get(elem.btRoupa).click()
        cy.get(elem.btTCamisas).click()
        cy.get(elem.lstCam).click()

    }
    adicinarCamisa(){
            //adicinar items camisa
        cy.get(elem.btTShilt).click()
        cy.get(elem.quantProduto).clear().type(2)
        cy.get(elem.btTamanho).type('G')
        cy.get(elem.addCart).click()
    }

    //adicinar items calça
    adicionarCalca(){
        cy.get(elem.imgCalça).click()
        cy.get(elem.quantCalça).clear().type(4)
        cy.get(elem.addCArt).click()
        cy.get(elem.Confirmar).click()

    }

    //confirmar e validar compras no carrinho
    ConfirmarEValidarCart(){
    cy.get(elem.tbTermo).click()

    cy.get(elem.btChekout).click()

    cy.get(elem.frmpaises).select('Brazil')
    cy.get(elem.estado).type('Salvador')
    cy.get(elem.endPrincipal).type('Rua ficticia')
    cy.get(elem.endSecundario).type('Rua ilusão')
    cy.get(elem.cep).type('40349390')
    cy.get(elem.tel).type('716556556')
    cy.get(elem.confChecKout).click()
    }

}

export default new Login;


   


/// <reference types="cypress" />

describe('Teste funcional Resgistro', () => {
    before(() => {
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
    });
    it('Logar', () => {
        
        cy.get('#gender-male').click()
        cy.get('#FirstName').type('ana Costa')
        cy.get('#LastName').type('Almeida')
        cy.get('[name="DateOfBirthDay"]').select(['9'])
        cy.get('[name="DateOfBirthMonth"]').select(['2'])
        cy.get('[name="DateOfBirthYear"]').select(['1997'])
        cy.get('#Email').type('an.almeida@gmail.com')
        cy.get('#Company').type('Anima')
        cy.get('#Password').type('Sudar1234a!')
        cy.get('#ConfirmPassword').type('Sudar1234a!')

        

        cy.get('#register-button').click()

       

    });
   
});
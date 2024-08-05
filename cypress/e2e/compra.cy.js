/// <reference types='cypress'/>

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve selecionar produto presente na lista', () => {

        cy.get('[class="product-block grid"]')
            //.last()
            //.eq(6)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    })


    it.only('Deve adicionar um produto da lista no carrinho', ()=>{
        var quant = 8;

        cy.get('[class="product-block grid"]').eq(7).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant)
        cy.get('.woocommerce-message').should('contain', quant)
        

        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart-subtotal > th').should('contain', 'Subtotal')
        cy.get('.order-total > th').should('contain', 'Total')

        cy.get('.checkout-button').click()
        cy.get('.page-title').should('contain', 'Checkout')


        

    })
})
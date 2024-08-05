/// <reference types='cypress' />

describe('Funcionalidade pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer o pré-cadastro com sucesso', () => {
        var rondom = `${Date.now()}`

        cy.get('#reg_email').type('ruben' + `${rondom}` + '@gmail.com')
        cy.get('#reg_password').type('ruben' + `${rondom}` + 'teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('.form-row-first > label').should('contain', 'First name')

        cy.get('#account_first_name').type('Ruben')
        cy.get('#account_last_name').type('Manuel' + `${rondom}`)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')





    })

})
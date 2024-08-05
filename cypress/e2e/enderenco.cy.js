/// <reference types='cypress' />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade  Enderenço - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.name, dados.email)
        })
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve editar o enderenço de faturação com sucesso', () => {

        enderecoPage.editarEnderecoFaturamento('Ruben', 'Manuel', 'Google', 'Angola', 'Rocha Pinto', 'Rua da Enana', 'Luanda', 'Luanda', '934856823', 'rubensapalo@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });


    it.only('Deve editar o enderenço de faturação com sucesso - Usando massa de dados em lista', () => {

        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].firstName,
            dadosEndereco[1].lastName,
            dadosEndereco[1].company,
            dadosEndereco[1].country,
            dadosEndereco[1].address1,
            dadosEndereco[1].address2,
            dadosEndereco[1].city,
            dadosEndereco[1].state,
            dadosEndereco[1].phone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });



});

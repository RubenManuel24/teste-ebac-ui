/// <reference types='cypress' />

describe('Funcionalidade login', () => {

  it('Deve fazer login com sucesso.', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac-7841 (não é aluno_ebac-7841? Sair)')


  })

  it('Deve exibir uma mensagem de erro ao inserir um usário inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste2.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  })

  it('Deve exibir uma mensagem de erro ao inserir um usário inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste2.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

  })

})
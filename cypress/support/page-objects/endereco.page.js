class EnderecoPage {

    editarEnderecoFaturamento(firstName, lastName, company, country, address1, address2, city, state, phone, email){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type(company)
        cy.get('#select2-billing_country-container').click().type(country+'{enter}')
        cy.get('#billing_address_1').clear().type(address1)
        cy.get('#billing_address_2').clear().type(address2)
        cy.get('#billing_city').clear().type(city)
        cy.get('#select2-billing_state-container').click().type(state).get('[aria-selected="true"]').click()
        cy.get('#billing_phone').clear().type(phone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
    }

    editarEnderecoEntrega(){

    }

}

export default new EnderecoPage()
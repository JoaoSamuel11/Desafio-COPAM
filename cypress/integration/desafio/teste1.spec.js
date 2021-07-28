/// <reference types="cypress" />

context('testar se o botão start retorna o texto hello world', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
      })

    it('testar o botão', ()=>{
        cy.get('button').click();
        cy.get('#finish > h4').should('have.text', 'Hello World!');
    })
})
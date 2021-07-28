/// <reference types="cypress" />

context('testar os botões ', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
      })

      it('testar os botões de edit e delete do grid', ()=>{
        //edit
        cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click();
        cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click();
        //delete
        cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click();
        cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click();
      })

      it('testar os 3 botões dinamios da tela', ()=>{
          cy.get('.large-2 > a').eq(0).click()
          cy.get('.large-2 > a').eq(1).click()
          cy.get('.large-2 > a').eq(2).click()
      })


})
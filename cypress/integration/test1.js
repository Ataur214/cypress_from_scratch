/// <reference types="Cypress" />


describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type("ca");
        //parent child chaining 
        cy.get('.products').find('.product').should('have.length',4);
        cy.wait(2000);
        //Index element, in selenium we used get() index
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    
        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const productName = $el.contents('.product-name').text();
            if(productName.includes("Capsicum")){
                cy.wrap($el).contains('ADD TO CART').click();
            }
        })

        cy.get('.search-keyword').clear();
        cy.get('.search-keyword').type("Cucumber");
        cy.get('.products > .product').should('have.length',1);
        cy.get('.products > .product').should('be.visible');
    })
  })
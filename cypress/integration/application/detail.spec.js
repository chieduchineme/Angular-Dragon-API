context('Application Dragon api', () => { 
  describe('Accessing Detail dragon', function() { 
    let id = {};
    beforeEach(function () {
      cy.visit('http://localhost:4200/');
      cy.get('[data-cy=username]').type('demo');
      cy.get('[data-cy=password]').type('demo');
      cy.wait(1000);
      cy.get('[data-cy=cySubmit]').click();  
      cy.wait(2000);
      cy.get('[data-cy=id]').eq(0).should(($identifier) => {
        id = $identifier[0].innerText;
      });
    });
    it('successfully loads detail', function() { 
      cy.get('[data-cy=btn-view]').eq(0).click(); 
      cy.url().should('include', `/detail/${id}`);
      cy.wait(1000);
      cy.location().should(loc => {
        expect(loc.href).to.eq(`http://localhost:4200/detail/${id}`);
      });
    });
  });
});
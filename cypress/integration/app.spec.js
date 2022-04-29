describe('the password automation form', () => {
    it('load successfully', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('h3').should('contain.text', 'Password simulation');
    });
  
    it('show error when password is not satisfied', () => {
      cy.get('input#user-password').type('12345');
      cy.get('p#user-message').should(
        'contain.text',
        'password is not long enough and that the password does not include a letter.',
      );
      cy.get('p#user-error').should('contain.text', 'Password is not accepted');
      // cy.get('input#user-password').clear();
    });
    it('show password accepted when valid password is entered', () => {
      cy.get('input#user-password').clear().type('password123');
      cy.get('p#user-accept').should('contain.text', 'password is accepted');
    });
  
    it('should show error when invalid password is entered in admin', () => {
      cy.get('input#admin-password').clear().type('password123');
      cy.get('p#admin-error').should('contain.text', 'password is not accepted');
    });
  
    it('should accept valid admin password',()=>{
      cy.get('input#admin-password').clear().type('password123!@##');
      cy.get('p#admin-accept').should('contain.text','password is accepted')
    })
  });
  
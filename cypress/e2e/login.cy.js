describe('OrangeHRM Login Scenarios', () => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  it('should log in with valid credentials', () => {
    cy.visit(url);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('should not log in with invalid credentials', () => {
    cy.visit(url);
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('wrongPassword');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('should show validation for empty username and password', () => {
    cy.visit(url);
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-group .oxd-text--span').should('contain', 'Required');
  });
});
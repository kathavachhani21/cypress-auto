describe('OrangeHRM Admin User Management', () => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers';

  beforeEach(() => {
    // Login before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.visit(url);
  });

  it('should add a new user', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.oxd-select-text-input').first().click();
    cy.contains('.oxd-select-dropdown', 'ESS').click();
    cy.get('.oxd-autocomplete-text-input > input').type('Admin Cypress');
    cy.get('.oxd-select-text-input').contains('-- Select --').click();
    cy.contains('.oxd-select-dropdown', 'Disabled').click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admincypress');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button--secondary').click();
    cy.log('As we are using the demo website we cannot create a new user');
  })

   it('should update a existing user', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click();
    cy.get('.oxd-checkbox-input > .oxd-icon').click();
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button--secondary').click();
    cy.log('As we are using the demo website we cannot see the updated data after saving');
  })

  it('should delete a user', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.log('As we are using the demo website we cannot see the deleted data after saving');
  })
  it('should search for a user', () => {
    cy.get('.oxd-autocomplete-text-input > input').type('Admin Cypress');
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-autocomplete-text-input > input').clear();
    cy.get('.oxd-button--secondary').click();
  })
});
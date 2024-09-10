// cypress/support/commands.js

Cypress.Commands.add('login', () => {
  const username = Cypress.env('CYPRESS_USERNAME');
  const password = Cypress.env('CYPRESS_PASSWORD');

  // Log para verificar valores das variáveis
  cy.log('Username:', username);
  cy.log('Password:', password);

  if (!username || !password) {
    throw new Error('Username ou password eh undefined');
  }

  cy.visit('/login_page.php'); // Usando caminho relativo
  cy.get('#username').clear().type(username);
  cy.get('.width-40').click();
  cy.url().should('include', '/login_password_page.php');

  cy.get('#password').type(password);
  cy.get('.width-40').click();
  cy.url().should('include', '/index.php');
});

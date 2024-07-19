describe('Mantis Test Automation - Total Time Measurement', () => {
  const baseUrl = 'https://mantis-prova.base2.com.br';
  const username = 'Bruno_Souza';
  const password = 'mantis2024';

  it('should measure total test execution time', () => {
    // Registra o tempo de início do teste
    const testStartTime = new Date().getTime();

    // Visita a página inicial do Mantis antes de começar os testes
    cy.visit(`${baseUrl}/login_page.php`);

    // Confirmar que a página de login está visível
    cy.url({ timeout: 10000 }).should('include', '/login_page.php');

    // Realizar o login
    cy.get('#username').type(username);
    cy.get('.width-40').click();

    // Esperar pela página de senha e fazer o login
    cy.url({ timeout: 10000 }).should('include', '/login_password_page.php');
    cy.get('#password').type(password);
    cy.get('.width-40').click();

    // Esperar pela página my_view_page.php
    cy.url({ timeout: 10000 }).should('include', '/my_view_page.php');

    // Registra o tempo de término do teste
    cy.window().then(() => {
      const testEndTime = new Date().getTime();
      const totalTestTime = testEndTime - testStartTime;

      // Logar o tempo total de execução do teste
      cy.log(`Tempo total de execução do teste: ${totalTestTime} ms`);
    });
  });
});

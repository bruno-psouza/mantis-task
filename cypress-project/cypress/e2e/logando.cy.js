describe('Mantis Test Automation', () => {
  const baseUrl = 'https://mantis-prova.base2.com.br';
  const username = 'Bruno_Souza';  // Credenciais de login
  const password = 'mantis2024';   // Senha de login

  before(() => {
    // Visita a página inicial do Mantis antes de começar os testes
    cy.visit(`${baseUrl}/login_page.php`);
  });

});

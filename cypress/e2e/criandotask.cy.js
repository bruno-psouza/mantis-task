const palavras = require('../support/palavras-ptbr');

describe('Mantis Bug Report Automation', () => {
  const baseUrl = 'https://mantis-prova.base2.com.br';

  function gerarTextoAleatorio(tamanho) {
    return Array.from({ length: tamanho }, () => palavras[Math.floor(Math.random() * palavras.length)]).join(' ');
  }

  it('Performs login and bug report', () => {
    cy.visit(`${baseUrl}/login_page.php`);

    cy.get('#username').type('Bruno_Souza');
    cy.get('.width-40').click();

    cy.url({ timeout: 10000 }).should('include', '/login_password_page.php');

    cy.get('#password').type('mantis2024');
    cy.get('.width-40').click();

    cy.url({ timeout: 10000 }).should('include', '/my_view_page.php');

    cy.visit(`${baseUrl}/bug_report_page.php`);
    cy.url({ timeout: 10000 }).should('include', '/bug_report_page.php');

    cy.get('#category_id').select('2');
    cy.get('#severity').select('50');
    cy.get('#priority').select('50');
    cy.get('#summary').type(gerarTextoAleatorio(2));
    cy.get('#description').type(gerarTextoAleatorio(3));
    cy.get('#steps_to_reproduce').type(gerarTextoAleatorio(4));
    cy.get('#additional_info').type(gerarTextoAleatorio(5));
    cy.get('.btn-primary').click();
   // cy.get('#report_bug_form').submit();
  });
});

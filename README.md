
---

# Mantis Test Automation

Este repositório contém testes automatizados para o sistema Mantis, utilizando Cypress

## Estrutura do Projeto

O projeto é dividido em diferentes arquivos de configuração e testes. 

### Arquivos e Configurações

#### `cypress.config.js`

Configurações principais do Cypress, incluindo a URL base e configurações para componentes Vue com Vite.

#### `commands.js`

Contém comandos personalizados para o Cypress, como o comando de login.

#### `palavras-ptbr.js`

Arquivo de palavras em português para geração de textos aleatórios em testes.

### Testes

#### `logando.cy.js`

Este arquivo contém o teste de login, que visita a página de login, preenche as credenciais e verifica se o redirecionamento para a página correta ocorre.

#### `criandotask.cy.js`

Realiza o login e a criação de um relatório de bug. Utiliza palavras aleatórias para preencher os campos do relatório.

#### `performance.cy.js`

Mede o tempo total de execução do processo de login até a navegação para a página `my_view_page.php`.

### Arquivo de Ambiente

#### `.env`

Este arquivo contém as variáveis de ambiente para o Cypress, como o nome de usuário e a senha para login.

### Executando os Testes

Para executar os testes, siga as etapas abaixo:

1. **Instale as dependências**:

   ```bash
   npm install
   ```
2. **Configure as variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   CYPRESS_USERNAME=Bruno_Souza
   CYPRESS_PASSWORD=mantis2024
   ```
3. **Execute os testes**:

   ```bash
   npx cypress open
   ```

   ou

   ```bash
   npx cypress run
   ```

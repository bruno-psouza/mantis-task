// cypress.config.js
const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config(); // Carrega variáveis do arquivo .env

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mantis-prova.base2.com.br',
    setupNodeEvents(on, config) {
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  },
});


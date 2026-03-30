const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embedScreenshots: true,
      inlineAssets: true, 
      saveAllAttempts: false,
    },
  },

  chromeWebSecurity: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // Necessário para o cypress-mochawesome-reporter funcionar:
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    blockHosts: ["*.backtrace.io"],
  },
});
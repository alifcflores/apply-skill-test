const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
    },
  },
  env: {
    USER_EMAIL:'Mariana.Kohler@orderly-airfield.com',
    USER_PASSWORD:'nnMkPmvc779BnbWKHki7'
  }
});

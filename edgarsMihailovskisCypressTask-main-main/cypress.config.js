const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: 'sx3u2u',
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://lv.sportsdirect.com",
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      html: false,
      overwrite: false,
      
    },
    setupNodeEvents(on, config) {},
  },

  
});

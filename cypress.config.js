const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: false,
  video: false,
  watchForFileChanges: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/video",
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

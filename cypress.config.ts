import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "rircmo",
  e2e: {
    experimentalStudio: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

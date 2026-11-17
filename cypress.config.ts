import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    apiBaseUrl: process.env.CYPRESS_API_BASE_URL ?? "https://jsonplaceholder.typicode.com",
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
  },
});
// cypress.config.ts  
import { defineConfig } from 'cypress';  

export default defineConfig({  
  e2e: {  
    // Your E2E configuration options  
    baseUrl: 'http://localhost:3000',  
    supportFile: 'cypress/support/index.ts',  
    specPattern: 'cypress/e2e/**/*.cy.ts',  
  },  
});
# Cypress Project

Cypress end-to-end tests for SauceDemo and API tests for JSONPlaceholder.

## Requirements

- Node.js 22.12+, 24.x, or 26+
- npm 10+
- Internet access to install packages and run the tests against the external test sites

The supported Node versions match the Cypress and Oxlint requirements. If you use nvm, run `nvm use` to select the version in `.nvmrc`.

## Setup

Clone the repository, then from its root run:

```sh
npm ci
```

`package-lock.json` pins the dependency tree. Use `npm ci` for a clean, reproducible install; it requires no globally installed Cypress or TypeScript. The Cypress package downloads its test runner during installation.

## Run

```sh
npm test                 # Run all Cypress tests headlessly
npm run cy:run:api       # Run only JSONPlaceholder API tests
npm run cy:open          # Open Cypress interactively
npm run type-check       # Check TypeScript
npm run lint             # Run Oxlint
```

The end-to-end tests use the public SauceDemo site and the API tests use JSONPlaceholder, so those services must be reachable. The API base URL can be overridden with `CYPRESS_API_BASE_URL`.

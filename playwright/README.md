# Playwright test harness

This folder contains a reusable [Playwright](https://playwright.dev/) setup for running browser-based integration tests across multiple projects.

## Features
- Multi-browser coverage (Chromium, Firefox, WebKit) using Playwright projects.
- Parallel execution with retries and CI-aware worker limits.
- HTML and JSON reporting saved under `reports/` for easy sharing.
- Centralized configuration via `.env` (e.g., `BASE_URL=http://localhost:3000`).
- TypeScript-enabled tests with strict settings for maintainability.

## Getting started
1. Install dependencies
   ```bash
   cd playwright
   npm install
   ```
2. Configure environment
   - Copy `.env.example` to `.env` and set `BASE_URL` to the application under test.
   - Without a `BASE_URL`, smoke tests will be skipped to avoid false failures.
3. Run tests
   ```bash
   npm test
   ```
   - Headed mode for debugging: `npm run test:headed`
   - Code generation for new flows: `npm run codegen`
   - View the latest HTML report: `npm run show-report`

## Adding projects
- Create additional configuration files or extend `playwright.config.ts` with new `projects` entries (e.g., mobile emulation or staging environments).
- Place new specs under `tests/` and use `test.describe` blocks to group suites per project or feature.

## Reports and artifacts
- HTML reports: `reports/html/index.html`
- JSON summary: `reports/results.json`
- Traces, videos, and screenshots: `tmp/test-results/`

## Conventions
- Keep tests small and isolated; prefer realistic user journeys over direct API calls.
- Use environment variables for secrets and environment-specific URLs.
- Avoid hardcoding ports—default to `BASE_URL` instead.

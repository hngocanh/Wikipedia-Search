This repository contains simple automated UI tests framework for Wikipedia Search written with TypeScript and Playwright.

If you want to run test locally, please follow these steps:

1. Clone this repository
2. Make sure you have node.js installed. If you don't, please visit official website (https://nodejs.org/en) for instructions
3. Run npm install to install node modules

That's it, now you can run tests with 'npm run test' - it will run tests in 3 browsers (chromium, firefox, webkit) in parallel.

By default, the tests are run in headless mode. If you want to run them in headed mode, then change configuration to headless: true in playwright.config.js

In order to view the test report, run 'npm run report'.
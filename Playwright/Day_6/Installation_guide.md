
To install Playwright

1. **Install Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. **Install Playwright**: Open your terminal or command prompt and run the following command:
   ```bash
   npm init playwright@latest
   ```
3. **Install Browsers**: After installing Playwright, you need to install the browsers it supports. Run:
   ```bash
   npx playwright install
   ```
4. **Verify Installation**: You can verify that Playwright is installed correctly by running:
   ```bash
   npx playwright test
   ```
5. **Create a Test File**: Create a new file named `example.spec.ts` and add the following code to test Playwright:
   ```typescript
syntax of the code:

test("title",({page})=>{
//Step1:console.log("hello world")
//Step2:await page.goto("https://www.google.com")
//Step3:expect(page).toHaveTitle("Google")
})

   import { test, expect } from '@playwright/test';

   test('basic test', async ({ page }) => {
       await page.goto('https://example.com');
       expect(await page.title()).toBe('Example Domain');
   });
    ```
6. **Run the Test**: Execute the test by running:
   ```bash
    npx playwright test example.spec.ts
    ```

7. Import Playwright module in your TypeScript file:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```


8. **Explore Playwright**: You can now start exploring Playwright's features, such as page interactions, selectors, and more. Check the [Playwright documentation](https://playwright.dev/docs/intro) for detailed guides and examples.
```typescript
// Example of a simple Playwright test
import { test, expect } from '@playwright/test';

test('simple test', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
});

9. Running Tests and Debugging:
   - To run all tests, use:
     ```bash
     npx playwright test
     ```
   - For debugging, you can run tests in headed mode:
     ```bash
     npx playwright test --headed
     ```
     - To run a specific test file:
     ```bash
       npx playwright test example.spec.ts
       ```
   - Open the HTML report after running tests:
     ```bash
     npx playwright show-report
     ```
     - run test in Chrome browser:
     ```bash   
       npx playwright test --browser=chromium
       ```
  - run test in debug mode:
  ```bash
      npx playwright test --debug

   - run test in UI mode:
```bash
      npx playwright test --ui

```


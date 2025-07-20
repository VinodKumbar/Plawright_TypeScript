Auto-waiting in Playwright
==========================
Auto waiting feature of Playwright works for all the locators. 
It waits until the element becomes visible and enabled or clickable.
Playwright performs a range of actionnability checks before performing any operation on an element.
Visble , State, Enabled etc.

If the required checks do not pass within the given timeout, action fails with a timeout error.


Timeout = 30 seconds what is Timeout Error ?

Timeout error occurs when a test case fails to execute within the specified time limit.

For Assertions default timeout is 5 seconds.
For Actions default timeout is 30 seconds.

1. Assertion Autowait works with all the locators.
2. Actions Autowait works with all the actions.


####################################################################################################

Assertions 

There are two types of assertions in Playwright:
1. Auto-retying assertions - it will follow the timeouts set by playwright.
   - These assertions will automatically retry until the condition is met or the timeout is reached.
   - Example: `await expect(locator).toBeVisible();`
2. Non-retying assertions - it will not follow the timeouts set by playwright.
   - These assertions will not automatically retry and will fail immediately if the condition is not met.
   - Example: `assert.strictEqual(await locator.textContent(), 'Hello World');`

   ####################################################################################################

   Codegen feature in Playwright
   - Playwright provides a code generation feature that allows you to generate test scripts automatically.

    - To use the codegen feature, you can run the following command in your terminal:
      ```
      npx playwright codegen 
      ```

      - Automatically save the code to a file by using the `--output` option:
      ```
      npx playwright codegen --output my-test.js https://demowebshop.tricentis.com/
      ```
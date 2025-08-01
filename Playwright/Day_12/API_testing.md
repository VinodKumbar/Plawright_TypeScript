Skip BDD Cucumber with Playwright

BDD with Cucumber + Playwright + TypeScript is used, but it's not as widely adopted as using Playwright with the built-in test runner (@playwright/test) alone. However, teams who prefer Behavior-Driven Development (BDD) or come from a Selenium + Cucumber background do often integrate Cucumber with Playwright.

*************************************************************************************************************************************

Grouping Tests with test.describe.serial()

1. test.describe.serial is used to group multiple tests together.
2. .serial ensures the tests inside run sequentially, in the order written.
3. If one test fails, the next ones won’t run (unlike regular test.describe, where they run independently).
4. Useful when tests are dependent on each other (e.g., you must log in before adding to cart).

Useful when tests are dependent on each other (e.g., you must log in before adding to cart).

*************************************************************************************************************************************
# API Testing with Playwright
API testing in Playwright can be done using the built-in `request` module, which allows you to make HTTP requests and validate responses. Below is a simple example of how to perform API testing with Playwright.
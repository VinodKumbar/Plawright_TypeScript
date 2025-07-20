import { test, expect } from '@playwright/test';
test('Verify Autowaiting, Forcing and Assertions in Playwright', async ({ page }) => {

    // Set timeout for the test to 30 seconds
    // test.setTimeout(30000); // Set timeout for the test to 30 seconds

    await page.goto('https://demowebshop.tricentis.com/');

    // Assertions : Auto-retying  - Auto wait works
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/', {timeout:15000}); // Verify the URL of the page
    await expect(page.locator("text = Welcome to our store")).toBeVisible({timeout:15000});

    // Assertions : Non Auto-retying - Auto wait works
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy(); // Verify the title of the page

    const welcomeText = await page.locator("text = Welcome to our store").textContent();
    expect(welcomeText).toContain('Welcome'); // Verify the welcome text on the page


    // Actions - Auto wait works
   await page.locator('#small-searchterms').fill("Laptop", { force: true }); // search box - Force action to fill the search box
   await page.locator('.search-box-button').click({ force: true }); // Click the search button with force action

});

test('Verify Codegen feature in Playwright', async ({ page }) => {

    // This command will open a browser window and allow you to interact with the page using your mouse and keyboard.
    // npx playwright codegen 
    // npx playwright codegen -o tests/Day_8_codegen_test.spec.ts https://www.demoblaze.com/index.html

});
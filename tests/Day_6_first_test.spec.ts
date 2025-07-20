import {test, expect} from '@playwright/test';

// Fixture - Global variable : page , browser, context

test('Verify website title test case', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php');
    console.log('Website Page title:', await page.title());
    await expect(page).toHaveTitle('My Shop');
    // await expect(page).toHaveTitle(/My Store/); // Regex matching
});

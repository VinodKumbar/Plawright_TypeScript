import {test, expect} from '@playwright/test';

// Fixture - Global variable : page , browser, context

test('basic test', async ({ page }) => {
    await page.goto('http://www.automationpractice.pl/index.php');
    let pageTitle = await page.title();
    console.log('Website Page title:', pageTitle);
    expect(pageTitle).toBe('My Shop');
});

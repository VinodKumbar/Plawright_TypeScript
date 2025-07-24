import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('im.vinod.kumbar@gmail.com');
  await page.locator('#email').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Vinod@123$$');
  await page.getByRole('button', { name: ' Sign in' }).click();
  await expect(page.getByRole('navigation')).toContainText('Vinod Kumbar');
  await expect(page.getByRole('link', { name: 'My Shop' })).toBeVisible();
});
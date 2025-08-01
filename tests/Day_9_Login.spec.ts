import {test, expect} from '@playwright/test';
import LoginPage from '../page_object_model/LoginPage';

test('Verify Login functionality on Demo Web Shop', async ({ page }) => {
   const loginPage = new LoginPage(page);
   // Navigate to the login page and perform login
   await loginPage.navigateToLoginPage();
   await loginPage.login('vinodautomation33@gmail.com', 'Vinod@123$$');

   // Verify the URL and header after login
   await expect(page).toHaveURL('https://www.automationexercise.com/');
   await expect(loginPage.pageHeader).toHaveText('Full-Fledged practice website for Automation Engineers');

   // Logout after login
   await loginPage.logout();

   // Verify the URL and header after logout
   await expect(page).toHaveURL('https://www.automationexercise.com/login');
    await expect(loginPage.signinPageTitle).toHaveText('Login to your account');
});
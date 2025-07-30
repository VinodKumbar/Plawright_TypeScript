

import { test, expect } from '@playwright/test';
import LoginPage from '../page_object_model/LoginPage_DAY_11_dbdata';
import { fetchEcomDataBase } from '../utilitis/databaseReader';

test('@Sanity Verify Login functionality from MySQL DB', async ({ page }) => {

    const loginPage = new LoginPage(page);
    
    const data: any = await fetchEcomDataBase();
    const email = data[0].username; 
    const password = data[0].password; 
    const productName = data[0].productname; 


    // Navigate to the login page and perform login
  await loginPage.navigateToLoginPage();
  await expect(loginPage.signinPageTitle).toHaveText('Login to your account');
   await loginPage.login(email, password);

   // Verify the URL and header after login
   await expect(page).toHaveURL('https://www.automationexercise.com/');
   await expect(loginPage.pageHeader).toHaveText('Full-Fledged practice website for Automation Engineers');

   // Logout after login
   await loginPage.logout();

   // Verify the URL and header after logout
   await expect(page).toHaveURL('https://www.automationexercise.com/login');
    await expect(loginPage.signinPageTitle).toHaveText('Login to your account');
});

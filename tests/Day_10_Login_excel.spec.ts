import {test, expect} from '@playwright/test';
import LoginPage from '../page_object_model/LoginPage';

import { readExcelData } from '../utilitis/excelReader';


// Read test data from Excel file
test('Verify Login functionality on Demo Web Shop, Excel Test Data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const creds = readExcelData();

    const email = creds.username;
    const password = creds.password;

   // Navigate to the login page and perform login
   await loginPage.navigateToLoginPage();
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

import { test, expect } from '@playwright/test';
import { fetchEcomDataBase } from '../utilitis/databaseReader';
import POManager from '../page_object_model/POManager';
import testData from '../test-data/creds.json';

test.beforeEach(async ({ page }) => {
    // Initialize Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();


     // Fetching test data from JSON file
   const email = testData[0].email;
   const password = testData[0].password; 

   // Navigate to the login page and perform login
   await loginPage.navigateToLoginPage();
   await loginPage.login(email, password);
});

test.afterEach(async ({ page }) => {
    // Initialize Page Object Manager
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    
    // Logout after each test
    await loginPage.logout();
   
});

test('@Regression Validate Product selection', async ({ page }) => {

    // Initialize Page Object Manager
    const poManager = new POManager(page);
    const productPage = poManager.getProductPage();

    // Fetching product name from the database
    const data: any = await fetchEcomDataBase();
    const productName = data[0].productname; 
  
   // Search for the product and add it to the cart
   await productPage.searchProduct(productName);
   await productPage.addToCart();
});

test('@Regression Validate Product Purchase', async ({ page }) => {

   // Initialize Page Object Manager
   const poManager = new POManager(page);
   const cartPage = poManager.getCartPage();

   // Proceed to checkout
   await cartPage.proceedToCheckout();
});

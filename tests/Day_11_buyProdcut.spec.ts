
import { test, expect } from '@playwright/test';
import { fetchEcomDataBase } from '../utilitis/databaseReader';
import POManager from '../page_object_model/POManager';
import testData from '../test-data/creds.json';

test('Validate Product Purchase', async ({ page }) => {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const productPage = poManager.getProductPage();
    const cartPage = poManager.getCartPage();

   // Fetching test data from JSON file
   const email = testData[0].email;
   const password = testData[0].password; 

    // Fetching product name from the database
    const data: any = await fetchEcomDataBase();
    const productName = data[0].productname; 

   // Navigate to the login page and perform login
   await loginPage.navigateToLoginPage();
   await loginPage.login(email, password);

  
   // Search for the product and add it to the cart
   await productPage.searchProduct(productName);
   await productPage.addToCart();

   // Proceed to checkout
   await cartPage.proceedToCheckout();
});

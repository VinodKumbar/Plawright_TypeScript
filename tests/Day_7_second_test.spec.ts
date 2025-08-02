import { test, expect, Locator } from '@playwright/test';

test.describe('Locators Test Suite : Playwright Built-in Locators and CSS Selectors', () => {
  
test.skip('Verify Playwright Builtin Locators ', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  // Using getByAltText to locate an image by its alt text / attribute value
  const logo: Locator = page.getByAltText('nopCommerce demo store');
  await expect(logo).toBeVisible();

  // Using getByText to locate a link by its text content
  // Use this locatore to find Non-Interactive elements like links, divs, spans, etc.
  
  //await expect(page.getByText('Welcome to our store')).toBeVisible();  //- Full String Match

  await expect(page.getByText('Welcome to')).toBeVisible(); // - Partial String Match / Substring Match

/*    1. Using getByRole to locate a button by its role and name
      2. Implicitly accessible elements are preferred over explicit ones.  Tagname and role are same.
      3. Use this locatore to find Interactive elements.
      4. Role locators include button, links, checkboxes, radio, headings, list, tables, etc. */

  const registerButton: Locator = page.getByRole('link', { name: 'Register' }); // i is used for case insensitive match.
  await expect(registerButton).toBeVisible();
  await registerButton.click();

  const registerHeader: Locator = page.getByRole('heading', { name: 'Register' });
  await expect(registerHeader).toBeVisible();

/*  Using getByLabel to locate an input field by its associated label's text
    Form controls like input, textarea, select, etc. are associated with labels.
    This is useful for locating form controls that have labels. */


   await page.getByLabel('First name').fill('John');
   await page.getByLabel('Last name').fill('Wick');
   await page.getByLabel('Email').fill('john.wick@gmail.com');

   /* 1. Using getByPlaceholder to locate an input field by its placeholder text
      This is useful for locating form controls that have placeholders. */

   await page.getByPlaceholder('Search store').fill('Apple MacBook Pro 13-inch');

    /* 1. Using getByTitle to locate an element by its title attribute
        This is useful for locating elements that have a title attribute. */

        await page.goto("file:///C:/Users/VinodKumbar/Downloads/app.html"); // Open local html file in browser.

       const link : Locator =  page.getByTitle('Home Page Link'); // Click on the link with title attribute 'Home Page Link'
       await expect(link).toHaveText("Home"); // Verify the link text
       await link.click();

       await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML"); // Verify the text of the element with title attribute 'HyperText Markup Language'


       //Using getByTestId to locate an element by its data-testid attribute
         const profileName: Locator = page.getByTestId('profile-name');
         await expect(profileName).toHaveText('John Wick'); // Verify the profile name text
         const profileEmail: Locator = page.getByTestId('profile-email');
         await expect(profileEmail).toHaveText('john.wick@gmail.com'); // Verify the profile email text
});

test('Verify CSS Selectors ', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    // Using CSS selectors to locate elements

    // tag with id
    const searchBox: Locator = page.locator('input#small-searchterms'); // CSS selector for the search input field
    await expect(searchBox).toBeVisible();
    searchBox.fill('Laptop'); // Fill the search box with 'Laptop'
    await page.waitForTimeout(2000); // Wait for 2 seconds to see the filled value

    // tag with class
    const searchButton: Locator = page.locator('input.search-box-button'); // CSS selector for the search button
    await expect(searchButton).toBeVisible();
    await searchButton.click(); // Click the search button

    // tag with attribute and value
    const addToCart: Locator = page.locator('input.button-2'); // CSS selector for the add to cart button
    await addToCart.click(); // Click the add to cart button
     await page.waitForTimeout(5000); // Wait for 2 seconds to see the filled value

});

});
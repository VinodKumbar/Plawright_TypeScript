import {Page, Locator} from '@playwright/test';

class HomePage {
    // define the Variables - Private and Readonly

    private readonly page: Page;
    private readonly logoLink: Locator;
    private readonly productLink: Locator;
    private readonly productName: Locator;
    private readonly addtoCartButton: Locator;
    private readonly successAlert: Locator;
    private readonly shoppingCartLink : Locator;
    private readonly checkoutButton: Locator;
    private readonly alert: Locator;

    // Constructor to initialize the variables
    constructor(page: Page) {
        this.page = page;
        this.logoLink = page.getByAltText('Your Store');
        this.productLink = page.getByRole('link', { name: 'MacBook' });
        this.productName = page.getByTitle('MacBook');
        this.addtoCartButton = page.getByRole('button', { name: 'Add to Cart' });
        this.successAlert = page.getByRole('alert', { name: 'Success: You have added MacBook to your shopping cart!' });
        this.shoppingCartLink = page.getByText('Shopping Cart');
        this.checkoutButton = page.getByRole('link', { name: 'Checkout' });
        this.alert = page.locator('.alert-danger');

    }

    // Action Methods

    async navigateToHomePage() {
        await this.page.goto('https://demo.opencart.com/en-gb?route=common/home');
        await this.logoLink.click();
    }


    async addProductToCart() {
        await this.productLink.click();
        await this.addtoCartButton.click();
        await this.successAlert.waitFor();
    }

    async verifyProductInCart(productName: string) {
        await this.shoppingCartLink.click();
        await this.checkoutButton.click();
        await this.productName.textContent();
        
    }
    async verifyAlertMessage(expectedMessage: string) {
        await this.alert.waitFor();
        const actualMessage = await this.alert.textContent();
        if (actualMessage === expectedMessage) {
            console.log(`Alert message is correct: ${actualMessage}`);
        } else {
            console.error(`Expected alert message to be '${expectedMessage}', but got '${actualMessage}'`);
        }
    }
}
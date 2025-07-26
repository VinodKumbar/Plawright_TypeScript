import {Page, Locator} from '@playwright/test';
import { link } from 'fs';

export class CartPage {
    private readonly page: Page;
    public readonly productName: Locator;
    private readonly checkoutButton: Locator;

    constructor(page : Page) {
        this.page = page;
        this.productName = page.getByRole('link', { name: 'GRAPHIC DESIGN MEN T SHIRT - BLUE' });
        this.checkoutButton = page.getByRole('button', { name: 'Proceed To Checkout' });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
export default CartPage;


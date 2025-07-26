import {Page, Locator} from '@playwright/test';

export class ProductPage {
    private readonly page: Page;
    private readonly productLink: Locator;
    private readonly productSearchField: Locator;
    private readonly searchIcon: Locator;
    private readonly addToCartButton: Locator;
    private readonly viewCartLink: Locator;

    constructor(page : Page) {
        this.page = page;
        this.productLink = page.getByText('Products');
        this.productSearchField = page.locator('#search_product');
        this.searchIcon = page.locator('.fa-search');
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    }

    async searchProduct(productName: string) {
      
        await this.productLink.click();
        await this.productSearchField.fill(productName);
        await this.searchIcon.click();
    }

    async addToCart() {
        await this.addToCartButton.scrollIntoViewIfNeeded();
        await this.addToCartButton.hover();
        await this.page.waitForTimeout(1000); // Wait for the hover effect to take place
        await this.addToCartButton.click();
        await this.viewCartLink.click();
    }
}
export default ProductPage;
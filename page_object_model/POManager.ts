import { Page } from '@playwright/test';
import LoginPage from '../page_object_model/LoginPage';
import ProductPage from '../page_object_model/ProductPage';
import CartPage from '../page_object_model/CartPage';

class POManager {
    private loginPage: LoginPage;
    private productPage: ProductPage;
    private cartPage: CartPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
    }

    public getLoginPage(): LoginPage {
        return this.loginPage;
    }

    public getProductPage(): ProductPage {
        return this.productPage;
    }

    public getCartPage(): CartPage {
        return this.cartPage;
    }
}

export default POManager;

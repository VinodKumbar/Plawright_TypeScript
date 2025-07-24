import {Page, Locator} from '@playwright/test';

class LoginPage {
    // define the Variables - Private and Readonly

    private readonly page: Page;
    private readonly myAccoyntLink: Locator;
    private readonly loginLink: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    // Constructor to initialize the variables
    constructor(page: Page) {
        this.page = page;
        this.myAccoyntLink = page.getByText('My account');
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.emailInput = page.getByLabel('E-Mail Address');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    
    // Action Methods
    async navigateToLoginPage() {
        await this.page.goto('https://demo.opencart.com/en-gb?route=account/login');
        await this.myAccoyntLink.click();
        await this.loginLink.click();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

export default LoginPage;

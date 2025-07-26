import {Page, Locator} from '@playwright/test';

class LoginPage {
    // define the Variables - Private and Readonly

    private readonly page: Page;
    private readonly loginLink: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    public readonly pageHeader: Locator;
    public readonly signinPageTitle : Locator;

    // Constructor to initialize the variables
    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.emailInput = page.getByPlaceholder('Email Address').nth(0);
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.pageHeader = page.getByRole('heading', { name: 'Full-Fledged practice website' })
        this.signinPageTitle = page.getByRole('heading', { name: 'Login to your account' })
    }
    
    // Action Methods
    async navigateToLoginPage() {
        await this.page.goto('/');
       await this.loginLink.click();
    
    }
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

    async logout() {
        const logoutButton = this.page.getByRole('link', { name: 'Logout' });
        await logoutButton.click();
    }
}

export default LoginPage;

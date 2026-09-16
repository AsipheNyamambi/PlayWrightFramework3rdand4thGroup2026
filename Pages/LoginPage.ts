import { BasePage } from "../utils/BasePage";
import { Locator } from "@playwright/test";

export class LoginPage extends BasePage{ 
    
    async openNdosiPage() {
        await this.GoToUrl('/');
    }

    async navigateToLoginPage() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Login' }));
    }

    async userLogin(username: string, password: string) {
        await this.EnterText(this.page.locator('#login-email'),username);
        await this.EnterText(this.page.locator('#login-password'),password);
        await this.ClickElement(this.page.locator('xpath=//*[@id="login-submit"]'));
    }

    async verifyDashboardHeading() {
        await this.VerifyElementVisible(this.page.getByRole('heading', { name: /Welcome\s*back/i })); 
    }
} 
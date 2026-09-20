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
    // async clickMenuButton() {
    //     await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
    //     //await page.locator('text=Menu').click();
    // }

    //  async ClickMyProfile () {
    //      await this.ClickElement(this.page.getByRole('button', { name: 'My Profile' }));
    // }
        
    //  async ClickEditProfile () {
    //      await this.ClickElement(this.page.getByRole('button', { name: 'Edit Profile' }));
    // }
} 
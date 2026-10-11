import { BasePage } from "../utils/BasePage";

export class LoginPage extends BasePage{ 
    
    async openNdosiPage() {
        await this.GoToUrl('/');
    }
    async navigateToLoginPage() {
       await this.ClickElement(this.page.getByRole('button', { name: 'Login' }));
       //await this.page.locator('.user-pill').click();
    }
    async userLogin(username: string, password: string) {
        await this.EnterText(this.page.locator('#login-email'),username);
       //await this.page.locator('.loginEmail').fill(username);
        await this.EnterText(this.page.locator('#login-password'),password);
        //await this.page.locator('.loginPassword').fill(password);
        await this.ClickElement(this.page.locator('xpath=//*[@id="login-submit"]'));
        //await this.page.locator('xpath=//*[@id="login-submit"]').click();
    }
    async verifyDashboardHeading() {
        await this.VerifyElementVisible(this.page.getByRole('heading', { name: /Welcome\s*back/i })); 
    }

} 
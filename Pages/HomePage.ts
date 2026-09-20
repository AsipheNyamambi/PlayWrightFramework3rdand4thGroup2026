import { BasePage } from "../utils/BasePage";
import { Locator } from "@playwright/test";

export class HomePage extends BasePage{
     async ClickMenu () {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));   
     }

     async ClickMyProfile (){
        await this.ClickElement(this.page.getByRole('button', { name: 'My Profile' }));
     }
    
     async ClickEditProfile (){
        await this.ClickElement(this.page.getByRole('button', { name: 'Edit Profile' }))
     }

     async EditGitProfileName (gitusername: string ){
        await this.EnterText(this.page.getByPlaceholder('e.g., octocat'), gitusername)
     }
}

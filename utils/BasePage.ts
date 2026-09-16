import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";  

export class BasePage{

    constructor(public page:Page){
    }

    async GoToUrl(url: string){
        await this.page.goto(url);
    }

    async ClickElement(locator: Locator){
        await locator.click();
    }
    
    async EnterText(locator: Locator, text: string){
        await locator.fill(text);
    }

    async VerifyElementVisible(locator: Locator){
        await expect(locator).toBeVisible();
    }
    async GetTextElementValue(locator: Locator){
        return await locator.textContent();
    }


}

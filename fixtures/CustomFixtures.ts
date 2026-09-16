import { LoginPage } from "../Pages/LoginPage";
import { test as base } from "@playwright/test";


type CustomFixtures = {
    // Define your custom fixtures here
    loginPage: LoginPage;

};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

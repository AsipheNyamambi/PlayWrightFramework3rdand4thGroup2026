import { LoginPage } from "../Pages/LoginPage";
import { test as base } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";       


type CustomFixtures = {
    // Define your custom fixtures here
     loginPage: LoginPage;
     homePage: HomePage;

};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

// Load authentication state for tests
test.use({ storageState: 'playwright/.auth/user.json' });
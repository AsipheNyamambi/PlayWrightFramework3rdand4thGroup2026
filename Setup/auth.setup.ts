import { LoginPage } from "../Pages/LoginPage";
import { validUsers } from "../testdata/TestData";
import { test as setup } from "@playwright/test";


const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);
   // await loginPage.openNdosiPage();
    await loginPage.GoToUrl('/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
    await loginPage.verifyDashboardHeading();

    // Save authentication state to file
    await page.context().storageState({
        path: authFile
    });

});


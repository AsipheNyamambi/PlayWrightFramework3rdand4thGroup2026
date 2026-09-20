import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";

test.describe('Login Tests', () => {

    test('Admin user should be able to login', async ({ loginPage }) => {
        await loginPage.openNdosiPage();
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.verifyDashboardHeading();
        // await loginPage.clickMenuButton();
        // await loginPage.ClickMyProfile();
        // await loginPage.ClickEditProfile();


    });
    //  test('Student user should be able to login', async ({ loginPage }) => {
    //     await loginPage.openNdosiPage();
    //     await loginPage.navigateToLoginPage();
    //     await loginPage.userLogin(validUsers.studentUser.username, validUsers.studentUser.password);
    //     await loginPage.verifyDashboardHeading();
    //     // await loginPage.clickMenuButton();
    //     // await loginPage.ClickMyProfile();
    //     // await loginPage.ClickEditProfile();

    // });
        test('User should be able to view profile', async ({ homePage }) => {
        await homePage.ClickMenu();
        await homePage.ClickMyProfile();
        await homePage.ClickEditProfile();
        await homePage.EditGitProfileName(validUsers.gitusername.mygitusername);
    });
});
